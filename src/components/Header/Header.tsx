import React from "react";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
import ContactMe from "./ContactMe/ContactMe";
import style from "./style.module.css";
import BurgerMenu from "./Navigation/BurgerMenu/BurgerMenu";

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <Logo />
      <div className={style.navContainer}>
        <Navigation />
        <BurgerMenu />
      </div>
      <ContactMe />
    </div>
  );
};

export default Header;
