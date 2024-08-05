import React from "react";
import "./home.css";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social icon-container">
      <a
        href=""
        className="home__social-icon icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href=""
        className="home__social-icon icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://github.com/elisabed-coder"
        className="home__social-icon icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
