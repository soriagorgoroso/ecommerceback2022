const Order = require("../models/Order");
const User = require("../models/User");

async function index(req, res) {
  try {
    console.log(req.user);
    console.log("hola");
    const orders = await Order.find().populate("user");
    res.json(orders);

    /* if (req.user.isAdmin) {
      const orders = await Order.find().populate("user");
      res.json(orders);
    } else {
      const orders = await Order.find({ user: req.user.sub }).populate("user");
      console.log(orders);
      res.json(orders);
    } */
  } catch (error) {
    console.log(error);
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const order = await Order.findById(id).populate("user articles");
    res.json(order);
    /* if (req.user.isAdmin) {
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
    } */
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {
    let newOrderData = req.body;
    console.log(newOrderData);
    delete newOrderData.status;
    newOrderData.articles.map((article) => delete article.price);
    const newOrder = await Order.create(newOrderData);
    const userLogged = req.user.sub;
    const user = await User.findById(userLogged);
    console.log(userLogged);
    user.orders.push(newOrder);
    user.save();
    res.json(newOrder);
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {
    let orderId = req.params.id;
    let fieldsToEdit = req.body;

    const updatedOrderData = await Order.updateOne({ orderId }, fieldsToEdit);
    console.log(updatedOrderData);
    res.json(updatedOrderData);
  } catch (error) {
    console.log(error);
  }
}

async function destroy(req, res) {}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
