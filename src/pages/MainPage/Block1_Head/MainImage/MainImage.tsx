// import React from "react";
import MainPage from "../../../../images/MainPage.png";
import style from "./style.module.css";

const MainImage = () => {
  return (
    <div>
      <img className={style.img} src={MainPage} alt="Portraits" />
    </div>
  );
};

export default MainImage;
