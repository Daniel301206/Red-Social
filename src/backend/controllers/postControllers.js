import prisma from "../prisma/schema.prisma";

// Crear post
export const createPostController = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    const image = req.file ? req.file.path : null;

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId: Number(authorId),
        image,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePicUrl: true,
          },
        },
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creando post:", error);
    res.status(500).json({ message: "Error al crear el post" });
  }
};

// Obtener todos los posts
export const getAllPostsController = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { id: "desc" },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePicUrl: true,
          },
        },
      },
    });

    res.json(posts);
  } catch (error) {
    console.error("Error obteniendo posts:", error);
    res.status(500).json({ message: "Error al obtener las publicaciones" });
  }
};

// Obtener post por id
export const getPostByIdController = async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePicUrl: true,
          },
        },
      },
    });

    if (!post) return res.status(404).json({ message: "Post no encontrado" });

    res.json(post);
  } catch (error) {
    console.error("Error obteniendo post:", error);
    res.status(500).json({ message: "Error al obtener la publicación" });
  }
};

// Actualizar post
export const updatePostController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.file ? req.file.path : undefined;

    const updatedPost = await prisma.post.update({
      where: { id: Number(req.params.id) },
      data: {
        title,
        content,
        ...(image && { image }),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePicUrl: true,
          },
        },
      },
    });

    res.json(updatedPost);
  } catch (error) {
    console.error("Error actualizando post:", error);
    res.status(500).json({ message: "Error al actualizar" });
  }
};

// Eliminar post
export const deletePostController = async (req, res) => {
  try {
    await prisma.post.delete({
      where: { id: Number(req.params.id) },
    });

    res.json({ message: "Post eliminado" });
  } catch (error) {
    console.error("Error eliminando post:", error);
    res.status(500).json({ message: "Error al eliminar" });
  }
};
