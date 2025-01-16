import React from "react";
import style from "./style.module.css";
import Icon from "../../../../../images/Icon.png";
import SocialMedia from "../../../../../components/SocialMedia/SocialMedia";

const RightBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={style.block1}>
          <div className={style.block1_el1}>
            <img className={style.iconStars} src={Icon} alt="icon stars" />
            <span className={style.span}>Introduction</span>
          </div>
          <div className={style.block1_el2}>
            My journey as a photographer has been a lifelong quest to capture
            the extraordinary in the ordinary, to freeze fleeting moments in
            time, and to share the world's beauty as I see it. Based in the
            enchanting landscapes of the USA, I find inspiration in every corner
            of this diverse and vibrant country. Join me as we embark on a
            visual odyssey, where each photograph tells a story, and every frame
            is a piece of my heart.
          </div>
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.block2}>
          <div className={style.block2_el1}>
            <img className={style.iconStars} src={Icon} alt="icon stars" />
            <span>Contact Information</span>
          </div>
          <div className={style.block2_el2}>
            <div className={style.block2_el2_mail}>
              <div className={style.title}>Email</div>
              <div className={style.info}>damienbraun@gmail.com</div>
            </div>
            <div className={style.block2_el2_phone}>
              <div className={style.title}>Phone Number</div>
              <div className={style.info}>+00 0000000000</div>
            </div>
          </div>
          <div className={style.block2_el3}>
            <div>
              <SocialMedia />
            </div>
            <button className={style.block2_el3_btn1}>Let's Work</button>
            <button className={style.block2_el3_btn2}>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBlock;
