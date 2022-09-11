import { useState, useEffect } from "react";

import Navegation from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
//Styled

function App() {

  return (
    <div>
      <Navegation/>
      <Header id={"Start"}/>
      <About id={"About"}/>
      <Skills id={"Skills"}/>
      <Projects id={"Projects"}/>
      <Contacts id={"Contatcts"}/>
      <Footer/>
    </div>

  );
}

export default App;
