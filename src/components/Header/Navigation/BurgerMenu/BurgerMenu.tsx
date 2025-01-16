import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE,
  SERVICES_PAGE_ROUTE,
} from "../../../../utils/consts";
import style from "./style.module.css";
import burgerMenu from "../../../../images/burgerMenu.png";
import Close from "../../../../images/Close.png";

const BurgerMenu: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.burger_input} id="burgerToggler">
      <div className={style.burger_menu}>
        <div className={style.burger_btns}>
          <button className={style.burger} onClick={toggleMenu}>
            <img src={isOpen ? Close : burgerMenu} alt="Menu" />
          </button>
        </div>
        {isOpen && (
          <div className={style.burger_nav}>
            <nav className={style.container}>
              <button
                className={style.btn1}
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
              >
                Home
              </button>
              <button
                className={style.btn2}
                onClick={() => navigate(ABOUT_PAGE_ROUTE)}
              >
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
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
