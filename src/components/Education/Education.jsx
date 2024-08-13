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
      >
        Education
      </motion.h1>
      <div>
        {Educationdata.map((education, index) => {
          return (
            <div key={index}>
              <div>
                <p>{education.year}</p>
              </div>
              <div>
                <p>{education.university}</p>
                <p>{education.faculty}</p>
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
