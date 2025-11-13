import express from "express";
import {
  createPostController,
  getAllPostsController,
  getPostByIdController,
  deletePostController,
  updatePostController
} from "../controllers/postControllers.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Posts
 *     description: Endpoints para gestionar las publicaciones
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Crea una nueva publicación
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *               authorId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Publicación creada con éxito.
 *       400:
 *         description: Datos incompletos o inválidos.
 */
router.post("/", createPostController);


/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Obtiene todas las publicaciones
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de publicaciones obtenida.
 *       500:
 *         description: Error del servidor.
 */

router.get("/", getAllPostsController);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Obtiene una publicación por su ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la publicación.
 *     responses:
 *       200:
 *         description: Publicación encontrada.
 *       404:
 *         description: Publicación no encontrada.
 */

router.get("/:id", getPostByIdController);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Actualiza una publicación por su ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la publicación a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicación actualizada con éxito.
 *       404:
 *         description: Publicación no encontrada.
 */

router.put("/:id", updatePostController);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Elimina una publicación por su ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la publicación a eliminar.
 *     responses:
 *       200:
 *         description: Publicación eliminada con éxito.
 *       404:
 *         description:*
*/
router.delete("/:id", deletePostController);

export default router;