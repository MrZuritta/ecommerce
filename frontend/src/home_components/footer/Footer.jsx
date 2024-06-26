// src/components/footer.jsx
import React from "react";
import "./footer.css";
import img from "../../assets/footer_home (1).png";
import img1 from "../../assets/footer_home (2).png";
import img2 from "../../assets/footer_home (3).png";
import img3 from "../../assets/footer_home (4).png";
import img4 from "../../assets/footer_home (5).png";

const Footer = () => (
  <footer>
    <div className="know_ur_iphone">
      <h2>Conheça seu iPhone</h2>
      <p>
        Personaliza tu iPhone de más formas que nunca, mantente conectado con
        <br />
        amigos y familiares y revive tus momentos favoritos. Y con Apple
        <br />
        Intelligence, las cosas que haces todos los días se vuelven aún más
        mágicas.
      </p>
    </div>
    <button class="add_to_cart_btn">
      <p>Comparar Modelos</p>
    </button>
    <div className="img_footer">
      <img src={img1} alt="" />
      <img src={img} alt="" />
      <img src={img2} alt="" />
      <img src={img4} alt="" />
      <img src={img3} alt="" />
    </div>
    <nav>
      <div className="logo">logo</div>
      <li>Políticas de privacidad</li>
      <li>Términos y condiciones</li>
      <li>Soporte</li>
    </nav>
  </footer>
);

export default Footer;
