import React from "react";
import RunningLine from "../../../components/RunningLine/RunningLine";
import MainImage from "./MainImage/MainImage";
import style from "./style.module.css";
import Greeting from "./Greeting/Greeting";

const Block1_Head: React.FC = () => {
  return (
    <div className={style.container}>
      <Greeting />
      <RunningLine />
      <MainImage />
    </div>
  );
};

export default Block1_Head;
