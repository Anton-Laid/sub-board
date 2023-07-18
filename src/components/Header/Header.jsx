import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ hendleClosePopup, popap }) => {
  console.log(popap);
  return (
    <header className="header">
      <div className="header__container">
        <ul>
          <NavLink
            to="/about"
            className={({ isActiv }) =>
              `header__link ${isActiv ? "header__link_active" : ""}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActiv }) =>
              `header__link ${isActiv ? "header__link_active" : ""}`
            }
          >
            GALLERY
          </NavLink>
          <NavLink
            className={({ isActiv }) =>
              `header__link ${isActiv ? "header__link_active" : ""}`
            }
          >
            CONTACT
          </NavLink>
        </ul>
      </div>
      <div
        className={`header__burger ${popap ? "header__burger_pop" : ""}`}
        onClick={hendleClosePopup}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
