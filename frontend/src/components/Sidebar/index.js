import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../../assets/images/logo.svg";
import { ThemeContext } from "../../utils/ThemeContext";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState("");
  const navigate = useNavigate();
  const { isLightMode, toggleTheme } = useContext(ThemeContext);

  const handleIconClick = (iconName, route) => {
    if (iconName === "language") {
      window.open("https://chatchain.app", "_blank");
    } else {
      setActiveIcon(iconName);
      navigate(route);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar_container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.main_actions}>
          <span
            className={`material-symbols-rounded ${
              activeIcon === "person" ? styles.icon_active : styles.icon
            }`}
            onClick={() => handleIconClick("person", "/")}
          >
            person
          </span>
          <span
            className={`material-symbols-rounded ${
              activeIcon === "message" ? styles.icon_active : styles.icon
            }`}
            onClick={() => handleIconClick("message", "/messages")}
          >
            message
          </span>
          <span
            className={`material-symbols-rounded ${
              activeIcon === "groups" ? styles.icon_active : styles.icon
            }`}
            onClick={() => handleIconClick("groups", "/groups")}
          >
            groups
          </span>
          <span
            className={`material-symbols-rounded ${
              activeIcon === "contacts" ? styles.icon_active : styles.icon
            }`}
            onClick={() => handleIconClick("contacts", "/contacts")}
          >
            contacts
          </span>
          <span
            className={`material-symbols-rounded ${
              activeIcon === "settings" ? styles.icon_active : styles.icon
            }`}
            onClick={() => handleIconClick("settings", "/settings")}
          >
            settings
          </span>
        </div>
        <div className={styles.other_actinos}>
          <span
            className={`material-symbols-rounded ${
              activeIcon === "language" ? styles.icon_active : styles.icon
            }`}
            onClick={() => handleIconClick("language")}
          >
            language
          </span>
          <span
            className={`material-symbols-rounded ${styles.icon}`}
            onClick={toggleTheme}
          >
            {isLightMode ? "dark_mode" : "light_mode"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
