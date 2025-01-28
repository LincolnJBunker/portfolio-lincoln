import { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Home } from "../pages/home";

interface Ref {
  current: any;
}

export const AppNavbar = () => {
  const mainRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const handleScroll = (ref: Ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand className="fs-2 fw-bold">Lincoln Bunker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleScroll(aboutRef)} className="fs-6 mx-2">About</Nav.Link>
              <Nav.Link onClick={() => handleScroll(skillsRef)} className="fs-6 mx-2">Skills</Nav.Link>
              <Nav.Link onClick={() => handleScroll(projectsRef)} className="fs-6 mx-2">Projects</Nav.Link>
              <Nav.Link onClick={() => handleScroll(contactRef)} className="fs-6 mx-2">Contact</Nav.Link>
              <Nav.Link onClick={() => handleScroll(resumeRef)} className="fs-6 mx-2">Resume</Nav.Link>
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
          <h1>About Me</h1>
          <p>This is the About section.</p>
        </section>

        <section ref={skillsRef} style={{ minHeight: "100vh", padding: "20px" }}>
          <h1>Skills</h1>
          <p>This is the Skills section.</p>
        </section>

        <section ref={projectsRef} style={{ minHeight: "100vh", padding: "20px" }}>
          <h1>Projects</h1>
          <p>This is the Projects section.</p>
        </section>

        <section ref={contactRef} style={{ minHeight: "100vh", padding: "20px" }}>
          <h1>Contact</h1>
          <p>This is the Contact section.</p>
        </section>

        <section ref={resumeRef} style={{ minHeight: "100vh", padding: "20px" }}>
          <h1>Resume</h1>
          <p>This is the Resume section.</p>
        </section>
      </div>
    </>
  );
};
