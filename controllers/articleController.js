const Article = require("../models/Article");

async function index(req, res) {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.log(error.status);
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const article = await Article.findById(id);

    res.json(article);
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {
    const newArticleData = req.body;
    const newArticle = await Article.create({ newArticleData });

    res.json(newArticle);
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {
    const articleId = req.params.id;
    const fieldsToEdit = req.body;

    const updatedArticleData = await Article.updateOne(articleId, { fieldsToEdit });

    res.json(updatedArticleData);
  } catch (error) {
    console.log(error);
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const deletedArticle = await Article.deleteOne({ id });

    res.json(deletedArticle);
  } catch (error) {
    console.log(error);
  }
}

//SON NECESARIAS LAS RUTAS STORE Y EDIT?

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
