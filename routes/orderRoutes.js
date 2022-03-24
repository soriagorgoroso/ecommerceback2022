const express = require("express");
const orderRouter = express.Router();
const express = require("express");
const orderController = require("../controllers/orderController");
const checkJwt = require("express-jwt");
const tokenExist = require("../middlewares/tokenExist");

//******    Midlleware para rutas privadas ************ */
orderRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener order ************ */
orderRouter.use(tokenExist);
//******    Ruta para obtener order ************ */
orderRouter.get("/orders/:id", orderController.show);
//******    Ruta crear order ************ */
orderRouter.post("/orders", orderController.store);

module.exports = orderRouter;
