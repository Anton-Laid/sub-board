import React from 'react';
import './Secret.scss';
import githum from '../../images/github.png';

const Secret = () => {
  return (
    <a
      className="secret"
      href="https://github.com/AntonLiad"
      target="_blank"
      rel="noreferrer"
    >
      <img src={githum} alt="секрет" className="secret__img" />
    </a>
  );
};

export default Secret;
