import React from "react";
import style from "./style.module.css";
import { categories } from "./data";

export interface Category {
  id: number;
  img: string;
  text: string;
}
const RunningContent: React.FC = () => {
  const items = [...categories, ...categories];

  return (
    <div className={style.container}>
      <div className={style.itemsMarquee}>
        {items.map((item, index) => (
          <span key={index} className={style.item}>
            <img className={style.img} src={item.img} alt="icon" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RunningContent;
