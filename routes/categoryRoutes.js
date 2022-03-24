const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const checkJwt = require("express-jwt");
const tokenExist = require("../middlewares/tokenExist");

//*****    Ruta para home *************** */
categoryRouter.get("/categories", categoryController.index);
//******    Ruta para obtener una category************ */
<<<<<<< Updated upstream
categoryRouter.get("/categories/:id", categoryController.show);
=======
categoryRouter.get("/categories/:name", categoryController.show);
>>>>>>> Stashed changes
//******    Midlleware para rutas privadas ************ */
categoryRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener category ************ */
categoryRouter.use(tokenExist);
//******    Ruta crear category ************ */
categoryRouter.post("/categories", categoryController.create);
//******    Ruta editar category ************ */
categoryRouter.patch("/categories:id", categoryController.update);
//*****   Ruta delete tweet ************* */
categoryRouter.delete("/categories/:id", categoryController.destroy);

module.exports = categoryRouter;
