// src/components/Header.jsx
import React from "react";
import "./header.css";
import lupaImage from "../../assets/lupa.png";
import heartImage from "../../assets/heart.png";
import cartImage from "../../assets/cart.png";
import userImage from "../../assets/user.png";
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom


const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>Login</li>
      </ul>
    </nav>
    <div id="btns_header">
      <button id="search">
        <img src={lupaImage} alt="" />
      </button>

      <button id="fav">
        <img src={heartImage} alt="" />
      </button>

      <button id="user">
        <img src={userImage} alt="" />
      </button>

      <button id="compra">
        <img src={cartImage} alt="" />
      </button>
    </div>
  </header>
);

export default Header;
