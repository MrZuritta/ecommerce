// src/components/productList.jsx
import React from "react";
import "./MostSearched.css";
import iphone from "../../assets/iphone.png";
import cartImage from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import iphone4 from "../../assets/products_page (4).png";

const MostSearched = () => (
  <section className="MostSearched">
    <img className="head_img" src={iphone4} alt="" />

    <h2>OS MAIS PROCURADOS</h2>
    <div className="products">
      <div className="card_products">
        <img src={iphone} alt="" class="card_product_img" />
        <div className="content_card_products">
          <div className="tittle_card_products">
            <div className="left_tittle">
              <h1>Titulo</h1>
              <p>Descripción del producto</p>
              <button class="model_color_btn"></button>
            </div>
            <div className="right_tittle">
              <img src={heart} alt="" />
            </div>
          </div>
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
  </section>
);

export default MostSearched;
