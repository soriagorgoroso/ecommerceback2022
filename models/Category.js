const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { type: String, minlength: 1, required: true, uppercase: true },
  },
  { timestamps: true },
);

categorySchema.set("toJSON", { virtuals: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
