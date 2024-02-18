// import { useState } from 'react'
import './App.css'

import About from './components/about-me';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Experience from './components/experience';
import Project from  "./components/project";

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Project />
      <Contact />
    </div>
  );
}

export default App;