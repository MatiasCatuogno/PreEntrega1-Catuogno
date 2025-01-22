// Importamos los módulos necesarios para la ejecución de código.
import fs from "fs";
import path from "path";

// Path del archivo de productos
const filePath = path.resolve("src/data/products.json");

// Función para verificar y crear el archivo si no existe
const checkFile = async () => {
 if (!fs.existsSync(filePath)) {
  await fs.promises.writeFile(filePath, JSON.stringify([]));
 }
}

// Función para obtener todos los productos
const getProducts = async (limit) => {
 await checkFile();
 const data = await fs.promises.readFile(filePath, "utf-8");
 const products = JSON.parse(data);

 if (limit) {
  return products.slice(0, limit);
 }

 return products;
};

// Función para obtener un producto por ID
const getProductById = async (id) => {
 const products = await getProducts();

 return products.find((product) => product.id === id);
};

// Función para agregar un producto
const addProduct = async (product) => {
 await checkFile();
 const products = await getProducts();
 const newProduct = {
  id: Date.now().toString(),
  status: product.status !== undefined ? product.status : true,
  ...product,
 };

 products.push(newProduct);

 await fs.promises.writeFile(filePath, JSON.stringify(products, null, 2));

 return newProduct;
};

// Función para modificar un producto
const updateProduct = async (id, updatedData) => {
 const products = await getProducts();
 const productIndex = products.findIndex((product) => product.id === id);

 if (productIndex === -1) return null;

 if (updatedData.id) {
  delete updatedData.id;
 }

 products[productIndex] = { ...products[productIndex], ...updatedData };

 await fs.promises.writeFile(filePath, JSON.stringify(products, null, 2));

 return products[productIndex];
};

// Función para eliminar un producto
const deleteProduct = async (id) => {
 const products = await getProducts();

 const filteredProducts = products.filter((product) => product.id !== id);

 if (filteredProducts.length === products.length) return false;

 await fs.promises.writeFile(filePath, JSON.stringify(filteredProducts, null, 2));

 return true;
};

// Exportamos las funciones
export default { getProducts, getProductById, addProduct, updateProduct, deleteProduct };