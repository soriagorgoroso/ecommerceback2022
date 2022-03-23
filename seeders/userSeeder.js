const { User } = require("../models");

module.exports = async () => {
  await User.deleteMany();
  const users = [];

  const user = new User({
    firstname: "admin",
    lastname: "admin",
    username: "admin",
    email: "admin@hackbeer.com",
    password: "admin",
    address: "Hack Beer 1234",
    telephone: 123456789,
    isAdmin: true,
    orders: [],
    tokens: [],
  });
  users.push(user);

  await User.create(users);
  console.log("Se corrió el seeder de Usuarios.");
};
