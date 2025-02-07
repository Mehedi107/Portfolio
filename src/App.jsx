import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skill />
      <About />
      <Skills />
      <Education />
      <Projects />
    </>
  );
}

export default App;
