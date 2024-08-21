import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import { motion, useScroll } from "framer-motion";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Header />
        <Home />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

export default App;
