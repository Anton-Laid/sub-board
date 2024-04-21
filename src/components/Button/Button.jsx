import React from "react";
import "./Button.scss";

const Button = ({ title, className, src }) => {
  return (
    <button className={`wrapper ${className}`}>
      <a className="wave-btn" href={src} target="_blank" rel="noreferrer">
        <span className="wave-btn__text">{title}</span>
        <span className="wave-btn__waves"></span>
      </a>
    </button>
  );
};

export default Button;
