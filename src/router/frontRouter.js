import express, { Router } from "express";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontRouter = Router();

// Ruta absoluta para la carpeta 'public'
const publicPath = path.resolve(__dirname, '../public');

// Middleware para servir archivos estáticos desde la carpeta 'public'
frontRouter.use(express.static(publicPath));

// Función para resolver rutas de archivos en la carpeta 'public'
const returnFilePath = (fileName) => path.join(publicPath, fileName);

// Ruta para el archivo index.html
frontRouter.get("/", (req, res) => {
  res.sendFile(returnFilePath('index.html'));
});

// Ruta para el archivo crear_persona.html
frontRouter.get("/crear_persona", (req, res) => {
  res.sendFile(returnFilePath('crear_persona.html'));
});

export default frontRouter;