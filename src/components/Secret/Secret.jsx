import React from "react";
import "./Secret.scss";
import githum from "../../images/networks/github.png";

const Secret = () => {
  return (
    <a
      className="secret"
      href="https://github.com/AntonLiad/sub-board"
      target="_blank"
      rel="noreferrer"
    >
      <img src={githum} alt="секрет" className="secret__img" />
    </a>
  );
};

export default Secret;
