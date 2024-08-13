import React from "react";
import "./skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <section className="section" id="skills">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.7 }}
        >
          Junior Frontend Developer
        </motion.h1>
        <div className="skills__container">
          <motion.ul
            className="skills_box"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h2>HARD SKILLS</h2>

            <li> HTML/CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>Git and Version Control </li>
            <li>REACT</li>
            <li>ANGULAR</li>
            <li>MYSQL</li>
            <li>Database/API Integration</li>
          </motion.ul>

          <motion.ul
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="skills_box"
          >
            <h2>SOFT SKILLS</h2>
            <li>Attention to Detail</li>
            <li>Problem Solving and Critical Thinking </li>
            <li>Time Management and Prioritization </li>
            <li>Adaptability and Flexibility </li>
            <li>Communication and Collaboration</li>
            <li>Analytical Thinking Teamwork and Cooperation</li>
            <li>Self-Motivation and Initiative</li>
            <li>Continuous Learning and Improvement </li>
            <li>Customer Service and User Experience Focus </li>
            <li>Patience and Perseverance</li>
          </motion.ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
