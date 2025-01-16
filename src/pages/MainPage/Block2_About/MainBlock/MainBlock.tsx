import React from "react";
import style from "./style.module.css";
import LeftBlock from "./LeftBlock/LeftBlock";
import RightBlock from "./RightBlock/RightBlock";

const MainBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <LeftBlock />
      <RightBlock />
    </div>
  );
};

export default MainBlock;
