import React from "react";
import style from "./style.module.css";
import HeadBlock from "./HeadBlock/HeadBlock";
import App from "./MainBlock/App";

const Block5_FAQ: React.FC = () => {
  return (
    <div className={style.container}>
      <HeadBlock />
      <App />
    </div>
  );
};

export default Block5_FAQ;
