import React from "react";
import "./portfolio.css";
import { motion } from "framer-motion";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, link } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.4 }}
            key={id}
            className={`portfolio__items card card-${id}`}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt={title} className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h2 className="section__subtitle">{title}</h2>
            <p className="portfolio__description">{description}</p>

            <a
              href={link}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the Website
              <i className="uil uil-arrow-right"></i>
            </a>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
