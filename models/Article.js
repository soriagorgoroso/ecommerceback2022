const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const User = require("./User");

const articleSchema = new Schema(
  {
    name: { type: String, minlength: 1, required: true },
    description: { type: String, minlength: 1, required: true },
    image: { type: String, minlength: 1, required: true },
    price: { type: Number, min: 1 },
    stock: { type: Number },
    category: { type: String, minlength: 1 }, //Esto debería ser un objectId?
    topSeller: { type: Boolean },
  },
  { timestamps: true },
);

articleSchema.set("toJSON", { virtuals: true });

const Article = mongoose.model("Tweet", articleSchema);

module.exports = Article;
