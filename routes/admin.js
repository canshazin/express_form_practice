const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" id="title" name="title"><input type="number" name="size" id="size"><button type="submit">Add Product</button></form>'
  );
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;