const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    orderNumber: { type: Number, $inc: { sequence_value: 1 } },
    articles: [
      {
        article: { type: String },
        quantity: { type: Number },
        price: { type: Number },
      },
    ],
    status: {
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
