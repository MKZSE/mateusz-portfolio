import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Section from "./components/layout/Section";

import Hero from "./components/sections/Hero";
import HowIWork from "./components/sections/HowIWork";

function App() {
  return (
    <>
      <Navbar />

        <Section className="pt-0 pb-4 md:pt-0 md:pb-6">
            <Container>
                <Hero />
            </Container>
        </Section>

        <Section id="approach" className="pt-4 md:pt-6">
            <Container>
                <HowIWork />
            </Container>
        </Section>
    </>
  );
}

export default App;