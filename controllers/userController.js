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
    const user = await User.findOne({ email: req.body.email });

    const correctPassword = await user.validPassword(req.body.password);

    if (correctPassword) {
      const newPayload = {
        sub: user.email,
        userID: user.id,
      };
      const newJwt = jwt.sign(newPayload, process.env.ACCESS_TOKEN_SECRET);

      res.json({ id: user.id, email: user.email, token: newJwt });
    }
  } catch (error) {
    res.status(401).json(error);
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
  newToken,
};
