import React from "react";
import "./Questions.scss";
import ButtonExit from "../ButtonExit/ButtonExit";

const Questions = () => {
  return (
    <section className="questions">
      <h4 className="questions__text">Что взять с собой на прогулку ? </h4>

      <p className="questions__text-explanation">
        ✅ Обязательно возьмите головной убор!!!🧢
      </p>
      <p className="questions__text-explanation">
        ✅ Возьмите с собой солнцезащитный крем, репеллент от насекомых,
        солнцезащитные очки, полотенце.
      </p>
      <p className="questions__text-explanation">
        ✅ Одевайтесь по погоде. В жаркую погоду выбирайте лёгкие вещи:
        купальник, футболка, шорты. В прохладную погоду можно одеть толстовку,
        ветровку и легкие штаны. На ноги можно надеть легкие кроссовки.
      </p>
      <p className="questions__text-explanation">
        ✅ Еда. Можно взять с собой легкий перекус, бутерброды, фрукты. В
        холодную погоду захватите термос с чаем. Алкогольные напитки строго
        запрещены❌
      </p>
      <p className="questions__text-explanation">✅ Хорошее настроение😉</p>
      <p className="questions__text-explanation">
        Обязательно перед сап-прогулкой:
      </p>
      <p className="questions__text-explanation">
        🔴Внимательно прослушайте инструктаж☝🏼
      </p>
      <p className="questions__text-explanation">
        🔴Наденьте спасательный жилет 🦺 Мы его выдадим.
      </p>
      <p className="questions__text-explanation">
        🔸На сапборде есть место, где вы можете закрепить свои вещи. Вещи
        предварительно можно будет упаковать в гермомешок, который мы выдаем.
      </p>
      <p className="questions__text-explanation">
        🔸Для телефона выдаём герметические чехлы на время прогулки.
      </p>
      <ButtonExit />
    </section>
  );
};

export default Questions;
