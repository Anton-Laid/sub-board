import React from "react";
import "./Navigate.scss";
import { Link } from "react-router-dom";

const Navigation = ({ handlePopup }) => {
  return (
    <div className="navigation">
      <nav className="navigation__nav">
        <Link to="/about" className="navigation__link" onClick={handlePopup}>
          <p>О нас</p>
        </Link>
        <Link to="/articles" className="navigation__link" onClick={handlePopup}>
          <p>Статьи</p>
        </Link>
      </nav>
      <Link className="navigation__button" onClick={handlePopup}>
        Напишите нам
      </Link>
    </div>
  );
};

export default Navigation;
