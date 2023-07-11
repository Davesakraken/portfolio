import lackinListApp from "../../assets/lackin-list-app.jpg";
import ageCalculatorApp from "../../assets/age-calculator-app.jpg";
import Tags from "./CardTags";

export const cardData = [
  {
    title: "Lackin' Note Maker",
    desc: "A simple note maker app that allows users to make virtual sticky notes.",
    cardTags: [Tags.html, Tags.css, Tags.js],
    btnText: "Live demo",
    btnHref: "https://davesakraken.github.io/lackin-note-app/",
    gitHref: "https://github.com/Davesakraken/lackin-note-app",
    imgSrc: lackinListApp,
  },

  {
    title: "Age Calculator App",
    desc: "A calculator that takes a date and gives you the days, months and years since the input.",
    cardTags: [Tags.html, Tags.css, Tags.js],
    btnText: "Live demo",
    btnHref: "https://davesakraken.github.io/age-calculator-app/",
    gitHref: "https://github.com/Davesakraken/age-calculator-app",
    imgSrc: ageCalculatorApp,
  },
];
