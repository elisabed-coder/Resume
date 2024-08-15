import React from "react";
import "./education.css";
import { motion } from "framer-motion";
import Educationdata from "./Educationdata";

const Education = () => {
  return (
    <section className="section education" id="education">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section__title"
      >
        Education
      </motion.h1>
      <div>
        {Educationdata.map((education, index) => {
          return (
            <div key={index} className="education__container">
              <div>
                <p>{education.year}</p>
              </div>
              <div>
                <h3>{education.faculty}</h3>
                <p>{education.university}</p>
                <p>{education.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
