import React from "react";
import "./Root.scss";
import SwiperBlock from "../SwiperBlock/SwiperBlock";
import MyMap from "../MyMap/MyMap";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Button from "../Button/Button";
import ButtonRoute from "../ButtonRoute/ButtonRoute";

const Root = ({ onClick }) => {
  return (
    <section className="root">
      <h1 className="root__title">SUP-BOARD на реке Оке</h1>
      <p className="root__paragraph">
        Идея создать проект прогулок на сапах и открыть прокат сапов пришла
        потому, что всегда хотелось походить по реке, исследовать её берега,
        посмотреть на берег с воды. На сапе, как ни на чём другом, испытываешь
        чувство свободы. Почти как птица. И очень хочется поделиться этими
        ощущениями с другими. Катаясь на сапе, заметил, что все беспокойные
        мысли остаются на берегу. И после небольшого путешествия чувствую себя
        обновленным, с ясной головой. Это как медитация, только лучше 😁
        Приглашаю вас на незабываемое приключение — сплав по реке Оке на сапах.
        Вы сможете насладиться красивой природой, окружающей реку, и получить
        гармоничную физическую нагрузку в приятной компании. В проекте «САП на
        Оке» предоставляем индивидуальный подход к каждому клиенту, чтобы
        оставить незабываемые впечатления от поездки. Сплав доступен для всех,
        от маленьких детей до пожилых людей. Позвольте себе забыть обо всем на
        берегу и насладиться каждым мгновением здесь и сейчас. Обратитесь к нам,
        чтобы забронировать свое место на сплаве и начать свое приключение!
      </p>
      <Button title={"TELEGRAM"} className={"wrapper-position"} />
      <h4 className="root__telegram">
        Подпишитесь на нашу группу, там все свежие новости &#128525;
      </h4>

      <ButtonRoute text={"Прогулка по маршрутам"} route={"/strolls"} />
      <ButtonRoute
        text={"Что взять с собой на прогулку ? "}
        route={"/questions"}
      />

      <SwiperBlock />

      <Services onClick={onClick} />
      <h4 className="root__text-map">Где мы находимся ?</h4>
      <MyMap />
      <Footer />
    </section>
  );
};

export default Root;
