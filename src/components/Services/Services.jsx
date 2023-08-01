import React from 'react';
import './Services.scss';
import Card from '../Card/Card';
import { dataServices } from '../../utils/constants';

const Services = ({ onClick }) => {
  return (
    <section className="services">
      {dataServices.map((i, index) => {
        return <Card onClick={onClick} key={index} {...i} />;
      })}
    </section>
  );
};

export default Services;
