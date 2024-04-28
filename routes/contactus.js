const express = require("express");
const router = express.Router();
const path = require("path");
const rootdir = require("../util/path.js");
const contactus = require("../controllers/contactus");
router.get("/contactus", contactus.contact);
router.post("/success", contactus.success);

module.exports = router;
