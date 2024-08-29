import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [scrolling, setScrolling] = useState(false);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 205;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav(`#${sectionId}`);
        }
      });

      // Change header background color on scroll
      if (scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    showMenu(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <header className={scrolling ? "scrolling" : ""}>
        <nav aria-label="Main Navigation">
          <a href="index.html" className="nav__logo" aria-label="Home">
            BEZHIASHVILI
          </a>

          <div className={Toggle ? "nav__menu show_menu" : "nav__menu"}>
            <ul>
              <li>
                <a
                  href="#home"
                  className={
                    activeNav === "#home" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => handleNavClick("#home")}
                >
                  <i className="uil uil-estate nav__icon"></i>Home<span></span>
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={
                    activeNav === "#education"
                      ? "nav__link active"
                      : "nav__link"
                  }
                  onClick={() => handleNavClick("#education")}
                >
                  <i className="uil uil-graduation-cap nav__icon"></i>Education
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={
                    activeNav === "#skills" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => handleNavClick("#skills")}
                >
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active"
                      : "nav__link"
                  }
                  onClick={() => handleNavClick("#portfolio")}
                >
                  <i className="uil uil-bag-alt nav__icon"></i>Portfolio
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={
                    activeNav === "#contact" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => handleNavClick("#contact")}
                >
                  <i className="uil uil-message nav__icon"></i>Contact
                  <span></span>
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(false)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
