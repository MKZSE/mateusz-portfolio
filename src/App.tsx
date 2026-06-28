import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Section from "./components/layout/Section";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import HowIWork from "./components/sections/HowIWork";
import SelectedWork from "./components/sections/SelectedWork";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";

import { content, type Language } from "./data/content";

function App() {
  const [language, setLanguage] = useState<Language>("pl");

  const currentContent = content[language];

  return (
    <>
      <Navbar
        nav={currentContent.nav}
        language={language}
        setLanguage={setLanguage}
      />

      <Section className="pt-0 pb-0 md:pt-0 md:pb-0">
        <Container>
          <Hero content={currentContent.hero} />
        </Container>
      </Section>

      <Section
        id="approach"
        scrollMargin="scroll-mt-20"
        className="pt-8 pb-8 md:pt-10 md:pb-10"
      >
        <Container>
          <HowIWork content={currentContent.howIWork} />
        </Container>
      </Section>

      <Section
        id="projects"
        scrollMargin="scroll-mt-20 md:scroll-mt-4"
        className="pt-8 pb-8 md:pt-10 md:pb-10"
        >
            <Container>
                <SelectedWork content={currentContent.selectedWork} />
        </Container>
        </Section>

      <Section
        id="journey"
        scrollMargin="scroll-mt-20 md:scroll-mt-4"
        className="pt-8 pb-8 md:pt-10 md:pb-10"
        >
            <Container>
                <Journey content={currentContent.journey} />
            </Container>
        </Section>

      <Section
        id="contact"
        scrollMargin="scroll-mt-4"
        className="pt-8 pb-16 md:pt-10 md:pb-20"
      >
        <Container>
          <Contact content={currentContent.contact} />
        </Container>
      </Section>

      <Footer content={currentContent.footer} />
    </>
  );
}

export default App;