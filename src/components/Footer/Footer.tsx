import React from "react";
import style from "./style.module.css";
import Block1 from "./Block1/Block1";
import Block_Left from "./Block_Left/Block_Left";
import Block_Right from "./Block_Right/Block_Right";
import App from "../Footer/Block2_Links/App";
import SocialMedia from "../SocialMedia/SocialMedia";

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <Block_Left />
        <Block1 />
        <App />
        <Block_Right />
      </div>
      <div className={style.container2}>
        <div>
          <button className={style.btn1}>Terms&Conditions</button>
          <button className={style.btn2}>Privacy Policy</button>
        </div>
        <div className={style.container3}>
          <SocialMedia />
        </div>
        <div className={style.copyright}>
          © 2024 Damien Braun Photography. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Header;
