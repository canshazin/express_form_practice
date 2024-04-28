const fs = require("fs");
class product {
  constructor(title) {
    this.title = title;
  }
  save() {
    fs.readFile("products.json", (err, data) => {
      const products = [];
      if (!err) {
        const items = JSON.parse(data);
        for (let item of items) {
          products.push(item);
        }
      }
      products.push(this);
      fs.writeFile("products.json", JSON.stringify(products), (error) => {
        console.log("error in writemode", error);
      });
    });
  }
  static fetchall() {
    return new Promise((resolve) => {
      fs.readFile("products.json", (err, data) => {
        if (err) {
          resolve([]);
        }
        resolve(JSON.parse(data));
      });
    });
  }
}
module.exports = product;
