import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = ({ hendleClosePopup, popap }) => {
  console.log(popap);
  return (
    <header className="header">
      <div className="header__container">
        <ul>
          <NavLink
            to="/"
            className={({ isActiv }) =>
              `header__link ${isActiv ? 'header__link_active' : ''}`
            }
          >
            ГЛАВНАЯ
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActiv }) =>
              `header__link ${isActiv ? 'header__link_active' : ''}`
            }
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/record"
            className={({ isActiv }) =>
              `header__link ${isActiv ? 'header__link_active' : ''}`
            }
          >
            RECORD
          </NavLink>
        </ul>
      </div>
      <div
        className={`header__burger ${popap ? 'header__burger_pop' : ''}`}
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
