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
      <h1 className="root__title">SUP-серфинг Пущино Московская область</h1>
      <p className="root__paragraph">
        Приглашаем окунуться в мир приключений, тишины, спокойствия и гармонии.
        Индивидуальные занятия для спортсменов любого уровня Независимо от того,
        являетесь ли вы опытным гонщиком или новичком, наша доска SUP легко
        управляется и обеспечит вам максимальное удовольствие от путешествия.
        Для новичков пройдем брифинг, теоретический курс и перейдем к практике
        уже через 15-20 минут. (время не включается в период аренды SUP-доски,
        доп. оплат нет)
      </p>
      <Button title={"TELEGRAM"} className={"wrapper-position"} />
      <h4 className="root__telegram">
        Подпишитесь в нашу группу, там все свежие новости &#128525;
      </h4>

      <ButtonRoute text={"Групповые занятия "} route={"/strolls"} />
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
