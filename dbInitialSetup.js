const mongoose = require("mongoose");

module.exports = async () => {
  // Crear tablas:
  mongoose.connect("mongodb://localhost:27017/e-commerce-db");
  // console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/userSeeder")();
  await require("./seeders/articleSeeder")();
  await require("./seeders/categorySeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
