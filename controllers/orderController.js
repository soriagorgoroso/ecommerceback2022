const Order = require("../models/Order");

async function index(req, res) {
  try {
    const orders = await Order.find().populate("user articles");
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const order = await Order.findById(id).populate("user articles");
    res.json(order);
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {}

async function update(req, res) {}

async function destroy(req, res) {}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
