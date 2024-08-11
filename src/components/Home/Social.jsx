import React from "react";
import "./home.css";
import "./social.css";
import { motion } from "framer-motion";
import container from "../Services/animation";

const iconVariants = (duration) => ({
  initial: { x: -10 },
  animate: {
    x: [15, -15],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Social = () => {
  return (
    <motion.div
      variants={container(0)}
      initial="hidden"
      animate="visible"
      className="home__social icon-container"
    >
      <motion.a
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        href=""
        className="home__social-icon icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </motion.a>

      <motion.a
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        href=""
        className="home__social-icon icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-dribbble"></i>
      </motion.a>

      <motion.a
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        href="https://github.com/elisabed-coder"
        className="home__social-icon icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </motion.a>
    </motion.div>
  );
};

export default Social;
