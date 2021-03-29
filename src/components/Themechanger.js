import { useState, useEffect } from "react";
import { Moon, Sun } from "./icons/Icons";
import "./Themechanger.css";

const Themechanger = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    } else {
      checkTheme(null);
    }
  }, []);

  const checkTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        localStorage.setItem("theme", "dark");
        return document.documentElement.setAttribute("data-theme", "dark");

      case "dark":
        setTheme("light");
        localStorage.setItem("theme", "light");
        return document.documentElement.setAttribute("data-theme", "light");

      default:
        setTheme("light");
        localStorage.setItem("theme", "light");
        return document.documentElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <button onClick={checkTheme}>
      <div className='toggle'>
        {" "}
        <span style={{ marginRight: 4, fontWeight: "bold" }}>Switch</span>
        {theme === "light" ? (
          <Moon style={{ cursor: "pointer" }} />
        ) : (
          <Sun style={{ cursor: "pointer" }} />
        )}
      </div>
    </button>
  );
};

export default Themechanger;
