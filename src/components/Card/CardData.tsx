import lackinListApp from "../../assets/lackin-list-app.jpg";
import ageCalculatorApp from "../../assets/age-calculator-app.jpg";
import testimonialGridSection from "../../assets/testimonials-grid-section.jpg";
import ecommerceProductPage from "../../assets/ecommerce-product-page.jpg";
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

  {
    title: "Ecommerce Product Page ",
    desc: "A extensive frontend project demonstrating use of popular frontend libraries.",
    cardTags: [Tags.html, Tags.ts, Tags.react, Tags.tailwind],
    btnText: "Live demo",
    btnHref: "https://davesakraken.github.io/ecommerce-product-page/",
    gitHref: "https://github.com/Davesakraken/ecommerce-product-page",
    imgSrc: ecommerceProductPage,
  },

  {
    title: "Testimonials Section",
    desc: "A HTML and CSS challenge to demonstrate competency with CSS grid.",
    cardTags: [Tags.html, Tags.css],
    btnText: "Live demo",
    btnHref: "https://davesakraken.github.io/Testimonials-grid-section/",
    gitHref: "https://github.com/Davesakraken/Testimonials-grid-section",
    imgSrc: testimonialGridSection,
  },
];
