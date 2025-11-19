import { useEffect, useState } from "react";
// 1. Importamos getPosts, deletePost y createPost (aunque createPost se usa en el formulario)
import { getPosts, deletePost } from "../Services/postService";
import Layout from "./Layout";
// 2. Importamos el componente de formulario (Asegúrate de que esta ruta sea correcta)
import CreatePostForm from "../components/CreatePostForm";

// Componente principal
const VentanaInicio = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    // 💡 IMPORTANTE: Reemplaza esto con la forma real de obtener tu usuario loggeado.
    // Usaremos un ID fijo para la lógica de eliminar.
    const currentUser = { id: 1, name: 'Mi Usuario', profilePicUrl: '/default_avatar.jpg' }; 

    // Función de carga (mejorada con estado de carga)
    useEffect(() => {
        const cargarPosts = async () => {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (error) {
                console.error("Error cargando publicaciones:", error);
            } finally {
                setIsLoading(false);
            }
        };
        cargarPosts();
    }, []);

    // 💥 NUEVA FUNCIÓN: Añadir el post recién creado al inicio del feed
    const handlePostCreated = (newPost) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    // 💥 NUEVA FUNCIÓN: Eliminar el post del backend y del estado
    const handleDeletePost = async (postId) => {
        if (!window.confirm("¿Estás seguro de que quieres eliminar esta publicación?")) return;
        
        try {
            await deletePost(postId);
            // Actualiza el estado filtrando el post eliminado
            setPosts(prevPosts => prevPosts.filter(post => post.id !== postId)); 
        } catch (error) {
            console.error("Error eliminando publicación:", error);
            alert("Fallo al eliminar la publicación.");
        }
    };


    if (isLoading) {
        return <Layout><div className="p-6 text-center text-gray-400">Cargando publicaciones...</div></Layout>;
    }

    return (
        <Layout>
            <div className="w-full p-6 max-w-2xl mx-auto">
                
                {/* 💥 3. AGREGAMOS EL FORMULARIO DE CREACIÓN AQUÍ */}
                <CreatePostForm onPostCreated={handlePostCreated} currentUser={currentUser} />

                <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                    Publicaciones
                </h2>

                {posts.length === 0 ? (
                    <p className="text-gray-300">No hay publicaciones disponibles</p>
                ) : (
                    posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-4 shadow-md"
                        >
                            {/* Diseño del post mejorado con info y botón de eliminar */}
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center">
                                    <img 
                                        src={post.user?.profilePicUrl || currentUser.profilePicUrl} // Usamos avatar del post o uno por defecto
                                        alt="Avatar" 
                                        className="w-8 h-8 rounded-full mr-3 object-cover" 
                                    />
                                    <div>
                                        <h3 className="text-yellow-400 text-lg font-semibold leading-none">
                                            {post.user?.name || post.title || `Autor ID: ${post.authorId}`}
                                        </h3>
                                        <p className="text-gray-500 text-xs mt-0.5">
                                            Hace un momento
                                        </p>
                                    </div>
                                </div>
                                {/* 💥 BOTÓN DE ELIMINAR (Solo si el usuario actual es el autor) */}
                                {currentUser.id === post.id && (
                                    <button
                                        onClick={() => handleDeletePost(post.id)}
                                        className="text-gray-500 hover:text-red-500 transition p-1 rounded-full"
                                        title="Eliminar publicación"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </button>
                                )}
                            </div>


                            {/* Contenido y Imagen */}
                            <p className="text-gray-300 mb-3">{post.content}</p>

                            {post.image && (
                                <img
                                    src={post.image}
                                    alt="img"
                                    className="w-full max-h-80 object-cover mt-3 rounded-lg"
                                />
                            )}
                            
                            {/* Puedes añadir la sección de interacción (Likes/Comentarios) aquí si quieres */}
                            <p className="text-gray-400 text-sm mt-3 border-t border-gray-700 pt-3">
                                Autor ID: {post.authorId}
                            </p>
                        </div>
                    ))
                )}

            </div>
        </Layout>
    );
};

export default VentanaInicio;