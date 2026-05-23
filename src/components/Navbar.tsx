import { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Skills } from "../pages/skills";
import { Projects } from "../pages/projects";
import { Contact } from "../pages/contact";
import { Footer } from "./Footer";

interface Ref {
  current: HTMLElement | null;
}

export const AppNavbar = () => {
  const mainRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleScroll = (ref: Ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleResumeClick = () => {
    window.open("/portfolio-lincoln/Resume%20-%20Lincoln%20Bunker.pdf", "_blank");
  };

  return (
    <>
      <Navbar expand="lg" className="sticky-top" style={{ backgroundColor: "var(--color-navy)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Container>
          <Navbar.Brand className="navbar-brand-custom">Lincoln Bunker</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" style={{ borderColor: "rgba(255,255,255,0.2)" }} />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-lg-center gap-1">
              <Nav.Link onClick={() => handleScroll(aboutRef)} className="nav-link-custom">About</Nav.Link>
              <Nav.Link onClick={() => handleScroll(skillsRef)} className="nav-link-custom">Skills</Nav.Link>
              <Nav.Link onClick={() => handleScroll(projectsRef)} className="nav-link-custom">Projects</Nav.Link>
              <Nav.Link onClick={() => handleScroll(contactRef)} className="nav-link-custom">Contact</Nav.Link>
              <Nav.Link onClick={handleResumeClick} className="nav-link-custom ms-lg-2" style={{ color: "white !important", backgroundColor: "var(--color-accent)", borderRadius: "var(--radius-sm)", padding: "6px 14px" }}>
                Resume ↗
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section ref={mainRef}>
          <Home />
        </section>

        <section ref={aboutRef} style={{ backgroundColor: "var(--color-card-bg)" }}>
          <About />
        </section>

        <section ref={skillsRef}>
          <Skills />
        </section>

        <section ref={projectsRef} style={{ backgroundColor: "var(--color-card-bg)" }}>
          <Projects />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};
