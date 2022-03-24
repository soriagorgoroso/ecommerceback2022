const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const articleSchema = new Schema(
  {
    name: { type: String, minlength: 1, required: true },
    description: { type: String, minlength: 1, required: true },
    image: { type: String, minlength: 1, required: false },
    price: { type: Number, min: 1 },
    stock: { type: Number },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    topSeller: { type: Boolean, default: false },
    ibus: { type: String },
  },
  { timestamps: true },
  // slugify(console.log(this.name), {
  //   replacement: "-",
  //   lower: true,
  // }),
);

articleSchema.set("toJSON", { virtuals: true });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
