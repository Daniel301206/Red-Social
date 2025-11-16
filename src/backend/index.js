import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import swaggerUi from "swagger-ui-express"; 
import { swaggerSpec } from "./swagger.js";


import path from 'path'; 
import { fileURLToPath } from 'url';

// 🆕 Configuración para obtener __dirname en el contexto de módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
// __dirname ahora apunta a la carpeta 'backend' de tu proyecto

// Carpeta de uploads
const uploadsPath = path.join(__dirname, 'uploads');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Sirve la carpeta 'uploads' desde el navegador
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
// 🔹 Sirve la carpeta uploads para que las imágenes sean accesibles
app.use('/uploads', express.static(uploadsPath));



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.urlencoded({extended:true}));

app.get('/',(req, res) => {
    res.json({
        message:'Api corriendo correctamente'
    });
});

//Rutas que deseo usar
app.use("/api/users",userRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo y escuchando en el puerto ${PORT}`);
});

