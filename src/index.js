import express from 'express';
import { getConn } from './db/conn.js';
import apiRouter from './router/apiRouter.js';
import morgan from 'morgan';
import frontRouter from './router/frontRouter.js';

const port = 5000;
const app = express();

app.use(morgan('dev'));
app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear el cuerpo de las peticiones URL-encoded
getConn();
app.use("/api", apiRouter);
app.use("/front", frontRouter);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`))