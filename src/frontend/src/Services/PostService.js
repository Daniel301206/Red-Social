const API_URL = "http://localhost:3000/api/posts";

// Obtener todas las publicaciones
export const getPosts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Error obteniendo publicaciones");
  }
  return res.json();
};

// Crear una nueva publicación
export const createPost = async (postFormData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    body: postFormData,
  });
  if (!res.ok) {
    throw new Error("Error creando la publicación");
  }

  return res.json();
};

// Eliminar una publicación
export const deletePost = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Error eliminando la publicación");
  }

  return res.json();
};

// Actualizar una publicación
export const updatePost = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error actualizando la publicación");
  }

  return res.json();
};
