import React from "react";
import style from "./style.module.css";

import ThemeToggle from "../../../components/ThemeButton/ThemeButton";

const Block_Temporary: React.FC = () => {
  return (
    <div className={style.container}>
      <ThemeToggle />
    </div>
  );
};

export default Block_Temporary;
