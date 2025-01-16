import React from "react";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Block1_Head from "./Block1_Head/Block1_Head";
import Block2_About from "./Block2_About/Block2_About";
import Block3_Services from "./Block3_Services/Block3_Services";
import Block4_Portfolio from "./Block4_Portfolio/Block4_Portfolio";
import Block5_FAQ from "./Block5_FAQ/Block5_FAQ";
import Block6_Testimonials from "./Block6_Testimonials/Block6_Testimonials";
import Block7 from "./Block7/Block7";
import Footer from "../../components/Footer/Footer";
import Block_Temporary from "./Block_Temporary/Block_Temporary";

const MainPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Block_Temporary />
      <Header />
      <Block1_Head />
      <Block2_About />
      <Block3_Services />
      <Block4_Portfolio />
      <Block5_FAQ />
      <Block6_Testimonials />
      <Block7 />
      <Footer />
    </div>
  );
};

export default MainPage;
