// Imports necesarios para el funcionamiento del servidor
import express from "express";
import colors from "colors";
import path from "path";
import { fileURLToPath } from "url";
import cartsRouter from "./routes/carts_router.js";
import productsRouter from "./routes/products_router.js";

// Creamos una instancia de express
const app = express();

// Definimos las constantes __filename y __direname para poder utilizarlas en los archivos que no soportan los módulos ES6.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para parsear el body de las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para loggear las peticiones
app.use("/", express.static(__dirname + "/public"));

// Rutas de la API
app.use("/api/carts", cartsRouter);
app.use("/api/products", productsRouter);

// Abrimos el puerto 8080 para escuchar las peticiones
const port = 8080;

app.listen(port, () => {
 console.log(`Server listening on http://localhost:${port}`.green);
});