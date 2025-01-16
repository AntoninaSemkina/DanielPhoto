import React from "react";
import style from "./style.module.css";
import VioletBtn from "../../VioletBtn/VioletBtn";

const Block1: React.FC = () => {
  return (
    <div className={style.container}>
      <h3 className={style.block1}>A MORE MEANINGFUL HOME FOR PHOTOGRAPHY</h3>
      <div className={style.block2}>
        <div className={style.block2_el}>
          <h2 className={style.block2_el1}>LET'S</h2>
          <VioletBtn />
        </div>
        <h2 className={style.block2_el3}>WORK TOGETHER</h2>
      </div>
    </div>
  );
};

export default Block1;
