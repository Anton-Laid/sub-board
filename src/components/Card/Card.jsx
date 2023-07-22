import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

const Card = ({ image, text, price, time, onClick }) => {
  return (
    <section className="cart">
      <img src={image} alt="фото" className="cart__image" />
      <ul>
        <li className="cart__text">{text}</li>
        <li className="cart__price">{price}</li>
        <li className="cart__time">{time}</li>
      </ul>

      <button className="cart__button" onClick={onClick}>
        Записаться !
      </button>
    </section>
    // <div className="card">
    //   <img src={image} alt="фото" className="card-image" />
    //   <div className="category">{text}</div>
    //   <div className="heading">{price}</div>
    //   <button className="card__button" onClick={onClick}>
    //     Записаться !
    //   </button>
    // </div>

    // <div className="card__container">
    //   <div className="card__card">
    //     <p className="title">Card title</p>
    //     <div className="card-hidden">
    //       <p className="title-in">Card title</p>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
    //         est orci. Nam molestie pellentesque mi nec lacinia.
    //       </p>
    //       <a className="button">Button</a>
    //     </div>
    //   </div>
    //   <div className="card-border"></div>
    // </div>
  );
};

export default Card;
