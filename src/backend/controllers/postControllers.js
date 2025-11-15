import * as postServices from "../services/postServices.js";

/**
 *  Crear una nueva publicación
 */
export const createPostController = async (req, res) => {
  try {
    const { content, authorId } = req.body;
    let imageUrl =req.file ? req.file.path : null;

    if (req.file) {
      imageUrl = req.file.path; // ruta relativa guardada por Multer
    }

    // Guardar en la base de datos
    const newPost = await prisma.post.create({
      data: {
        content,
        authorId: parseInt(authorId),
        image: imageUrl,
      },
    });

    // Formatear URL completa de la imagen para el frontend
    const fullImageUrl = imageUrl ? `http://localhost:3000/${imageUrl}` : null;

    // Respuesta final
    res.status(201).json({
      message: "Publicación creada con éxito 🎉",
      post: {...newPost,image: fullImageUrl},
    });
  } catch (error) {
    console.error("Error en createPostController:", error);

    //  borrar el archivo subido si hubo error
    // if (req.file) {
    //   import fs from 'fs/promises';
    //   await fs.unlink(req.file.path);
    // }

    res.status(500).json({
      message: "Error al crear la publicación",
      error: error.message,
    });
  }
};


/**
 * 📋 Obtener todas las publicaciones
 */
export const getAllPostsController = async (req, res) => {
  try {
    const posts = await postServices.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener publicaciones",
      error: error.message,
    });
  }
};

/**
 * 🔍 Obtener una publicación por su ID
 */
export const getPostByIdController = async (req, res) => {
  try {
    const post = await postServices.getPostById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    // Si el servicio lanza "Publicación no encontrada", se usa 404
    res.status(404).json({
      message: error.message || "Publicación no encontrada",
    });
  }
};

// ----------------------------------------------------
// ✍️ NUEVO: Actualizar una publicación por ID (PUT)
// ----------------------------------------------------
export const updatePostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const updateData = req.body;

    // Llamar al servicio para actualizar
    const updatedPost = await postServices.updatePost(postId, updateData);

    res.status(200).json({
      message: "Publicación actualizada con éxito ✅",
      post: updatedPost,
    });
  } catch (error) {
    // Manejo de errores de validación (datos faltantes) o no encontrado (ID inválido)
    const statusCode =
      error.message.includes("no se encontraron") ||
      error.message.includes("no encontrada")
        ? 404
        : 400;

    res.status(statusCode).json({
      message: "Error al actualizar la publicación",
      error: error.message,
    });
  }
};

// ----------------------------------------------------
// 🗑️ COMPLETO: Eliminar una publicación por ID (DELETE)
// ----------------------------------------------------
export const deletePostController = async (req, res) => {
  try {
    const postId = req.params.id;

    // Llamar al servicio para eliminar
    const result = await postServices.deletePost(postId);

    res.status(200).json({
      message: result.message,
    });
  } catch (error) {
    // Si el servicio lanza "Publicación no encontrada", se usa 404
    res.status(404).json({
      message: error.message || "Publicación no encontrada",
    });
  }
};
