import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /api/users:
 *   get:['Users']
 *    summary: Retrieve a list of users
 *   tags: [Users]
 *  responses:
 *    200:
 *     description: A list of users.
 *    content:
 *     application/json:
 *     schema:
 *      type: array
 *     items:
 *     $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *   tags: [Users]
 *  responses:
 *    201:
 *     description: The created user.
 *    content:
 *     application/json:
 *     schema:
 *      $ref: '#/components/schemas/User'
 */
//Rutas para llamar al usuario
router.get('/',userController.getUsers);
router.post('/',userController.createUser);
router.put('/:id', userController.updateUser);


export default router;
