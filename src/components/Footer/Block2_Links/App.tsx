import React from "react";
import FooterSection from "./FooterSection";
import style from "./style.module.css";

const HOME = [
  { label: "ABOUT ME", url: "/" },
  { label: "MY WORKS", url: "/" },
  { label: "TESTIMONIALS", url: "/" },
];
const CLIENTS = [
  { label: "KLOVESTO", url: "/" },
  { label: "NUKEWAY", url: "/" },
  { label: "CLOVEN'S", url: "/" },
  { label: "MENVOL", url: "/" },
];
const PORTFOLIO = [
  { label: "EVENTS", url: "/" },
  { label: "PORTRAIT", url: "/" },
  { label: "BRANDING", url: "/" },
  { label: "COMMERCIALE", url: "/" },
  { label: "WEDDING", url: "/" },
];
const SERVICES = [
  { label: "PORTRAITS", url: "/" },
  { label: "EVENTS", url: "/" },
  { label: "COMMERCIAL", url: "/" },
];

const Footer: React.FC = () => {
  return (
    <div className={style.container}>
      <FooterSection title="HOME" links={HOME} />
      <FooterSection title="CLIENTS" links={CLIENTS} />
      <FooterSection title="PORTFOLIO" links={PORTFOLIO} />
      <FooterSection title="SERVICES" links={SERVICES} />
    </div>
  );
};

export default Footer;
