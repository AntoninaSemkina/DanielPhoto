import React from "react";
import style from "./style.module.css";
import Vector_grey from "../../../../../images/Vector_grey.png";
import VioletBtn from "../../../../../components/VioletBtn/VioletBtn";

const LeftBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        <div className={style.block1_el}>
          <div className={style.block1_el1}>EVENTS</div>
          <VioletBtn />
        </div>
        <div className={style.block1_el2}>
          Our event photography service is dedicated to capturing the magic of
          your special occasions. Whether it's a wedding, corporate event, or
          milestone celebration, we're there to document every heartfelt moment.
          We blend into the background, ensuring natural and candid shots that
          reflect the emotions of the day.
        </div>
      </div>
      <div className={style.block2}>
        <div className={style.block2_el1}>Services Highlights</div>
        <div className={style.block2_el2}>
          <img className={style.icon} src={Vector_grey} alt="greyStar" />
          <span className={style.item}>
            COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS, AND MORE.
          </span>
        </div>
        <div className={style.block2_el3}>
          <img className={style.icon} src={Vector_grey} alt="greyStar" />
          <span className={style.item}>
            SKILLED PHOTOGRAPHERS WHO KNOW HOW TO SEIZE THE MOMENT.
          </span>
        </div>
        <div className={style.block2_el4}>
          <img className={style.icon} src={Vector_grey} alt="greyStar" />
          <span className={style.item}>
            A MIX OF CANDID AND POSED SHOTS FOR A COMPREHENSIVE STORY.
          </span>
        </div>
        <div className={style.block2_el5}>
          <img className={style.icon} src={Vector_grey} alt="greyStar" />
          <span className={style.item}>
            QUICK TURNAROUND FOR YOU TO RELIVE THE DAY'S HIGHLIGHTS.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftBlock;
