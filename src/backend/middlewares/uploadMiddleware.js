// src/middlewares/uploadMiddleware.js

import multer from "multer";
import path from "path";

// 1. Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // carpeta donde se guardan las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// 2. Crear instancia de Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// 3. Exportación ES Module
export const uploadImage = upload.single("image");
