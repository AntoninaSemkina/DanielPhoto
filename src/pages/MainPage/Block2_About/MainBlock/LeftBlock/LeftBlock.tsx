import React from "react";
import style from "./style.module.css";
import block2 from "../../../../../images/block2.png";

const LeftBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={block2} alt="Selfie" />
    </div>
  );
};

export default LeftBlock;
