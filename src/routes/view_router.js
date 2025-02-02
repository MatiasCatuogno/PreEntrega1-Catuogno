import express from "express";

const router = express.Router();

// Ruta para renderizar la vista de Handlebars en al raíz
router.get("/", (req, res) => {
 res.render("index", { title: "REST API" });
});

export default router;