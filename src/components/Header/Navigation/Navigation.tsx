import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE,
  SERVICES_PAGE_ROUTE,
} from "../../../utils/consts";
import style from "./style.module.css";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className={style.container}>
      <button className={style.btn1} onClick={() => navigate(MAIN_PAGE_ROUTE)}>
        Home
      </button>
      <button className={style.btn2} onClick={() => navigate(ABOUT_PAGE_ROUTE)}>
        About Me
      </button>
      <button
        className={style.btn3}
        onClick={() => navigate(PORTFOLIO_PAGE_ROUTE)}
      >
        Portfolio
      </button>
      <button
        className={style.btn4}
        onClick={() => navigate(SERVICES_PAGE_ROUTE)}
      >
        Services
      </button>
    </nav>
  );
};

export default Navigation;
