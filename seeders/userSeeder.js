const { User } = require("../models/User");

module.exports = async () => {
  // await User.deleteMany();
  const users = [];

  const admin = new User({
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
  users.push(admin);

  const user = new User({
    firstname: "user",
    lastname: "user",
    username: "user",
    email: "user@hackbeer.com",
    password: "user",
    address: "Calle A 1234",
    telephone: 987654321,
    isAdmin: false,
    orders: [],
    tokens: [],
  });
  users.push(user);

  await User.create(users);
  console.log("Se corrió el seeder de Usuarios.");
};
