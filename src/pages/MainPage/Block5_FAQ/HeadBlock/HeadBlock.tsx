import React from "react";
import style from "./style.module.css";

const HeadBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        <h3 className={style.block1_el1}>FAQ'S</h3>
        <h2 className={style.block1_el2}>FREQUENTLY ASKED QUESTIONS</h2>
      </div>
    </div>
  );
};

export default HeadBlock;
