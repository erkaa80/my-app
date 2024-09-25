import React from "react";
import "./Footer.css";
import { useThemeContext } from "../../context";

export const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <div
      id="footer-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f0f0f0",
        color: theme === "dark" ? "#f0f0f0" : "#333",
      }}
    >
      Footer component
    </div>
  );
};
