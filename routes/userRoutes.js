const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("express-jwt");
//const tokenExist = require("../middlewares/tokenExist");
const isAdmin = require("../middlewares/isAdmin.js");

//******    Midlleware para rutas privadas ************ */
userRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//******    Ruta obtener user ************ */
userRouter.use(isAdmin);

// Store a newly created resource in storage.
userRouter.post("/", userController.store);

// Display a listing of the resource.
userRouter.get("/", userController.index);

// Display the specified resource.
userRouter.get("/:username", userController.show);

// Update the specified resource in storage.
userRouter.patch("/:username", userController.update);

module.exports = userRouter;
