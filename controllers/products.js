const path = require("path");
const Product = require("../models/product.js");
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-Product.html"));
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  console.log(req.body);
  res.redirect("/");
};
