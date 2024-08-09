import React, { useState } from "react";
import Items from "./Items";
import Projects from "./Projects";
import "./portfolio.css";
import List from "./List";
import { AnimatePresence } from "framer-motion";

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
      <h1 className="section__title">Portfolio</h1>
      <h2 className="section__subtitle">My cases</h2>
      <List list={navList} filterItems={filterItems} />
      <div className="portfolio__container container">
        <Items projectItems={projectItems} />
        <AnimatePresence initial={false}></AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
