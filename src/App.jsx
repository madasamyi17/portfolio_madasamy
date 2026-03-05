import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Leadership from './components/Leadership/Leadership';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
