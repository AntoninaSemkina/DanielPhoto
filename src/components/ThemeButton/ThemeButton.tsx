import React, { useState, useEffect } from "react";
import style from "./style.module.css";

const ThemeToggle: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkTheme ? "dark" : "light"
    );
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <button
      className={style.themeToggleButton}
      onClick={toggleTheme}
      style={{ padding: "10px 20px", cursor: "pointer" }}
    >
      {isDarkTheme ? "Light Theme" : "Dark Theme"}
    </button>
  );
};

export default ThemeToggle;
