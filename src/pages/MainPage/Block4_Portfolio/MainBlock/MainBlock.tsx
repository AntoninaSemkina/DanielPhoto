import React, { useState } from "react";
import style from "./style.module.css";
import stroke_bl4 from "../../../../images/stroke_bl4.png";
import btnLeft from "../../../../images/btnLeft.png";
import btnRight from "../../../../images/btnRight.png";

interface Project {
  title: string;
  date: string;
  image: string;
}

interface MainBlockProps {
  projects: Project[];
}

const MainBlock: React.FC<MainBlockProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const visibleProjects =
    window.innerWidth >= 1440
      ? projects.slice(currentIndex, currentIndex + 3) // Показать 3 проекта
      : [projects[currentIndex]]; // Показать 1 проект

  return (
    <div className={style.container}>
      {visibleProjects.map((project, index) => (
        <div key={index} className={style.block1_main}>
          <div className={style.block1_img}>
            <img
              className={style.img}
              src={project.image}
              alt="portfolio_photo"
            />
          </div>
          <div className={style.block1_info}>
            <div className={style.block1_left}>
              <div className={style.block1_el1}>{project.title}</div>
              <div className={style.block1_el2}>{project.date}</div>
            </div>
            <div className={style.block1_right}>
              <button className={style.block1_btn}>
                <span className={style.span}>VIEW PROJECT</span>
                <img className={style.icon} src={stroke_bl4} alt="stroke" />
              </button>
            </div>
          </div>
          <div className={style.controls}>
            <button onClick={prevProject} className={style.btn1}>
              <img className={style.arrow} src={btnLeft} alt="leftArrow" />
            </button>
            <button onClick={nextProject} className={style.btn2}>
              <img className={style.arrow} src={btnRight} alt="rightArrow" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBlock;
