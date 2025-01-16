import React from "react";
import style from "./style.module.css";
import footer_right from "../../../images/footer_right.svg";

const Block_Right: React.FC = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={footer_right} alt="rightPicture" />
    </div>
  );
};

export default Block_Right;
