import React from "react";
import MainBlock from "./MainBlock";
import portfolio_1 from "../../../../images/portfolio_1.png";
import portfolio_2 from "../../../../images/portfolio_2.png";
import portfolio_3 from "../../../../images/portfolio_3.png";

const projects = [
  {
    title: "Faces of Resilience",
    date: "March 2022",
    image: portfolio_1,
  },
  {
    title: "A Wedding Tale",
    date: "January 2020",
    image: portfolio_2,
  },
  {
    title: "Product Elegance",
    date: "January 2020",
    image: portfolio_3,
  },
];

const App: React.FC = () => {
  return <MainBlock projects={projects} />;
};

export default App;
