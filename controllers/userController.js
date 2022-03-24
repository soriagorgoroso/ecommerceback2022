const User = require("../models/User");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: "error", msg: "users not found" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const user = await User.findOne({
      username: req.params.username,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "error", msg: "user not found" });
  }
}

// Show the form for creating a new resource
//async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const userNameExists = await User.findOne({ username: req.body.username });
    if (userNameExists) {
      res.status(409).json({ msg: "Username already in use, pick another one." });
    } else {
      const user = await User.create({
        ...req.body,
      });
      res.json({ user, msg: "User created succesfully" });
    }
  } catch (error) {
    res.status(400).json("error");
  }
}

// Show the form for editing the specified resource.
//async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
//async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  //create,
  store,
  //edit,
  update,
  //destroy,
};
