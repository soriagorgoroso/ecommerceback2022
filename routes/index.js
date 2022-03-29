const userRoutes = require("./userRoutes");
const articleRoutes = require("./articleRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");
const userController = require("../controllers/userController");

module.exports = (app) => {
  //Login
  app.post("/tokens", userController.newToken);
  app.use("/users", userRoutes);
  app.use("/articles", articleRoutes);
  app.use("/orders", orderRoutes);
  app.use("/categories", categoryRoutes);
};
