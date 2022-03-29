const Order = require("../models/Order");
const User = require("../models/User");

async function index(req, res) {
  try {
    if (req.user.isAdmin) {
      const orders = await Order.find().populate("user articles");
      res.json(orders);
    } else {
      const orders = await Order.find({ user: req.user.sub }).populate("user articles");
      res.json(orders);
    }
  } catch (error) {
    console.log(error);
  }
}

async function show(req, res) {
  try {
    if (req.user.isAdmin) {
      const id = req.params.id;
      const order = await Order.findById(id).populate("user articles");
      res.json(order);
    } else {
      const id = req.params.id;
      const order = await Order.findById(id).populate("user articles");
      if (order.user.id === req.user.sub) {
        return res.json(order);
      }
      return res.status(403).json({ message: "No tiene permisos para ver esta orden" });
    }
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {
    let newOrderData = req.body;
    delete newOrderData.status;
    newOrderData.articles.map((article) => delete article.price);
    console.log(newOrderData);
    const newOrder = await Order.create(newOrderData);
    res.json(newOrder);
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {}

async function destroy(req, res) {}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
