import postServices from "../services/postServices.js";

console.log("--- DEBUG postControllers ---");
console.log("ruta import:", "../services/postServices.js");
console.log("typeof postServices =", typeof postServices);
console.log("postServices =", postServices);

export const postControllers = () => ({
  // Crear post
  async createPost(req, res) {
    try {
      console.log("📥 BODY:", req.body);
      console.log("📸 FILE:", req.file);

      const { title, content, authorId } = req.body;
      const image = req.file ? req.file.path : null;

      console.log("📦 Datos que se enviarán a Prisma:", {
        title,
        content,
        authorId: Number(authorId),
        image,
      });

      const newPost = await prisma.post.create({
        data: {
          title,
          content,
          image,
          author: {
            connect: { id: Number(authorId) },
          },
        },
      });

      res.status(201).json(newPost);
    } catch (error) {
      console.error("❌ ERROR REAL:", error);
      res.status(500).json({ message: "Error al crear el post" });
    }
  },

  // Obtener todos los posts
  async getAllPosts(req, res) {
    try {
      const posts = await postServices().getAllPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error obteniendo posts:", error);
      res.status(500).json({ message: "Error al obtener las publicaciones" });
    }
  },

  // Obtener post por id
  async getPostById(req, res) {
    try {
      const post = await postServices().getPostById(Number(req.params.id));

      if (!post) {
        return res.status(404).json({ message: "Post no encontrado" });
      }

      res.json(post);
    } catch (error) {
      console.error("Error obteniendo post:", error);
      res.status(500).json({ message: "Error al obtener la publicación" });
    }
  },

  // Actualizar post
  async updatePost(req, res) {
    try {
      const { title, content } = req.body;
      const image = req.file ? req.file.path : undefined;

      const updatedPost = await postServices().updatePost(
        Number(req.params.id),
        {
          title,
          content,
          ...(image && { image }),
        }
      );

      res.json(updatedPost);
    } catch (error) {
      console.error("Error actualizando post:", error);
      res.status(500).json({ message: "Error al actualizar" });
    }
  },

  // Eliminar post
  async deletePost(req, res) {
    try {
      await postServices().deletePost(Number(req.params.id));
      res.json({ message: "Post eliminado" });
    } catch (error) {
      console.error("Error eliminando post:", error);
      res.status(500).json({ message: "Error al eliminar" });
    }
  },
});
