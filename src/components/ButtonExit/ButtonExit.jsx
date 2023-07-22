import React from "react";
import { Link } from "react-router-dom";
import "./ButtonExit.scss";
import arrowExit from "../../images/other/icon-curve-arrowpng.png";

const ButtonExit = () => {
  return (
    <Link to={"/"} className="button-exit">
      <button className="button-exit__btn">
        <img
          className="button-exit__svg-icon"
          src={arrowExit}
          alt="стрелка назад"
        />
        <span className="button-exit__lable">Назад</span>
      </button>
    </Link>
  );
};

export default ButtonExit;
