import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <>
      <header>
        <nav aria-label="Main Navigation">
          <a
            href="index.html"
            className={Toggle ? "nav__logo hide" : "nav__logo"}
            aria-label="Home"
          >
            BEZHIASHVILI
          </a>

          <div className={Toggle ? "nav__menu show_menu" : "nav__menu"}>
            <ul>
              <li>
                <a href="#home" className="nav__link">
                  <i className="uil uil-estate nav__icon"></i>Home<span></span>
                </a>
              </li>
              {/* <li>
                <a href="#about" className="nav__link">
                  <i className="uil  uil-cloud-info nav__icon"></i>About
                </a>
              </li> */}
              <li>
                <a href="#education" className="nav__link">
                  <i class="uil uil-graduation-cap nav__icon"></i>Education
                  <span></span>
                </a>
              </li>
              <li>
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                  <span></span>
                </a>
              </li>
              {/* <li>
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i>Services
                </a>
              </li> */}
              <li>
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-bag-alt nav__icon"></i>Portfolio
                  <span></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i>Contact
                  <span></span>
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div
            className={Toggle ? "nav__toggle hide" : "nav__toggle"}
            onClick={() => showMenu(!Toggle)}
          >
            <i className="uil uil-apps"></i>
          </div>
          <div className="animation start-home"></div>
        </nav>
      </header>
    </>
  );
};

export default Header;
