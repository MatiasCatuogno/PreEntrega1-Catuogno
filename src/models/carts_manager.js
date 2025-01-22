// Importamos los módulos necesarios para la ejecución de código.
import fs from "fs";
import path from "path";

// Path del archivo de productos
const filePath = path.resolve("src/data/carts.json");

// Función para verificar y crear el archivo si no existe
const checkFile = async () => {
 if (!fs.existsSync(filePath)) {
  await fs.promises.writeFile(filePath, JSON.stringify([]));
 }
}

// Función para obtener todos los carritos
const getCarts = async () => {
 await checkFile();
 const data = await fs.promises.readFile(filePath, "utf-8");

 return JSON.parse(data);
};

// Función para obtener un carrito por ID
const getCartById = async (id) => {
 const carts = await getCarts();

 return carts.find((cart) => cart.id === id);
};

// Función para crear un nuevo carrito
const createCart = async () => {
 await checkFile();
 const carts = await getCarts();

 const newCart = { id: Date.now().toString(), products: [] };

 carts.push(newCart);

 await fs.promises.writeFile(filePath, JSON.stringify(carts, null, 2));

 return newCart;
};

// Función para agregar un producto al carrito
const addProductToCart = async (cartId, productId) => {
 const carts = await getCarts();
 const cart = carts.find((cart) => cart.id === cartId);

 if (!cart) return null;

 const productIndex = cart.products.findIndex((product) => product.productId === productId);

 if (productIndex !== -1) {
  cart.products[productIndex].quantity += 1;
 } else {
  cart.products.push({ productId, quantity: 1 });
 }

 await fs.promises.writeFile(filePath, JSON.stringify(carts, null, 2));
 return cart;
};

// Exportamos las funciones
export default { getCarts, getCartById, createCart, addProductToCart };