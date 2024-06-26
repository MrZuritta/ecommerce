// src/components/Hero.jsx
import React from "react";
import "./hero.css";
import iphone0 from "../../assets/hero_phone (0).png";
import iphone1 from "../../assets/hero_phone (1).png";
import iphone2 from "../../assets/hero_phone (2).png";
import iphone3 from "../../assets/hero_phone (3).png";
import iphone4 from "../../assets/hero_phone (4).png";

const Hero = () => (
  <section className="hero">
    <h1>Atualize seu mundo</h1>
    <h2>Com um novo iPhone</h2>
    <button>Ver todos os modelos</button>
    <div className="all_iphone">
      <img src={iphone0} className="hero-images" alt="" />
      <img src={iphone2} className="hero-images" alt="" />
      <img src={iphone1} className="hero-images" alt="" />
      <img src={iphone3} className="hero-images" alt="" />
      <img src={iphone4} className="hero-images" alt="" />
    </div>
  </section>
);

export default Hero;
