import grass from "../images/background/grass-one.svg";
import jellyfish from "../images/background/jellyfish.svg";
import fern from "../images/background/fern.svg";
import tree from "../images/background/tree.svg";
import bubble from "../images/background/bubble.svg";
import ball from "../images/background/ball.svg";
import ballSos from "../images/background/sos.svg";
import fishs from "../images/background/fishs.svg";
import fernOne from "../images/background/one.svg";
import servicesImgOne from "../images/image-cards/1.jpeg";
import servicesImgTwo from "../images/image-cards/2.jpeg";
import servicesImgThree from "../images/image-cards/3.jpeg";
import servicesImgFour from "../images/image-cards/4.jpeg";
import servicesImgFive from "../images/image-cards/5.jpeg";
import waveOne from "../images/background/wave-one.svg";
import waveTwo from "../images/background/wave-two.svg";

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
    src: fern,
    class: "background__fern background__fern_position-bottom",
    alt: "лист",
  },
  {
    src: fernOne,
    class: "background__fern background__fern_position-bottom-rigth",
    alt: "лист",
  },
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
    text: "Cплавы на субботу и воскресенье",
    price: "1800₽/чел.",
    time: "3 ч 30 м",
  },
  {
    img: servicesImgTwo,
    text: "Прогулка на катере",
    price: "4000₽/чел.",
    time: "1 ч",
  },
  {
    img: servicesImgThree,
    text: "Прогулка на катере",
    price: "2500₽/чел.",
    time: "30 м",
  },
  {
    img: servicesImgFour,
    text: "Катание на водных лыжах и водной ватрушке",
    price: "2500₽/чел.",
    time: " 30 м",
  },
  {
    img: servicesImgFive,
    text: "Катание на водных лыжах и водной ватрушке",
    price: "4000₽/чел.",
    time: " 1 ч",
  },
];

const dataCeckbox = [
  { name: "Cплавы на субботу и воскресенье", checked: false, id: 1 },
  { name: "Прогулка на катере", checked: false, id: 2 },
  { name: "Прогулка на катере", checked: false, id: 3 },
  { name: "Катание на водных лыжах и водной ватрушке", checked: false, id: 4 },
  { name: "Катание на водных лыжах и водной ватрушке", checked: false, id: 5 },
];

export {
  dataCeckbox,
  dataBackground,
  handleMessage,
  CHAT_ID,
  URI_BOT,
  dataServices,
  WaveArr,
};
