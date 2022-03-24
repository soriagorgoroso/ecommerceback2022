const Category = require("../models/Category");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const category = await Category.find();
    res.status(200).json({ category });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
// Display the specified resource.
async function show(req, res) {
  try {
    const postCategory = await Category.findOne({ name: req.params.name });
    const formattedDate = format(postCategory.createdAt, "MMMM yyyy");

    res.status(200).json({ postCategory, formattedDate });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: "error" });
  }
}
// Show the form for creating a new resource
async function create(req, res) {
  try {
    const newCategoryData = req.body;
    const newCategory = await Category.create(newCategoryData);

    res.json(newCategory);
  } catch (error) {
    console.log(error);
  }
}

// Store a newly created resource in storage.
// async function store(req, res) {
// try {
//     const newCategory = await new Category({
//     content: req.body.name,
//     });
//     console.log(newCategory);
//     await newCategory.save();
//     Category.findByIdAndUpdate(req.category.sub, { $push: { category: newCategory.id } });
// } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "There was an error" });
// }
// }
// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const categoryId = req.params.id;
    const fieldsToEdit = req.body;

    const updatedCategoryData = await Category.updateOne({ categoryId }, fieldsToEdit);

    res.json(updatedCategoryData);
  } catch (error) {
    console.log(error);
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndUpdate(req.category.sub, {
      $pull: { category: id },
    });

    if (category) {
      await category.findByIdAndRemove(id);
      res.status(200).json({ message: "Category deleted successfully" });
    } else {
      res.status(400).json({ message: error });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  //   store,
  edit,
  update,
  destroy,
};
