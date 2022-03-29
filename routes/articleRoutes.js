const express = require("express");
const articleRouter = express.Router();
const { index, show, create, update, destroy } = require("../controllers/articleController");
const checkJwt = require("express-jwt");
// const tokenExist = require("../middlewares/tokenExist");
const isAdmin = require("../middlewares/isAdmin");
//RUTAS PUBLICAS
articleRouter.get("/", index);
articleRouter.get("/:id", show); //PODRIAMOS MOSTRAR EL NOMBRE DEL PRODUCTO EN VEZ DE EL ID

//RUTAS PRIVADAS
articleRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener article ************ */
articleRouter.use(isAdmin);
//******    Ruta crear article ************ */
articleRouter.post("/", create);
articleRouter.patch("/:id", update);
articleRouter.delete("/:id", destroy); //IMPLEMENTAR SOFT DELETE

module.exports = articleRouter;
