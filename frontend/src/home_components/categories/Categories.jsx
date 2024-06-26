// src/components/Categories.jsx
import React from "react";
import "./categories.css";
import categories from "../../assets/categories (1).png";
import categories1 from "../../assets/categories (2).png";
import categories2 from "../../assets/categories (3).png";

const Categories = () => (
  <section className="categories">
    <a className="categories_box">
      <img src={categories2} alt="" />
      <p>Accesorios</p>
    </a>
    <a className="categories_box">
      <img src={categories1} alt="" />
      <p>iPhone</p>
    </a>
    <a className="categories_box">
      <img src={categories} alt="" />
      <p>Airpods</p>
    </a>
  </section>
);

export default Categories;
