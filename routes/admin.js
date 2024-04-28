const express = require("express");
const router = express.Router();
const path = require("path");
const rootdir = require("../util/path.js");
const addProduct = require("../controllers/products.js");
router.get("/add-product", addProduct.getAddProduct);
router.post("/add-product", addProduct.postAddProduct);
module.exports = router;
