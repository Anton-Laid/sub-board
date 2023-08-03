import React from "react";
import "./Footer.scss";
import telegram from "../../images/networks/telegram.png";
import whatsapp from "../../images/networks/whatsapp.png";
import instagram from "../../images/networks/instagram.png";
import phone from "../../images/networks/phone.png";
import vk from "../../images/networks/vk.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer__title">Наши соцсети</h4>
      <div className="footer__social-links">
        <a
          className="footer__link"
          href="https://t.me/supboardpushchino"
          target="_blank"
          rel="noreferrer"
        >
          <div id="telegram" className="footer__social-btn footer__flex-center">
            <img className="footer__icon" src={telegram} alt="telegram" />
            <span className="footer__text">supboardpushchino</span>
          </div>
        </a>

        <a
          className="footer__link"
          href="https://www.squarespace.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div id="whatsapp" className="footer__social-btn footer__flex-center">
            <img className="footer__icon" src={whatsapp} alt="whatsapp" />
            <span className="footer__text">Евгений</span>
          </div>
        </a>

        <a
          className="footer__link"
          href="https://instagram.com/sup_prokat_pushchino?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noreferrer"
        >
          <div
            id="instagram"
            className="footer__social-btn footer__flex-center"
          >
            <img className="footer__icon" src={instagram} alt="instagram" />
            <span className="footer__text">sup_prokat_pushchino</span>
          </div>
        </a>

        <div
          id="github"
          className="footer__social-btn footer__flex-center footer__phone"
        >
          <img className="footer__icon" src={phone} alt="phone" />
          <span className="footer__text">+7(926)155-70-11</span>
        </div>

        <a
          className="footer__link"
          href="https://vk.com/id47650430"
          target="_blank"
          rel="noreferrer"
        >
          <div id="vk" className="footer__social-btn footer__flex-center">
            <img className="footer__icon" src={vk} alt="vk" />
            <span className="footer__text">Сап Клуб-Пущино</span>
          </div>
        </a>

        <a
          className="footer__link"
          href="https://github.com/AntonLiad"
          target="_blank"
          rel="noreferrer"
        >
          <div id="github" className="footer__social-btn footer__flex-center">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            <span className="footer__text">@Anton Laid</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
