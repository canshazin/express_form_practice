const path = require("path");
const Product = require("../models/product.js");
exports.shopController = async (req, res, next) => {
  try {
    const products = await Product.fetchall();
    console.log(products);
    res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  } catch {
    console.log("error");
  }
};
