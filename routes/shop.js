const express = require("express");
const router = express.Router();
const path = require("path");
const rootdir = require("../util/path.js");

const shopController = require("../controllers/shop.js");
router.get("/", shopController.shopController);
module.exports = router;
