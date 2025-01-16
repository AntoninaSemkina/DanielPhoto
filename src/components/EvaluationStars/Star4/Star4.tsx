import React from "react";
import style from "../style.module.css";
import Star_grey from "../../../images/Star_grey.svg";
import Star_yellow from "../../../images/Star_yellow.svg";

const Star4: React.FC = () => {
  return (
    <div className={style.container}>
      <img className={style.icon} src={Star_yellow} alt="star" />
      <img className={style.icon} src={Star_yellow} alt="star" />
      <img className={style.icon} src={Star_yellow} alt="star" />
      <img className={style.icon} src={Star_yellow} alt="star" />
      <img className={style.icon} src={Star_grey} alt="star" />
    </div>
  );
};

export default Star4;
