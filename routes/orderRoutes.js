const express = require("express");
const orderRouter = express.Router();
const { index, show, create, update, destroy } = require("../controllers/orderController");
const checkJwt = require("express-jwt");
const tokenExist = require("../middlewares/tokenExist");
orderRouter.get("/orders", index);
orderRouter.get("/orders/:id", show);
orderRouter.post("/orders", create);
orderRouter.patch("/orders/:id", update);
orderRouter.delete("/orders/:id", destroy);
// //******    Midlleware para rutas privadas ************ */
// orderRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
// //******    Ruta obtener order ************ */
// orderRouter.use(tokenExist);
// //******    Ruta para obtener order ************ */
// orderRouter.get("/orders/:id", orderController.show);
// //******    Ruta crear order ************ */
// orderRouter.post("/orders", orderController.store);

module.exports = orderRouter;
