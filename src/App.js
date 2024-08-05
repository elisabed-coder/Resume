import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>
      <Skills />
    </>
  );
};

export default App;
