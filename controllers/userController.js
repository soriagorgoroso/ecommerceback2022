const User = require("../models/User");
const jwt = require("jsonwebtoken");

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
    console.log(user);
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
    console.log(userNameExists);
    if (userNameExists) {
      res.status(409).json({ msg: "Username already in use, pick another one." });
    } else {
      const user = await User.create(req.body);
      res.json({ user, msg: "User created succesfully" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

async function newToken(req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user && (await user.validPassword(req.body.password))) {
      const token = jwt.sign(
        { sub: user.id, isAdmin: user.isAdmin },
        process.env.ACCESS_TOKEN_SECRET,
      );

      await User.updateOne({ _id: user.id }, { $push: { tokens: token } });
      res.status(200).json({
        sub: user.id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        token: token,
        orders: user.orders,
        isAdmin: user.isAdmin,
        email: user.email,
      });
    } else {
      res.status(401).json({ message: "error" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function deleteToken(req, res) {
  try {
    const tokenBearer = req.headers.authorization.split(" ");
    token = tokenBearer[1];

    await User.findByIdAndUpdate(req.user.sub, { $pull: { tokens: token } });

    res.status(200).json({ message: "logout ok" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
// Show the form for editing the specified resource.
//async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const username = req.params.username;
    const updatedUser = await User.updateOne({ username }, req.body);
    res.json({ updatedUser, msg: "User updated succesfully" });
  } catch (error) {
    res.status(400).json(error);
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  //create,
  store,
  //edit,
  update,
  destroy,
  newToken,
  deleteToken,
};
