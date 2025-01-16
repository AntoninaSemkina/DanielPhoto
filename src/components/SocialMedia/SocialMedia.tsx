import React from "react";
import style from "./style.module.css";
import Icon_facebook from "../../images/Icon_facebook.png";
import Icon_twitter from "../../images/Icon_twitter.png";
import Icon_linkedin from "../../images/Icon_linkedin.png";

const SocialMedia: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.block1}>
        <a href="/" target="_blank" className={style.a_social}>
          <img
            className={style.icon_social}
            src={Icon_facebook}
            alt="facebook"
          />
        </a>
        <a href="/" target="_blank" className={style.a_social}>
          <img className={style.icon_social} src={Icon_twitter} alt="twitter" />
        </a>
        <a href="/" target="_blank" className={style.a_social}>
          <img
            className={style.icon_social}
            src={Icon_linkedin}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
