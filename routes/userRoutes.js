const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("express-jwt");
//const tokenExist = require("../middlewares/tokenExist");
const isAdmin = require("../middlewares/isAdmin.js");

// Store a newly created resource in storage.
userRouter.post("/", userController.store);
//******    Midlleware para rutas privadas ************ */
userRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener user ************ */
userRouter.use(isAdmin);

// Display a listing of the resource.
userRouter.get("/", userController.index);

// Display the specified resource.
userRouter.get("/:username", userController.show);

// Update the specified resource in storage.
userRouter.patch("/:username", userController.update);
//*****    logout           ************ */
userRouter.post("/logout", userController.deleteToken);

module.exports = userRouter;
