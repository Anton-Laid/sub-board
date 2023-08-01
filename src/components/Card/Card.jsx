import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <section className="card">
      <div className="card__containner">
        <p className="card__title">
          <img className="card__image" alt="фото" src={props.img} />
          {props.text}
        </p>
        <div className="card__card-hidden">
          <p className="card__title-in">{props.info}</p>
          <p className="card__price">{props.price.one}</p>
          <p className="card__price">{props.price.two}</p>
          <p className="card__price">{props.price.twree}</p>
          <button className="card__button" onClick={props.onClick}>
            {props.btnText}
          </button>
        </div>
      </div>
      <div className="card__card-border"></div>
    </section>
  );
};

export default Card;
