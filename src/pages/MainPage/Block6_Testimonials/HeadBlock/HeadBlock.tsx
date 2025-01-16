import React from "react";
import style from "./style.module.css";
import btnLeft from "../../../../images/btnLeft.png";
import btnRight from "../../../../images/btnRight.png";

const HeadBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        <h3 className={style.block1_el1}>TESTIMONIALS</h3>
        <h2 className={style.block1_el2}>WHAT MY CLIENTS SAY</h2>
        <div className={style.block1_el3}>Total Reviews</div>
        <div className={style.block1_el4}>323</div>
      </div>
      <div className={style.block2}>
        <div className={style.block2_el1}>
          <button className={style.btn1}>
            <img className={style.arrow} src={btnLeft} alt="leftArrow" />
          </button>
          <button className={style.btn2}>
            <img className={style.arrow} src={btnRight} alt="rightArrow" />
          </button>
        </div>
        <div className={style.block2_el2}>
          <button className={style.btn3}>View all Testimonials &#10142;</button>
        </div>
      </div>
    </div>
  );
};

export default HeadBlock;
