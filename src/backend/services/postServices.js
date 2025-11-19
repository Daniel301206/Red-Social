import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPost = async (data) => {
  return await prisma.post.create({
    data,
  });
};

const postServices = {
  // 🧩 Crear una publicación (CORREGIDO)
  async createPost(data) {
    try {
      const { title, content, authorId, image } = data;

      // Validar campos obligatorios
      if (!title || !content || !authorId) {
        throw new Error(
          "Faltan campos obligatorios: title, content o authorId"
        );
      }

      // Crear publicación
      const newPost = await Prisma.post.create({
        data: {
          title,
          content,
          image, // <-- USAMOS 'image' AHORA
          author: {
            connect: { id: Number(authorId) }, // conecta con el usuario
          },
        },
      });

      return newPost;
    } catch (error) {
      throw new Error("Error al crear la publicación: " + error.message);
    }
  },

  // 🧱 Obtener todas las publicaciones
  // ===================================================================
  async getAllPosts() {
    try {
      const posts = await prisma.post.findMany({
        include: {
          author: {
            select: { id: true, name: true, email: true },
          },
        },
        orderBy: { createdAt: "desc" }, // los más recientes primero
      });
      return posts;
    } catch (error) {
      throw new Error("Error al obtener las publicaciones: " + error.message);
    }
  },

  // ===================================================================
  // 🔍 Obtener una publicación por su ID
  // ===================================================================
  async getPostById(id) {
    try {
      const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: {
          author: {
            select: { id: true, name: true, email: true },
          },
        },
      });

      if (!post) throw new Error("Publicación no encontrada");
      return post;
    } catch (error) {
      throw new Error("Error al obtener la publicación: " + error.message);
    }
  },

  // ===================================================================
  // ✍️ Actualizar una publicación por ID
  // ===================================================================
  async updatePost(id, updateData) {
    try {
      if (Object.keys(updateData).length === 0) {
        throw new Error("No se proporcionaron datos para actualizar");
      }

      const updatedPost = await prisma.post.update({
        where: { id: Number(id) },
        data: updateData,
        include: {
          author: {
            select: { id: true, name: true, email: true },
          },
        },
      });

      return updatedPost;
    } catch (error) {
      if (error.code === "P2025") {
        throw new Error("Publicación no encontrada o no se pudo actualizar.");
      }
      throw new Error("Error al actualizar la publicación: " + error.message);
    }
  },

  // ===================================================================
  // 🗑️ Eliminar una publicación por ID
  // ===================================================================
  async deletePost(id) {
    try {
      const post = await prisma.post.findUnique({
        where: { id: Number(id) },
      });

      if (!post) throw new Error("Publicación no encontrada");

      await prisma.post.delete({ where: { id: Number(id) } });
      return { message: "Publicación eliminada con éxito" };
    } catch (error) {
      throw new Error("Error al eliminar la publicación: " + error.message);
    }
  },
};
export default postServices;
