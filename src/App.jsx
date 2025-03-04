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
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <ScrollIndicator />
      <Navbar
        scrollToSection={section =>
          section.current?.scrollIntoView({ behavior: 'smooth' })
        }
        refs={{ aboutRef, projectRef, contactRef }}
      />
      <Banner
        scrollToSection={section =>
          section.current?.scrollIntoView({ behavior: 'smooth' })
        }
        refs={{ contactRef }}
      />
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
