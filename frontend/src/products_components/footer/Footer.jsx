// src/components/footer.jsx
import React from "react";
import "./footer.css";

import iphone5 from "../../assets/products_page (5).png";

const footer_ProductsPath = () => (
  <footer>
    <div className="img_footer">
      <img src={iphone5} alt="" />
      <div className="right_footer_img_product">
        <h2>Olhe todos</h2>
        <p>Os produtos que temos para você</p>{" "}
        <button class="add_to_cart_btn">
          <p>Todos os Produtos</p>
        </button>
      </div>
    </div>
    <nav>
      <div className="logo">logo</div>
      <li>Políticas de privacidad</li>
      <li>Términos y condiciones</li>
      <li>Soporte</li>
    </nav>
  </footer>
);

export default footer_ProductsPath;
