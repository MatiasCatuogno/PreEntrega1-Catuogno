// Importamos el objeto Router desde express. y los controladores de carritos.
import { Router } from "express";
import { getCarts, getCartByIdController, createCart, addProductToCartController } from "../controllers/carts_controller.js";

// Ejecutamos la función Router para obtener un objeto Router.
const router = Router();

// Rutas para carritos
router.get("/", getCarts);
router.get("/:cid", getCartByIdController);
router.post("/", createCart);
router.post("/:cid/product/:pid", addProductToCartController);

// Exportamos el router.
export default router;