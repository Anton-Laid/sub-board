import React from "react";
import "./Background.scss";

const Background = ({ children }) => {
  return (
    <section className="background">
      {/* <div className="visualization-container__wave" /> */}
      {/* <h1 className="visual__title">​SUPBORD PUSHCHINO</h1> */}
      <div className="background__grass background__grass_position" />
      <div className="background__jellyfish background__jellyfish_position" />
      <div className="background__grass background__grass_footer-position" />
      <div className="background__fishs background__fishs-position" />
      <div className="background__box">{children}</div>
    </section>
  );
};

export default Background;
