import React from 'react';
import './Footer.scss';
import telegram from '../../images/telegram.png';
import whatsapp from '../../images/whatsapp.png';
import instagram from '../../images/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer__title">Подписывайтесь на нас в соцсетях!</h4>

      <div className="footer__container">
        <a
          href="https://t.me/supboardpushchino"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__icon" src={telegram} alt="telegram" />
        </a>
        <a href="https://www.squarespace.com/" target="_blank" rel="noreferrer">
          <img className="footer__icon" src={whatsapp} alt="whatsapp" />
        </a>
        <a href="https://www.squarespace.com/" target="_blank" rel="noreferrer">
          <img className="footer__icon" src={instagram} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
