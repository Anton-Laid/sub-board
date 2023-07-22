import React from "react";
import "./Services.scss";
import Card from "../Card/Card";
import { dataServices } from "../../utils/constants";

const Services = ({ onClick }) => {
  return (
    <section className="services">
      {dataServices.map((i, index) => {
        return (
          <Card
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
