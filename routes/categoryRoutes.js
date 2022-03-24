const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const checkJwt = require("express-jwt");
const tokenExist = require("../middlewares/tokenExist");

//******    Midlleware para rutas privadas ************ */
categoryRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener category ************ */
categoryRouter.use(tokenExist);
//******    Middleware para ver si existe token en array de user ************ */
categoryRouter.get("/categorys/:id", categoryController.show);
//******    Ruta crear category ************ */
categoryRouter.post("/categorys", categoryController.store);
//******    Ruta editar category ************ */
categoryRouter.patch("/categorys:id", categoryController.store);
//*****   Ruta delete tweet ************* */
categoryRouter.delete("/categorys/:id", tweetController.destroy);

module.exports = categoryRouter;
