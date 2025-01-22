// Importamos el modelo de los productos
import products_manager from "../models/products_manager.js";

// Función para obtener todos los productos
export const getAllProducts = async (req, res) => {
 try {
  const limit = parseInt(req.query.limit);
  const products = await products_manager.getProducts(limit);

  res.status(200).json(products);
 } catch (error) {

  res.status(500).json({ message: "Error al obtener los productos", error });
 }
};

// Función para obtener un producto por ID
export const getProductById = async (req, res) => {
 try {
  const product = await products_manager.getProductById(req.params.pid);

  if (!product) {
   return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.status(200).json(product);
 } catch (error) {

  res.status(500).json({ message: "Error al obtener el producto", error });
 }
};

// Función para agregar un producto
export const addProduct = async (req, res) => {
 try {
  const { title, description, code, price, stock, category, thumbnails } = req.body;

  if (!title || !description || !code || !price || !stock || !category || !thumbnails ) {
   return res.status(400).json({ message: "Todos los campos son obligatorios, excepto thumbnails" });
  }

  const createdProduct = await products_manager.addProduct({ title, description, code, price, stock, category, thumbnails  });

  res.status(201).json(createdProduct);
 } catch (error) {

  res.status(500).json({ message: "Error al agregar el producto", error });
 }
};

// Función para modificar un producto
export const updateProduct = async (req, res) => {
 try {
  const { pid } = req.params;
  const updatedData = req.body;

  const updateProduct = await products_manager.updateProduct(pid, updatedData);

  if (!updateProduct) {
   return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.status(200).json(updateProduct);
 } catch(error) {

  res.status(500).json({ message: "Error modificando el producto", error });
 }
};

// Función para eliminar un producto
export const deleteProduct = async (req, res) => {
 try {
  const isDeleted = await products_manager.deleteProduct(req.params.pid);

  if (!isDeleted) {
   return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.status(200).json({ message: "Producto eliminado correctamente" });

 } catch (error) {

  res.status(500).json({ message: "Error al eliminar el producto", error });
 }
};