import grass from "../images/background/grass-one.svg";
import jellyfish from "../images/background/jellyfish.svg";
import fern from "../images/background/fern.svg";
import tree from "../images/background/tree.svg";
import bubble from "../images/background/bubble.svg";
import ball from "../images/background/ball.svg";
import ballSos from "../images/background/sos.svg";
import fishs from "../images/background/fishs.svg";
import servicesImgOne from "../images/image-cards/1.jpeg";
import servicesImgTwo from "../images/image-cards/2.jpeg";
import servicesImgThree from "../images/image-cards/3.jpeg";
import waveOne from "../images/background/wave-one.svg";
import waveTwo from "../images/background/wave-two.svg";
import subBordOne from "../images/background/subBord.png";
import sub1 from "../images/other/sub1.jpeg";
import sub2 from "../images/other/sub2.jpeg";
import sub3 from "../images/other/sub3.jpeg";
import sub4 from "../images/other/sab4.jpeg";
import sub5 from "../images/other/sub5.jpeg";

const newConstant = 10;

const WaveArr = [
  {
    wave: waveOne,
    class: "wave",
  },
  {
    wave: waveTwo,
    class: "wave-two",
  },
];

const newPromise = "promis";

const dataBackground = [
  {
    src: grass,
    class: "background__grass background__grass_position",
    alt: "лист",
  },
  {
    src: jellyfish,
    class: "background__jellyfish background__jellyfish_position",
    alt: "медуза",
  },
  {
    src: grass,
    class: "background__grass background__grass_footer_position",
    alt: "медуза",
  },
  {
    src: fern,
    class: "background__fern background__fern_position",
    alt: "лист",
  },
  {
    src: fishs,
    class: "background__fishs background__fishs_position",
    alt: "лист",
  },
  {
    src: tree,
    class: "background__tree background__tree_position",
    alt: "лист",
  },
  {
    src: bubble,
    class: "background__bubble background__bubble_position",
    alt: "круг",
  },
  {
    src: ball,
    class: "background__ball background__ball_position",
    alt: "лист",
  },
  {
    src: jellyfish,
    class: "background__jellyfish background__jellyfish_position-bottom",
    alt: "лист",
  },
  {
    src: bubble,
    class: "background__bubble background__bubble_position-bottom",
    alt: "лист",
  },
  {
    src: bubble,
    class: "background__ball background__ball_position-bottom",
    alt: "лист",
  },
  {
    src: ballSos,
    class: "background__ball-sos background__ball-sos_position",
    alt: "лист",
  },
  {
    src: fishs,
    class: "background__fishs background__fishs_position-top",
    alt: "лист",
  },
  {
    src: subBordOne,
    class: "background__fern_position-bottom",
    alt: "лист",
  },
  // {
  //   src: subBordTwo,
  //   class: "background__fern background__fern_position-bottom-rigth",
  //   alt: "лист",
  // },
];

const handleMessage = (values, checkbox) => {
  return `Заявка с сайта!\n
  Имя: ${values.name}\n
  Телефон: ${values.phone}\n
  Услуги: \n
  ${checkbox}\n
  Сообщение: ${values?.message || "Пользователь ничего не отправил"}\n`;
};

const TOKEN = "5965489643:AAEJtwG2RWsm54_BTbz0uPdjAgRSOm7cCdk";
const CHAT_ID = "-1001980903523";
const URI_BOT = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const dataServices = [
  {
    img: servicesImgOne,
    text: "Персональное обучение на Cап борде",
    info: "Одного часа хватит для полного обучени.",
    price: { one: "1 ч 1800₽/чел." },
    btnText: "Записаться!",
  },
  {
    img: servicesImgTwo,
    text: "Аренда Cап бордов будни",
    price: {
      one: "1 ч 700₽/чел.",
      two: "2 ч 1000₽/чел.",
      twree: "Весь день 1500₽/чел.",
    },
    btnText: "Записаться!",
  },
  {
    img: servicesImgThree,
    text: "Аренда Сап бордов выходные",
    price: {
      one: "1 часа 900₽/чел.",
      two: "2 часа/1500₽/чел.",
      twree: "Весь день 2000₽/чел.",
    },
    btnText: "Записаться!",
  },
  {
    img: sub1,
    text: "TOURUS TS-002S",
    price: {
      one: "TOURUS TS-002S 335x84x15",
      two: "19000₽",
    },
    btnText: "Заказать!",
  },
  {
    img: sub2,
    text: "TOURUS TS-001S",
    price: {
      one: "TOURUS TS-001S 335x84x15",
      two: "2 ПОЛНОЦЕННЫХ СЛОЯ",
      twree: "23000₽",
    },
    btnText: "Заказать!",
  },
  {
    img: sub3,
    text: "Sub Bord 1",
    price: {
      one: "TOURUS TS-002S 335x84x15",
      two: "19500₽",
    },
    btnText: "Заказать!",
  },
  {
    img: sub4,
    text: "Sub Bord 1",
    price: {
      one: "TOURUS TS-002S 335x84x15",
      two: "25000₽",
    },
    btnText: "Заказать!",
  },
  {
    img: sub5,
    text: "Sub Bord 1",
    price: {
      one: "TOURUS TS-002S 335x84x15",
      two: "22000₽",
    },
    btnText: "Заказать!",
  },
  // {
  //   img: servicesImgFour,
  //   text: "Катание на водных лыжах и водной ватрушке",
  //   price: "2500₽/чел.",
  //   time: " 30 м",
  // },
  // {
  //   img: servicesImgFive,
  //   text: "Катание на водных лыжах и водной ватрушке",
  //   price: "4000₽/чел.",
  //   time: " 1 ч",
  // },
];

const dataCeckbox = [
  { name: "Персональное обучение на Cап борде", checked: false, id: 1 },
  { name: "Аренда Cап бордов будни", checked: false, id: 2 },
  { name: "Аренда Сап бордов выходные", checked: false, id: 3 },
  { name: "Cплавы на субботу и воскресенье", checked: false, id: 4 },
  { name: "Заказать Сап борд", checked: false, id: 5 },
  // { name: "Катание на водных лыжах и водной ватрушке", checked: false, id: 5 },
];

export {
  dataCeckbox,
  dataBackground,
  handleMessage,
  CHAT_ID,
  URI_BOT,
  dataServices,
  WaveArr,
  newPromise,
  newConstant
};
