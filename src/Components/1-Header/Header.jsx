import { useState } from "react";
import { useEffect } from "react";
import "./header.css";
const Header = () => {
  const [showModel, setshowModel] = useState(false);

  const [Theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (Theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [Theme]);

  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModel(true);
        }}
      >
        <span className="menu icon-menu"></span>
      </button>

      <nav>
        <ul className="flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact Me</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send Value to Local Storage
          localStorage.setItem(
            "currentMode",
            Theme === "dark" ? "light" : "dark"
          );
          // Get Value from Local Storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode"
      >
        {Theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModel && (
        <div className=" fixed">
          <ul className="model">
            <li className="text-center">
              <button
                className="icon-close"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <div className="divider"></div>
            <li>
              <a href="">Skills</a>
            </li>
            <div className="divider"></div>
            <li>
              <a href="">Projects</a>
            </li>
            <div className="divider"></div>
            <li>
              <a href="">Contact Me</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
