import React, { useState } from "react";
import "./education.css";
import { motion } from "framer-motion";
import Educationdata from "./Educationdata";

const Education = () => {
  return (
    <section className="section timeline" id="education">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="section__title"
      >
        Education
      </motion.h1>
      <div className="timeline__items container">
        {Educationdata.map((education, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="timeline__container"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline__item">
                <div className="timeline__dot"></div>
                <div className="timeline__date">
                  <p>
                    <i className="uil uil-schedule"></i>
                    {education.year}
                  </p>
                </div>
                <div className="timeline__content">
                  <h3>{education.faculty}</h3>
                  <p>{education.university}</p>
                  <p>{education.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
