// src/middlewares/uploadMiddleware.js

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// 1️⃣ Crear __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2️⃣ Configuración de almacenamiento con ruta absoluta
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads")); // ahora usa path + __dirname
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});


const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// 3️⃣ Crear instancia de Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// 4️⃣ Exportación ESModule
export const uploadImage = upload.single("image");
