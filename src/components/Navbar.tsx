import { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

//Section Pages
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Skills } from "../pages/skills";
import { Projects } from "../pages/projects";
import { Contact } from "../pages/contact";

interface Ref {
  current: any;
}

export const AppNavbar = () => {
  const mainRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref: Ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleResumeClick = () => {
    window.open("/portfolio-lincoln/Resume%20-%20Lincoln%20Bunker.pdf", "_blank")
  };



  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="sticky-top" style={{ backgroundColor: '#144361'}}>
        <Container>
          <Navbar.Brand className="fs-2 fw-bold" style={{ color: '#87b2cc'}}>Lincoln Bunker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleScroll(aboutRef)} className="fs-6 mx-2 nav-color">About</Nav.Link>
              <Nav.Link onClick={() => handleScroll(skillsRef)} className="fs-6 mx-2 nav-color">Skills</Nav.Link>
              <Nav.Link onClick={() => handleScroll(projectsRef)} className="fs-6 mx-2 nav-color">Projects</Nav.Link>
              <Nav.Link onClick={() => handleScroll(contactRef)} className="fs-6 mx-2 nav-color">Contact</Nav.Link>
              <Nav.Link onClick={handleResumeClick} className="fs-6 mx-2 nav-color">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <div>
        <section ref={mainRef} style={{ minHeight: "75vh", padding: "20px" }}>
            <Home />
        </section>

        <section ref={aboutRef} style={{ minHeight: "100vh", padding: "20px" }}>
            <About />
        </section>

        <section ref={skillsRef} style={{ minHeight: "100vh", padding: "20px" }}>
            <Skills />
        </section>

        <section ref={projectsRef} style={{ minHeight: "100vh", padding: "20px" }}>
            <Projects />
        </section>

        <section ref={contactRef} style={{ padding: "20px" }}>
            <Contact />
        </section>
      </div>
    </>
  );
};
