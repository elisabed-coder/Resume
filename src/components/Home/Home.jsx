import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="hone__container container grid">
        <div className="home__content grid">
          <Social />
          <Data />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="home__img"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
