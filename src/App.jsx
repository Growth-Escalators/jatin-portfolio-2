import ScrollProgress from "./components/ScrollProgress.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Method from "./components/Method.jsx";
import Systems from "./components/Systems.jsx";
import Stack from "./components/Stack.jsx";
import Why from "./components/Why.jsx";
import FounderNote from "./components/FounderNote.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <CaseStudies />
        <Method />
        <Systems />
        <Stack />
        <Why />
        <FounderNote />
        <Contact />
      </main>
    </>
  );
}
