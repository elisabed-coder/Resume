// import React from "react";
// import "./education.css";
// import { motion } from "framer-motion";
// import Educationdata from "./Educationdata";

// const Education = () => {
//   return (
//     <section className="section education" id="education">
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="section__title"
//       >
//         Education
//       </motion.h1>
//       <div className="education__container container">
//         {Educationdata.map((education, index) => {
//           return (
//             <div key={index} className="education__tabs">
//               <div className="education__year">
//                 <p>
//                   <i className="uil uil-schedule"></i>
//                   {education.year}
//                 </p>
//               </div>
//               <div className="education__timeline">
//                 <span className="rounder"></span>
//                 <span className="education__line"></span>
//               </div>
//               <div className="education__content">
//                 <h3>{education.faculty}</h3>
//                 <p>{education.university}</p>
//                 <p>{education.description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from "react";
import "./education.css";
import { motion } from "framer-motion";
import Educationdata from "./Educationdata";

const Education = () => {
  return (
    <section className="section timeline" id="education">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section__title"
      >
        Education
      </motion.h1>
      <div className="timeline__items container">
        {Educationdata.map((education, index) => {
          return (
            <div key={index} className="timeline__container">
              <div className="timeline__item">
                <div className="timeline__dot"></div>
                <div className="timeline__date">
                  {" "}
                  <p>
                    <i className="uil uil-schedule"></i>
                    {education.year}
                  </p>
                </div>
                <div className="timeline__content">
                  {" "}
                  <h3>{education.faculty}</h3>
                  <p>{education.university}</p>
                  <p>{education.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
