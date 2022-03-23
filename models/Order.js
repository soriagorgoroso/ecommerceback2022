const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    articles: [
      {
        article: { type: Schema.Types.ObjectId, ref: "Article" },
        quantity: { type: Number },
        price: { type: Number },
      },
    ],
    state: {
      type: String,
      enum: ["Not Ready", "In Process", "Ready"],
      default: "Not Ready",
    },
  },

  { timestamps: true },
);
tweetSchema.set("toJSON", { virtuals: true });

const Order = mongose.model("Order", orderSchema);

module.exports = Order;
