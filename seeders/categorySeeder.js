const Category = require("../models/Category");

module.exports = async () => {
  await Category.deleteMany();
  const categories = [];
  const categoryName = ["IPA", "APA", "NEIPA", "SOUR", "STOUT", "BLONDE"];

  categoryName.forEach((category) => categories.push({ name: category }));
  // for (let category in categoryName) {
  //   categories.push({
  //     name: category,
  //   });
  //   console.log(category);
  // }
  //console.log(categories);
  await Category.create(categories);
  console.log("[Database] Se corrió el seeder de Category.");
};
