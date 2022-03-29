module.exports = async () => {
  // Crear tablas:
  // console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/userSeeder")();
  await require("./seeders/categorySeeder")();
  await require("./seeders/articleSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
