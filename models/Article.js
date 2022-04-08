const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const articleSchema = new Schema(
  {
    name: { type: String, minlength: 1, required: true, unique: true },
    description: { type: String, minlength: 1, required: true },
    image: { type: String, minlength: 1, required: false },
    price: { type: Number, min: 1, required: true },
    sizecc: { type: String, minlength: 1, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true, uppercase: true }, //type: Schema.Types.ObjectId, ref: "Category"
    topSeller: { type: Boolean, default: false },
    ibus: { type: String, required: true },
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
