import express from "express";
import {createPostController,getAllPostsController,getPostByIdController,deletePostController,updatePostController
} from "../controllers/postControllers.js";
import { uploadImage } from "../middlewares/uploadMiddleware.js";


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
 *     summary: Crear una publicación con imagen
 *     tags:
 *       - Posts
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Mi primera publicación"
 *               content:
 *                 type: string
 *                 example: "Esto es una prueba"
 *               authorId:
 *                 type: integer
 *                 example: 1
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 */

router.post("/", uploadImage, createPostController);


/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de publicaciones
 */

router.get("/", getAllPostsController);


/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Obtener una publicación por ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la publicación
 *     responses:
 *       200:
 *         description: Publicación encontrada
 *       404:
 *         description: Publicación no encontrada
 */
router.get("/:id", getPostByIdController);


/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Actualizar una publicación (imagen opcional)
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Título actualizado"
 *               content:
 *                 type: string
 *                 example: "Contenido actualizado"
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Publicación actualizada
 *       404:
 *         description: Publicación no encontrada
 */

router.put("/:id", updatePostController);


/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Eliminar una publicación
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Publicación eliminada
 *       404:
 *         description: Publicación no encontrada
 */

router.delete("/:id", deletePostController);
export default router;