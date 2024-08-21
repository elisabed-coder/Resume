import React from "react";
import "./skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 75 },
    { name: "JavaScript", percentage: 70 },
    { name: "React", percentage: 60 },
    { name: "Angular", percentage: 80 },
    { name: "SQL", percentage: 60 },
  ];

  return (
    <section className="section skills" id="skills">
      <motion.h1
        className="section__title"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
      >
        Programming Skills
      </motion.h1>
      <motion.div
        className="skills__container"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {skillsData.map((skill, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              // className="skills__block"
              // initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.7 }}
            >
              <h2 className="skill__name">{skill.name}</h2>
              <div className="skills__box">
                <div className="outer__box">
                  <div className="inner__box">
                    <motion.div
                      id="number"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {skill.percentage}%
                    </motion.div>
                  </div>
                </div>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="160px"
                  height="160px"
                  initial={{ strokeDashoffset: 440 }}
                  whileInView={{
                    strokeDashoffset: 440 - (440 * skill.percentage) / 100,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stopColor="#DA22FF" />
                      <stop offset="100%" stopColor="#9733EE" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    strokeLinecap="round"
                    stroke="url(#GradientColor)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="440"
                  />
                </motion.svg>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
