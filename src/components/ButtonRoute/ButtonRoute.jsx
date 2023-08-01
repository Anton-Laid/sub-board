import React from 'react';
import './ButtonRoute.scss';
import { Link } from 'react-router-dom';

const ButtonRoute = ({ text, route }) => {
  return (
    <Link to={route} className="btn-route__link">
      <button className="btn-route">
        <span className="button_top"> {text}</span>
      </button>
    </Link>
  );
};

export default ButtonRoute;
