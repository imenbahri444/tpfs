import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
    color: theme === "light" ? "#333" : "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={styles}>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}

export default ThemeToggle;