import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <ul>
        <NavLink
          className={({ isActiv }) =>
            `header__link ${isActiv ? 'header__link_active' : ''}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActiv }) =>
            `header__link ${isActiv ? 'header__link_active' : ''}`
          }
        >
          GALLERY
        </NavLink>
        <NavLink
          className={({ isActiv }) =>
            `header__link ${isActiv ? 'header__link_active' : ''}`
          }
        >
          CONTACT
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
