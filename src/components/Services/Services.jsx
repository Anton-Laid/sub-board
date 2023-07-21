import React from 'react';
import './Services.scss';
import Cart from '../Cart/Cart';
import { dataServices } from '../../utils/constants';

const Services = ({ onClick }) => {
  return (
    <section className="services">
      {dataServices.map((i, index) => {
        return (
          <Cart
            onClick={onClick}
            key={index}
            image={i.img}
            text={i.text}
            price={i.price}
            time={i.time}
          />
        );
      })}
    </section>
  );
};

export default Services;
