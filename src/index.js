// Imports necesarios para el funcionamiento del servidor
import express from "express";
import colors from "colors";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import view_router from "./routes/view_router.js";
import usersRouter from "./routes/users_router.js";
import cartsRouter from "./routes/carts_router.js";
import productsRouter from "./routes/products_router.js";
import { Server } from "socket.io";

// Creamos una instancia de express
const port = 8080;
const app = express();

const httpServer = app.listen(port, () => {console.log(`Server listening on http://localhost:${port}`.green);});

const socketServer = new Server(httpServer);

// Middleware para parsear el body de las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuramos el motor de plantillas handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// Middleware para loggear las peticiones
app.use(express.static(__dirname + "/public"));

// Rutas de la API
app.use("/", view_router);
app.use("/users", usersRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/products", productsRouter);

let messages = [];

socketServer.on("connection", socket => {
 console.log("Nuevo cliente conectado");

 socket.on("message", data => {
  messages.push(data);
  socketServer.emit("messageLogs", messages);
 });

 // socket.emit("message", "Hola, soy un servidor");
 // socket.broadcast.emit("message", "Hola, soy un servidor.");
 // socketServer.emit("message", "Hola, te respondo");
});