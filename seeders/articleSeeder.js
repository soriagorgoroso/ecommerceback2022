const Article = require("../models/Article");
const Category = require("../models/Category");
const cervezas = require("../db/cervezas");

module.exports = async () => {
  await Article.deleteMany();
  const articles = [];

  cervezas.forEach((cerveza) => {
    articles.push(cerveza);
  });

  for (let i = 0; i <= 20; i++) {
    const article = new Article({
      name: "Artículo " + i,
      description: "Esta es la descripción del artículo número " + i,
      image: "https://cervezamalafama.com/files/tmp/compressed/normal/1jv1sx9i7e4g7ijivvy8.jpg",
      price: 100,
      stock: 15,
      category: await Category.findOne(), //Debería traer una categoría random
      topSeller: false,
    });

    articles.push(article);
  }

  await Article.create(articles);

  console.log("[SEEDER] Se corrió el seeder de artículos");
};
