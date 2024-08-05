import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <section className="section" id="skills">
        <h1>Junior Frontend Developer</h1>
        <div className="skills__container">
          <ul className="skills_box">
            <h2>HARD SKILLS</h2>

            {/* <li>
            <h3>HTML</h3>
            <p>Advanced</p>
          </li>
          <li>
            <h3>CSS</h3>
            <p>Advanced</p>
          </li>
          <li>
            <h3>JAVASCRIPT</h3>
            <p>Advanced</p>
          </li>
          <li>
            <h3>TYPESCRIPT</h3>
            <p>Advanced</p>
          </li>
          <li>
            <h3>REACT</h3>
            <p>Advanced</p>
          </li>
          <li>
            <h3>ANGULAR</h3>
            <p>INTERMEDIATE</p>
          </li>
          <li>
            <h3>MYSQL</h3>
            <p>BASIC</p>
          </li> */}
            <li>
              <li> HTML/CSS</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
              <li>Git and Version Control </li>
              <li>REACT</li>
              <li>ANGULAR</li>
              <li>MYSQL</li>
              <li>Database/API Integration</li>
            </li>
          </ul>

          <ul className="skills_box">
            <h2>SOFT SKILLS</h2>
            <li>
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
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
