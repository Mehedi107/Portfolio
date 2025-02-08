import { useRef } from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Skills from './components/Skills';
import { motion, useScroll } from 'motion/react';

function App() {
  const { scrollYProgress } = useScroll();
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <motion.div
        className="z-10"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          originX: 0,
          backgroundColor: '#9AE600',
        }}
      />
      <Navbar
        scrollToSection={section =>
          section.current?.scrollIntoView({ behavior: 'smooth' })
        }
        refs={{ aboutRef, projectRef, contactRef }}
      />
      <Banner />
      <Skill />
      <div ref={aboutRef}>
        <About />
      </div>
      <Skills />
      <Education />
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
