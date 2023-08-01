import React from 'react';
import './Background.scss';
import { dataBackground } from '../../utils/constants';
import Secret from '../Secret/Secret.jsx';

const Background = ({ children }) => {
  const romdom = Math.random() * 10;

  return (
    <section className="background">
      {dataBackground.map((i, index) => {
        return <img src={i.src} alt={i.alt} className={i.class} key={index} />;
      })}
      {romdom > 9.9 ? <Secret /> : ''}
      {children}
    </section>
  );
};

export default Background;
