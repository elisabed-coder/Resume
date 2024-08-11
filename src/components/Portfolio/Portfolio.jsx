import React, { useState } from "react";
import Items from "./Items";
import Projects from "./Projects";
import "./portfolio.css";
import List from "./List";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const AllNavList = [
  "all",
  ...new Set(Projects.map((project) => project.category)),
];
console.log(AllNavList);

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(Projects);
  const [navList, setCategory] = useState(AllNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(Projects);
      return;
    }
    const newProjectItems = Projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="section__title"
      >
        Portfolio
      </motion.h1>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="section__subtitle"
      >
        My cases
      </motion.h2>
      <List list={navList} filterItems={filterItems} />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 1 }}
        className="portfolio__container container"
      >
        <Items projectItems={projectItems} />
        <AnimatePresence initial={false}></AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
