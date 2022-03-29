const express = require("express");
const orderRouter = express.Router();
const { index, show, create, update, destroy } = require("../controllers/orderController");
const checkJwt = require("express-jwt");
const tokenExist = require("../middlewares/tokenExist");

orderRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
orderRouter.get("/", index);
orderRouter.get("/:id", show);
//******    Midlleware para rutas privadas ************ */
// //******    Ruta obtener order ************ */
orderRouter.post("/", create);
orderRouter.patch("/:id", update);
orderRouter.delete("/:id", destroy);
// // //******    Ruta para obtener order ************ */
// orderRouter.get("/orders/:id", orderController.show);
// // //******    Ruta crear order ************ */
// orderRouter.post("/orders", orderController.store);

module.exports = orderRouter;
