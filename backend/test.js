require("dotenv").config();
const Shopify = require("shopify-api-node");

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  apiKey: process.env.API_KEY,
  password: process.env.API_SECRET,
});

async function getAllProducts() {
  try {
    const products = await shopify.product.list();
    return products;
  } catch (error) {
    console.error(error);
  }
}

// Llamada a la función getAllProducts
(async () => {
  const products = await getAllProducts();
  console.log("esto es un producto", products);
})();
