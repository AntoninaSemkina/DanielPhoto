import React from "react";
import RunningContent from "./RunningContent/RunningContent";
import style from "./style.module.css";

const RunningLine: React.FC = () => {
  return (
    <div className={style.runningLine}>
      <RunningContent />
    </div>
  );
};

export default RunningLine;
