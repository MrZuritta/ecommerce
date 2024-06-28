import React from "react";
import "./model_list.css";
import iphone1 from "../../assets/products_page (1).png";
import iphone2 from "../../assets/products_page (2).png";
import iphone3 from "../../assets/products_page (3).png";
import iphone4 from "../../assets/products_page (4).png";
import iphone5 from "../../assets/products_page (5).png";
import iphone6 from "../../assets/products_page (6).png";
import iphone7 from "../../assets/products_page (7).png";
import iphone8 from "../../assets/products_page (8).png";
import iphone9 from "../../assets/products_page (9).png";
import iphone10 from "../../assets/products_page (10).png";
import iphone11 from "../../assets/products_page (11).png";
import iphone12 from "../../assets/products_page (12).png";

import { Link } from "react-router-dom";
import iphone8 from "./path/to/iphone8.jpg";
import iphone7 from "./path/to/iphone7.jpg";
import iphone6 from "./path/to/iphone6.jpg";
import iphone1 from "./path/to/iphone1.jpg";
import iphone11 from "./path/to/iphone11.jpg";
import iphone10 from "./path/to/iphone10.jpg";
import iphone3 from "./path/to/iphone3.jpg";
import iphone2 from "./path/to/iphone2.jpg";

const ModelList = () => {
  return (
    <section className="ModelList">
      <div className="modelo_unit_list">
        <img src={iphone8} alt="iPhone 15 pro" />
        <Link to="/products/iphone-15-pro">iPhone 15 pro</Link>
      </div>
      <div className="modelo_unit_list">
        <img src={iphone8} alt="iPhone 15" />
        <Link to="/products/iphone-15">iPhone 15</Link>
      </div>
      <div className="modelo_unit_list">
        <img src={iphone7} alt="iPhone 14" />
        <Link to="/products/iphone-14">iPhone 14</Link>
      </div>
      <div className="modelo_unit_list">
        <img src={iphone6} alt="iPhone 13" />
        <Link to="/products/iphone-13">iPhone 13</Link>
      </div>
      <div className="modelo_unit_list">
        <img src={iphone1} alt="iPhone 12" />
        <Link to="/products/iphone-12">iPhone 12</Link>
      </div>
      <div className="modelo_unit_list">
        <img src={iphone11} alt="iPhone SE" />
        <Link to="/products/iphone-se">iPhone SE</Link>
      </div>
      <div className="modelo_unit_list">
        <img src={iphone10} alt="Comparar" />
        <Link to="/products/comparar">Comparar</Link>
      </div>
      <div className="modelo_unit_list">
        <img src={iphone3} alt="AirPods" />
        <Link to="/products/airpods">AirPods</Link>
      </div>
      <div className="modelo_unit_list">
        <img src={iphone2} alt="Accesorios" />
        <Link to="/products/accesorios">Accesorios</Link>
      </div>
    </section>
  );
};

export default ModelList;

