const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: { type: String, minlength: 2, maxlength: 20, required: true },
    lastname: { type: String, minlength: 2, maxlength: 20, required: true },
    username: {
      type: String,
      minlength: [4, "More than 4 chars."],
      maxlength: 50,
      required: true,
      unique: [true, "Username repetido"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
    },
    password: { type: String, required: true },
    address: { type: String, maxlength: 100, required: true },
    telephone: { type: Number, maxlength: 30, required: true },
    isAdmin: { type: Boolean, default: false },
    orders: [{ type: Schema.Types.ObjectId, ref: "Orders" }],

    tokens: [],
  },
  { timestamps: true },
);
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};
userSchema.set("toJSON", { virtuals: true });

userSchema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) return next();
  user.password = await bcrypt.hash(user.password, 8);
  next();
});

userSchema.methods.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
