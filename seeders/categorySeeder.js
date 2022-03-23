const Category = require("../models/Category");
module.exports = async () => {
  const categorys = [];
  const categoryName = ["Ipa", "Apa", "Neipa", "Sour", "Stout", "Blonde"];
  for (let i = 0; i < categoryName.length; i++) {
    categorys.push({
      categoryName: i,
    });
  }
  await Category.create(categorys);
  console.log("[Database] Se corrió el seeder de Catgory.");
};
