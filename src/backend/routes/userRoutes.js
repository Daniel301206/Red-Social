import express from "express";
import { userControllers } from "../controllers/userControllers";
import { userService } from "../services/userServices";

//Traer controlador
const router=express.Router();

//Rutas para llamar al usuarios
router.get('/',userController,getUsers);
router.post('/',userController,createUser);

export default router;