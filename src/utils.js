// Definimos las constantes __filename y __direname para poder utilizarlas en los archivos que no soportan los módulos ES6.
import { fileURLToPath } from "url";
import { dirname } from "path";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
  cb(null, __dirname+ "/public/img")
 },
 filename: function(req, file, cb) {
  cb(null, file.originalname)
 }
});

export default __dirname;
export const uploader = multer({ storage });