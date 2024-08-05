import React from "react";
import "./home.css";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Elisabed Bezhiashvili</h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="description">
        An enthusiastic and detail-oriented Junior Frontend Developer with
        proficient knowledge in HTML and CSS, as well as third-party libraries
        such as Angular, and React. Seeking to utilize my technical skills and
        expertise to provide value to the employer and contribute to successful
        projects both today and in the future. Aiming to take on new challenges
        and utilize my coding and debugging skills for developing new features
        and enhance the overall user experience.
      </p>
      <a href="#contact" className=" btn btn-white btn-animate flex-center">
        Say Hello{" "}
        <i
          className="uil uil-message 
      "
        ></i>
      </a>
    </div>
  );
};

export default Data;
