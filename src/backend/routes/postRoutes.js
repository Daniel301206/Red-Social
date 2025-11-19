import express from "express";
import { postControllers } from "../controllers/postControllers.js";
import { uploadMedia } from "../middlewares/uploadMiddleware.js";

const router = express.Router();
const controller = postControllers();

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
 *     summary: Crear una publicación con imagen o video
 *     tags: [Posts]
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
 *               content:
 *                 type: string
 *               authorId:
 *                 type: integer
 *               mediaFile:         # ← corregido
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 */
router.post("/", uploadMedia, controller.createPost);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de todas las publicaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Mi primera publicación"
 *                   content:
 *                     type: string
 *                     example: "Contenido de ejemplo"
 *                   image:
 *                     type: string
 *                     nullable: true
 *                     example: "uploads/imagen.jpg"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-11-18T01:00:00Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-11-18T01:05:00Z"
 *                   author:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Daniel Rivera"
 *                       email:
 *                         type: string
 *                         example: "daniel@example.com"
 *       500:
 *         description: Error interno del servidor
 */


router.get("/", controller.getAllPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Obtener una publicación por ID
 *     tags: [Posts]
 */
router.get("/:id", controller.getPostById);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Actualizar una publicación (imagen/video opcional)
 *     tags: [Posts]
 */
router.put("/:id", uploadMedia, controller.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Eliminar una publicación
 *     tags: [Posts]
 */
router.delete("/:id", controller.deletePost);

export default router;
