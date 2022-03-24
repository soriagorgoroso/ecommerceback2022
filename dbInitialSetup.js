const mongoose = require("mongoose");

module.exports = async () => {
  // Crear tablas:
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  // console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/userSeeder")();
  await require("./seeders/categorySeeder")();
  await require("./seeders/articleSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
