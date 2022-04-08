const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("express-jwt");

// Store a newly created resource in storage.

userRouter.post("/", userController.store);
//******    Midlleware para rutas privadas ************ */
userRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
//*****    logout           ************ */
userRouter.post("/logout", userController.deleteToken);
//const tokenExist = require("../middlewares/tokenExist");

userRouter.patch("/:username", userController.update);
userRouter.get("/:username", userController.show);

const isAdmin = require("../middlewares/isAdmin.js");
//******    Ruta obtener user ************ */
userRouter.use(isAdmin);

// Display a listing of the resource.
userRouter.get("/", userController.index);

// Update the specified resource in storage.

//delete
userRouter.delete("/:id", userController.destroy);

module.exports = userRouter;
