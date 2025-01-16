import React from "react";
import MainBlock from "./MainBlock";

const questions = [
  {
    question: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?",
    answer:
      "You can book a session by visiting the booking section on my website.",
  },
  {
    question: "WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?",
    answer: "I use a variety of professional-grade cameras and lenses.",
  },
  {
    question: "CAN I REQUEST A SPECIFIC LOCATION FOR A SESSION?",
    answer: "Yes, I’m happy to work with you to find the perfect location.",
  },
  {
    question: "WHAT IS YOUR EDITING PROCESS LIKE?",
    answer:
      "Each photo goes through a detailed editing process to enhance quality.",
  },
  {
    question: "ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?",
    answer: "Yes, digital files are included in all packages.",
  },
  {
    question: "DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?",
    answer: "Yes, prints are available for purchase.",
  },
  {
    question:
      "HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A SESSION?",
    answer: "Typically, it takes about 2-4 weeks for photo delivery.",
  },
];

const App: React.FC = () => {
  return <MainBlock questions={questions} />;
};

export default App;
