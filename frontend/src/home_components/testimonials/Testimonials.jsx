// src/components/Testimonials.jsx
import React from "react";
import "./testimonials.css";
import perfil from "../../assets/chris.jpg";
const Testimonials = () => (
  <section className="testimonials">
    <h2>Qué dice la gente de nosotros</h2>
    <p className="normal_text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been.
    </p>
    <div className="testimonials-list">
      <div className="testimonials_cards">
        <div className="tittle_testimonials_cards">
          <img src={perfil} alt="" className="img_profile_testimonial_card" />
          <p className="profile_name_testimonial">Cristian</p>
        </div>
        <div className="testimonial_card_content">
          <p>
            "Simply the best. Better than all the rest. <br />
            I’d re product to beginners and advanced users."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
