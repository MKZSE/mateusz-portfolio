import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Section from "./components/layout/Section";

import Hero from "./components/sections/Hero";

function App() {
  return (
    <>
      <Navbar />

        <Section className="pt-0 md:pt-0">
            <Container>
                <Hero />
            </Container>
        </Section>
    </>
  );
}

export default App;