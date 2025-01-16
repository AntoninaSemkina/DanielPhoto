import React from "react";
import { useNavigate } from "react-router-dom";
import { CONTACT_PAGE_ROUTE } from "../../../utils/consts";
import style from "./style.module.css";

const ContactMe: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={style.btn}
        onClick={() => navigate(CONTACT_PAGE_ROUTE)}
      >
        Contact Me
      </button>
    </div>
  );
};

export default ContactMe;
