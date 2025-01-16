import React from "react";
import style from "./style.module.css";
interface LinkItem {
  label: string;
  url: string;
}

interface FooterSectionProps {
  title: string;
  links: LinkItem[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className={style.info}>
      <h4 className={style.title}>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
