const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

// Display a listing of the resource.
userRouter.get("/users", userController.index);

// Display the specified resource.
userRouter.get("/users/:username", userController.show);

// Store a newly created resource in storage.
userRouter.post("/users", userController.store);

// Update the specified resource in storage.
userRouter.patch("/users/:username", userController.update);

//Login
userRouter.post("/tokens", userController.newToken);

module.exports = userRouter;
