import React from "react";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Footer from "../../components/Footer/Footer";

const MainPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <Footer />
    </div>
  );
};

export default MainPage;
