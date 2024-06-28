import React from "react";
import "./information.css";
import vector1 from "../../assets/Vector.png";
import vector2 from "../../assets/Vector-1.png";
import vector3 from "../../assets/Vector-2.png";


const Information = () => (
  <section className="information">
    <div className="info-card">
      <img
        src={vector1}
        alt="Entrega rápida y gratuita"
        className="info-icon"
      />
      <h3>Entrega muy rápida y gratuita</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <a href="#learn-more">Saber más</a>
    </div>
    <div className="info-card">
      <img
        src={vector2}
        alt="Paga mensualmente al 0% TAE"
        className="info-icon"
      />
      <h3>Paga mensualmente al 0% TAE</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <a href="#learn-more">Saber más</a>
    </div>
    <div className="info-card">
      <img
        src={vector3}
        alt="Obtén ayuda para comprar"
        className="info-icon"
      />
      <h3>Obtén ayuda para comprar</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <a href="#learn-more">Saber más</a>
    </div>
  </section>
);

export default Information;
