import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();

let users = [];

router.get("/", (req, res) => {
 res.render("users", { title: "Usuarios", style: "index.css", users });
});

router.post("/", uploader.single("file"), (req, res) => {
 const { first_name, last_name, age, email, number } = req.body;
 const file = req.file;

 if (!file) {
  return res.status(400).send({ status: "Error", error: "No se pudo guardar la imágen" });
 }

 let user = {
  id: Date.now().toString(),
  first_name,
  last_name,
  age,
  email,
  number,
  profile: file.filename
 };

 users.push(user);
 res.redirect("/users");
});

export default router;