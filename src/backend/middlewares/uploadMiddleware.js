// src/middlewares/uploadMiddleware.js

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// 1️⃣ Crear __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2️⃣ Definir carpeta uploads al nivel del backend
const uploadsPath = path.join(__dirname, "../uploads");

// Crear carpeta si no existe
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

// 3️⃣ Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

// 4️⃣ Validar tipos permitidos (IMAGEN + VIDEO)
const fileFilter = (req, file, cb) => {
  const allowed = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/gif",
    "video/mp4",
    "video/mpeg",
    "video/quicktime" // .mov
  ];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Tipo de archivo no permitido"), false);
  }
};

// 5️⃣ Crear instancia Multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 200 } // 200MB para videos
});

// 6️⃣ Exportar middleware para un archivo (imagen o video)
export const uploadMedia = upload.single("mediaFile");
