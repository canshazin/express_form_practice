const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const rootdir = require("./util/path.js");
const adminRoutes = require(".\\routes\\admin.js");
const shopRoutes = require(".\\routes\\shop.js");
const contactRoutes = require(".\\routes\\contactus.js");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, "views", "404.html"));
});

app.listen(3000);
