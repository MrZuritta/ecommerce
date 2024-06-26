// src/components/rectangle.jsx
import React from "react";
import "./Rectangle.css";
import image from "../../assets/rectangle.png";

const Rectangle = () => (
  <section className="Rectangle">
    <img src={image} alt="" />
    <div className="rectangle_content">
      <h1>El iPhone 15 pro</h1>
      <p>
        Te hace la vida <br /> más fácil
      </p>
      <button className="add_to_cart_btn">Comprar Agora</button>
    </div>
  </section>
);

export default Rectangle;
