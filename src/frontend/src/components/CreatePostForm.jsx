// src/components/CreatePostForm.jsx

// src/components/CreatePostForm.jsx (CORREGIDO)

import React, { useState } from 'react';
import { createPost } from '../Services/postService'; 

// 💡 Aceptamos 'currentUser' como una prop.
const CreatePostForm = ({ onPostCreated, currentUser }) => {
    const [content, setContent] = useState('');
    const [imageFile, setImageFile] = useState(null); 
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Usamos el nombre del usuario loggeado o un valor por defecto.
    const userName = currentUser?.name || 'Usuario'; 
    const userAvatar = currentUser?.profilePicUrl || '/default_avatar.jpg'; // Usamos la URL del usuario

    const handleSubmit = async (e) => {
        // ... (el resto de la lógica de handleSubmit se mantiene igual)
        e.preventDefault();
        if (!content && !imageFile) return; 
        setIsSubmitting(true);
        
        const formData = new FormData();
        formData.append('content', content);

        formData.append('authorId', currentUser?.id);
        
        if (imageFile) {
            formData.append('image', imageFile); 
        }

        try {
            const newPost = await createPost(formData);
            
            setContent('');
            setImageFile(null);
            if (onPostCreated) {
                onPostCreated(newPost);
            }
            
        } catch (error) {
            console.error('Error al crear la publicación:', error);
            alert('Fallo al subir la publicación. Revisa la consola y tu backend.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-4 shadow-xl rounded-xl mb-6 max-w-xl mx-auto border border-gray-200">
            
            {/* Parte superior: Avatar e input de texto */}
            <div className="flex items-center mb-4 pb-4 border-b border-gray-200">
                <img 
                    // 💥 USAMOS LA URL DEL USUARIO LOGGEADO
                    src={userAvatar} 
                    alt={userName} 
                    className="w-10 h-10 rounded-full mr-3 object-cover" 
                />
                <input 
                    type="text" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                    // 💥 USAMOS EL NOMBRE DEL USUARIO LOGGEADO
                    placeholder={`¿Qué estás pensando, ${userName}?`}
                    className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base text-gray-800"
                />
            </div>
            
            {/* Parte inferior: Botones de acción (Video, Foto/video, Sentimiento/actividad) */}
            <div className="flex justify-around items-center">
                {/* Botón Video en vivo */}
                <button className="flex items-center text-red-500 font-semibold text-sm hover:bg-red-50 p-2 rounded-lg transition">
                    <span role="img" aria-label="video-live" className="mr-2 text-xl">🔴</span>
                    Video en vivo
                </button>

                {/* Botón Foto/video (Input de archivo) */}
                <label className="flex items-center text-green-600 font-semibold text-sm cursor-pointer hover:bg-green-50 p-2 rounded-lg transition">
                    <span role="img" aria-label="photo-video" className="mr-2 text-xl">🏞️</span>
                    Foto/video
                    <input 
                        type="file" 
                        accept="image/*,video/*" 
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="hidden" 
                    />
                </label>

                {/* Botón Sentimiento/actividad */}
                <button className="flex items-center text-yellow-500 font-semibold text-sm hover:bg-yellow-50 p-2 rounded-lg transition">
                    <span role="img" aria-label="feeling-activity" className="mr-2 text-xl">🙂</span>
                    Sentimiento/actividad
                </button>
            </div>

            {/* Renderizado condicional del botón de Publicar */}
            {(imageFile || content) && (
                <div className="flex justify-end items-center mt-4 pt-4 border-t border-gray-200">
                    {imageFile && <p className="text-sm text-gray-600 mr-auto">Archivo: {imageFile.name}</p>}
                    <button 
                        onClick={handleSubmit} 
                        disabled={isSubmitting || (!content && !imageFile)}
                        className="bg-blue-600 text-white font-bold py-1 px-4 rounded-full text-sm hover:bg-blue-700 disabled:opacity-50 transition"
                    >
                        {isSubmitting ? 'Publicando...' : 'Publicar'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CreatePostForm;