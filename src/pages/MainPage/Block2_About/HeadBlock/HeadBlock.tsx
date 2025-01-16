import React from "react";
import style from "./style.module.css";

const HeadBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        <h3 className={style.block1_el1}>ABOUT</h3>
        <h2 className={style.block1_el2}>I AM DAMIEN</h2>
      </div>
      <div className={style.block2}>
        <button className={style.btn}>Know More &#10142;</button>
      </div>
    </div>
  );
};

export default HeadBlock;
