import React from "react";
import style from "./style.module.css";
import footer_left from "../../../images/footer_left.svg";

const Block_Left: React.FC = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={footer_left} alt="leftPicture" />
    </div>
  );
};

export default Block_Left;
