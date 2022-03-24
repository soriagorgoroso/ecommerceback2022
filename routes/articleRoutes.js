const express = require("express");
const articleRouter = express.Router();
const { index, show, create, update, destroy } = require("../controllers/articleController");

//RUTAS PUBLICAS

articleRouter.get("/articles", index);
articleRouter.get("/articles/:id", show); //PODRIAMOS MOSTRAR EL NOMBRE DEL PRODUCTO EN VEZ DE EL ID

//RUTAS PRIVADAS

articleRouter.post("/articles", create);
articleRouter.patch("/articles/:id", update);
articleRouter.delete("/articles/:id", destroy);

module.exports = articleRouter;
