import React from "react";
import "./Card.scss";

const Card = ({ img, text, price, btnText, onClick, info }) => {
  return (
    <section className="card">
      <div className="card__containner">
        <p className="card__title">
          <img className="card__image" alt="фото" src={img} />
          {text}
        </p>
        <div className="card__card-hidden">
          <p className="card__title-in">{info}</p>
          <p className="card__price">{price.one}</p>
          <p className="card__price">{price.two}</p>
          <p className="card__price">{price.twree}</p>
          <button className="card__button" onClick={onClick}>
            {btnText}
          </button>
        </div>
      </div>
      <div className="card__card-border"></div>
    </section>
  );
};

export default Card;
