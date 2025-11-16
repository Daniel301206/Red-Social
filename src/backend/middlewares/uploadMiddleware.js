// src/middlewares/uploadMiddleware.js

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// 1️⃣ Crear __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2️⃣ Definir carpeta uploads al nivel del backend
const uploadsPath = path.join(__dirname, "../uploads"); // ← subir un nivel

// Crear carpeta si no existe
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

// 3️⃣ Configuración de almacenamiento con ruta absoluta
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath); // ← usar la carpeta correcta
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// 4️⃣ Crear instancia de Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// 5️⃣ Exportar
export const uploadImage = upload.single("image");
