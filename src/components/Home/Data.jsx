import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import container from "../Services/animation";

const Data = () => {
  return (
    <motion.div className="home__data">
      <motion.h1
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="home__title"
      >
        Elisabed Bezhiashvili
      </motion.h1>
      <motion.h3
        variants={container(0.7)}
        initial="hidden"
        animate="visible"
        className="home__subtitle"
      >
        Web Developer
      </motion.h3>
      <motion.p
        variants={container(0.9)}
        initial="hidden"
        animate="visible"
        className="description"
      >
        An enthusiastic and detail-oriented Junior Frontend Developer with
        proficient knowledge in HTML and CSS, as well as third-party libraries
        such as Angular, and React. Seeking to utilize my technical skills and
        expertise to provide value to the employer and contribute to successful
        projects both today and in the future. Aiming to take on new challenges
        and utilize my coding and debugging skills for developing new features
        and enhance the overall user experience.
      </motion.p>
      <a
        href="#contact"
        className=" btn btn-white btn-animate flex-center"
        variants={container(1.1)}
        initial="hidden"
        animate="visible"
      >
        Say Hello{" "}
        <i
          className="uil uil-message 
      "
        ></i>
      </a>
    </motion.div>
  );
};

export default Data;
