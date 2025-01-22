// Importamos el modelo del carrito
import carts_manager from "../models/carts_manager.js";

// Función para obtener todos los carritos
export const getCarts = async (req, res) => {
 try {
  const carts = await carts_manager.getCarts();

  res.status(200).json(carts);
 } catch (error) {

  res.status(500).json({ message: "Error al obtener los carritos", error });
 }
};

// Función para obtener un carrito por ID
export const getCartByIdController = async (req, res) => {
 try {
  const { cid } = req.params;

  const cart = await carts_manager.getCartById(cid);

  if (!cart) {
   return res.status(404).json({ message: "Carrito no encontrado" });
  }

  res.status(200).json(cart);
 } catch (error) {

  res.status(500).json({ message: "Error al obtener el carrito", error });
 }
};

// Función para crear un nuevo carrito
export const createCart = async (req, res) => {
 try {
  const newCart = await carts_manager.createCart();

  res.status(201).json(newCart);
 } catch (error) {

  res.status(500).json({ message: "Error al crear el carrito", error });
 }
};

// Función para agregar un producto al carrito
export const addProductToCartController = async (req, res) => {
 try {
  const { cid, pid } = req.params;

  const updatedCart = await carts_manager.addProductToCart(cid, pid);

  if (!updatedCart) {
   return res.status(404).json({ message: "Carrito no encontrado" });
  }

  res.status(200).json(updatedCart);
 } catch (error) {

  res.status(500).json({ message: "Error al agregar el producto al carrito",error });
 }
};