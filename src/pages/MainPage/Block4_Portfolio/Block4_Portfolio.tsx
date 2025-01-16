import React from "react";
import style from "./style.module.css";
import HeadBlock from "./HeadBlock/HeadBlock";
import App from "./MainBlock/App";

const Block4_Portfolio: React.FC = () => {
  return (
    <div className={style.container}>
      <HeadBlock />
      <App />
    </div>
  );
};

export default Block4_Portfolio;
