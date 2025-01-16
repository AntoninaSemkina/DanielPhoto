import React from "react";
import style from "../style.module.css";
import Star_yellow from "../../../images/Star_yellow.svg";

const Star5: React.FC = () => {
  return (
    <div className={style.container}>
      <img className={style.icon} src={Star_yellow} alt="star" />
      <img className={style.icon} src={Star_yellow} alt="star" />
      <img className={style.icon} src={Star_yellow} alt="star" />
      <img className={style.icon} src={Star_yellow} alt="star" />
      <img className={style.icon} src={Star_yellow} alt="star" />
    </div>
  );
};

export default Star5;
