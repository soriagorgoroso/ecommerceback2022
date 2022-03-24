const userRoutes = require("./userRoutes");
const articleRoutes = require("./articleRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use(userRoutes);
  app.use(articleRoutes);
  app.use(categoryRoutes);
  app.use(orderRoutes);
};
