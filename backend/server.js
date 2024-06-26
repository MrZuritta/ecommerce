const express = require("express");
const dotenv = require("dotenv");
const Shopify = require("shopify-api-node");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  apiKey: process.env.API_KEY,
  password: process.env.API_SECRET,
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await shopify.product.list();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
