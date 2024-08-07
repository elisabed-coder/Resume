import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
