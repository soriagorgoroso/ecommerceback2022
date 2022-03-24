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
      enum: ["Sin Pago", "Pago", "Enviado", "Entregado"],
      default: "Sin Pago",
    },
  },

  { timestamps: true },
);
orderSchema.set("toJSON", { virtuals: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
