import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperBlock.scss";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import imageOne from "../../images/photo/onefhoto.jpeg";
import imageTwo from "../../images/photo/fhoto-two.jpeg";
import imageThree from "../../images/photo/fhoto-three.jpeg";
import imageFour from "../../images/photo/fhoto-four.jpeg";
import imageFive from "../../images/photo/fhoto-five.jpeg";
import imageSix from "../../images/photo/fhoto-six.jpeg";

const SwiperBlock = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: -10,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="slide_image">
            <img
              src={imageOne}
              alt="slide_image"
              className="container__image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_image">
            <img
              src={imageSix}
              alt="slide_image"
              className="container__image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_image">
            <img src={imageTwo} alt="slide_image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_image">
            <img src={imageThree} alt="slide_image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_image">
            {" "}
            <img src={imageFour} alt="slide_image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_image">
            <img src={imageFive} alt="slide_image" />
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperBlock;
