const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const checkJwt = require("express-jwt");
const tokenExist = require("../middlewares/tokenExist");
const isAdmin = require("../middlewares/isAdmin.js");

//*****    Ruta para home *************** */
categoryRouter.get("/", categoryController.index);
//******    Ruta para obtener una category************ */
categoryRouter.get("/:name", categoryController.show);
//******    Midlleware para rutas privadas ************ */
categoryRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener category ************ */
categoryRouter.use(isAdmin);
//******    Ruta crear category ************ */
categoryRouter.post("/", categoryController.create);
//******    Ruta editar category ************ */
categoryRouter.patch("/:id", categoryController.update);
//*****   Ruta delete tweet ************* */
categoryRouter.delete("/:id", categoryController.destroy);

module.exports = categoryRouter;
