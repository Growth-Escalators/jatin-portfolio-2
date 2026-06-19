import ScrollProgress from "./components/ScrollProgress.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Snapshot from "./components/Snapshot.jsx";
import Stack from "./components/Stack.jsx";
import Expertise from "./components/Expertise.jsx";
import Process from "./components/Process.jsx";
import Projects from "./components/Projects.jsx";
import Results from "./components/Results.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Industries from "./components/Industries.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Snapshot />
        <Stack />
        <Expertise />
        <Process />
        <Projects />
        <Results />
        <Testimonials />
        <Industries />
        <Contact />
      </main>
    </>
  );
}
