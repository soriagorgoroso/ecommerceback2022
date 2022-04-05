const express = require("express");
const orderRouter = express.Router();
const { index, show, create, update, destroy } = require("../controllers/orderController");
const checkJwt = require("express-jwt");
const jwtConfig = { secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] };
//const tokenExist = require("../middlewares/tokenExist");
const isAdmin = require("../middlewares/isAdmin.js");

orderRouter.use(checkJwt(jwtConfig));
orderRouter.get("/", index);
orderRouter.get("/:id", show);
orderRouter.post("/", create);

orderRouter.use(isAdmin);

orderRouter.patch("/:id", update);
orderRouter.delete("/:id", destroy);
// // //******    Ruta para obtener order ************ */
// orderRouter.get("/orders/:id", orderController.show);
// // //******    Ruta crear order ************ */
// orderRouter.post("/orders", orderController.store);

module.exports = orderRouter;
