import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link smooth to="#home" className="nav-link">
          Home
        </Link>
        <Link smooth to="#about" className="nav-link">
          About
        </Link>
        <Link smooth to="#projects" className="nav-link">
          Projects
        </Link>
        <Link smooth to="#contact" className="nav-link">
          Contact
        </Link>
      </nav>

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;