import React from "react";
import "./Strolls.scss";
import ButtonExit from "../ButtonExit/ButtonExit";

export const Strolls = () => {
  return (
    <section className="strolls">
      <p className="strolls__title-ways">
        ✅Лукъяново — Пущино. ‌В будни 2500 руб., в выходные — 3500 руб. ✅Мост
        — лодочная станция «Дельфин», Пущино. ‌от 2500 руб.
      </p>
      <h4 className="strolls__title-individually">
        Возможно проведение индивидуальных маршрутов от 2500 руб. с человека.
      </h4>
      <p className="strolls__title-individually">
        🌅🌄Можно запланировать прогулку на рассвете или встретить закат. Если
        вы первый раз на сапе, то все расскажем и покажем. Встать на сап-доску
        сможет каждый желающий.
      </p>
      <h4 className="strolls__title-strolls">
        Проводим прогулки в будни и выходные дни, можно выбрать удобное время.
        Маршруты от 2х до 3,5 часов
      </h4>
      <ButtonExit />.
    </section>
  );
};
