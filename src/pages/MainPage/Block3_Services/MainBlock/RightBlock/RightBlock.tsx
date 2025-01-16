import React from "react";
import style from "./style.module.css";
import block3 from "../../../../../images/block3.png";

const RightBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={block3} alt="Selfie" />
    </div>
  );
};

export default RightBlock;
