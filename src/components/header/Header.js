import { Switch } from "@mui/material";
import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import "./Header.css";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <div
      id="header-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f0f0f0",
        color: theme === "dark" ? "#f0f0f0" : "#333",
      }}
    >
      <div>Header component</div>

      <div>
        <Switch
          onChange={handleChange}
          checked={theme === "dark" ? true : false}
        />
      </div>
    </div>
  );
};
