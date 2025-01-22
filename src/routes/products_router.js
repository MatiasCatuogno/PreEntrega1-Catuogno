// Importamos el objeto Router desde express. y los controladores de productos.
import { Router } from "express";
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } from "../controllers/products_controller.js";

// Ejecutamos la función Router para obtener un objeto Router.
const router = Router();

// Rutas para productos
router.get("/", getAllProducts);
router.get("/:pid", getProductById);
router.post("/", addProduct);
router.put("/:pid", updateProduct);
router.delete("/:pid", deleteProduct);

// Exportamos el router.
export default router;