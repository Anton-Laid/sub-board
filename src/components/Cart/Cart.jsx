import React from 'react';
import './Cart.scss';
import Button from '../Button/Button';

const Cart = ({ image, text, price, time, onClick }) => {
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
  );
};

export default Cart;
