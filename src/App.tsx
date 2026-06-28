import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Section from "./components/layout/Section";

import Hero from "./components/sections/Hero";
import HowIWork from "./components/sections/HowIWork";
import SelectedWork from "./components/sections/SelectedWork";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

        <Section className="pt-0 pb-0 md:pt-0 md:pb-0">
            <Container>
                <Hero />
            </Container>
        </Section>

        <Section
        id="approach"
        scrollMargin="scroll-mt-20"
        className="pt-8 pb-8 md:pt-10 md:pb-10"
        >
            <Container>
                <HowIWork />
            </Container>
        </Section>

        <Section
        id="projects"
        scrollMargin="scroll-mt-4"
        className="pt-8 pb-8 md:pt-10 md:pb-10"
        >
            <Container>
                <SelectedWork />
            </Container>
        </Section>

        <Section
        id="journey"
        scrollMargin="scroll-mt-4"
        className="pt-8 pb-8 md:pt-10 md:pb-10"
        >
            <Container>
                <Journey />
            </Container>
        </Section>

        <Section
        id="contact"
        scrollMargin="scroll-mt-4"
        className="pt-8 pb-16 md:pt-10 md:pb-20"
        >
            <Container>
                <Contact />
            </Container>
        </Section>

    <Footer />
    </>
  );
}

export default App;