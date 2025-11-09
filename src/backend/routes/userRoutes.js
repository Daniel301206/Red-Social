import express from "express";
import { userControllers } from "../controllers/userControllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        email:
 *          type: string
 *          example: danielberrospi@gmail.com
 *        name:
 *          type: string
 *          example: Daniel Berrospi
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: OK
 */
router.get("/", userControllers.getUsers); //Rutas para llamar al usuario

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear nuevo usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: daniel123riberr@gmail.com
 *              name:
 *                type: string
 *                example: Daniel Junior
 *    responses:
 *      201:
 *        description: Usuario creado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 */

router.post("/", userControllers.createUser); //Rutas para llamar al usuario

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan Pérez
 *               email:
 *                 type: string
 *                 example: juanperez@gmail.com
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *         content:
 *           application/json:
 *             $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 */

router.put("/:id", userControllers.updateUser); //Rutas para llamar al usuario

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: Eliminar usuario por ID
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID del usuario
 *        schema:
 *          type: integer
 *    responses:
 *      204:
 *        description: Usuario eliminado correctamente
 *      404:
 *        description: Usuario no encontrado
 */

router.delete("/:id", userControllers.deleteUser); //Rutas para llamar al usuario

export default router;
