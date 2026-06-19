import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import Projects from "./components/Projects.jsx";
import Results from "./components/Results.jsx";
import Industries from "./components/Industries.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Results />
        <Industries />
        <Contact />
      </main>
    </>
  );
}
