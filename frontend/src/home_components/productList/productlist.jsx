// src/components/productList.jsx
import React from "react";
import "./productList.css";
import iphone from "../../assets/iphone.png";
import cartImage from "../../assets/cart.png";

const ProductList = () => (
  <section className="productList">
    <h2>Nossos Produtos</h2>
    <div className="products">
      <div className="card_products">
        <img src={iphone} alt="" class="card_product_img" />
        <div className="content_card_products">
          <h1>Titulo</h1>
          <p>Descripción del producto</p>
          <button class="model_color_btn"></button>
          <div className="value_card_products">
            <h1 class="value">$40.49</h1>
            <p class="previoues_value">$80.00</p>
            <h1 class="promotion">50% OFF</h1>
          </div>
        </div>
        <button class="add_to_cart_btn">
          <img src={cartImage} alt="" />
          <h1>Comprar Agora</h1>
        </button>
      </div>
    </div>
    <div className="slide_btns">
      <button>&lt;</button>
      <button>&gt;</button>
    </div>
  </section>
);

export default ProductList;
