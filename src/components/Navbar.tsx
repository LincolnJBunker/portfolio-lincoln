import { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface Ref {
    current: any;
}

export const AppNavbar = () => {
  // Create references for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = (ref: Ref) => {
    console.log('ref', ref)
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
              <Nav.Link onClick={() => handleScroll(aboutRef)} className="fs-5 mx-3">About</Nav.Link>
              <Nav.Link onClick={() => handleScroll(projectsRef)} className="fs-5 mx-3">Projects</Nav.Link>
              <Nav.Link onClick={() => handleScroll(contactRef)} className="fs-5 mx-3">Contact</Nav.Link>
              <Nav.Link onClick={() => handleScroll(resumeRef)} className="fs-5 mx-3">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <div>
        {/* About Section */}
        <section ref={aboutRef} style={{ height: "100vh", padding: "50px" }}>
          <h1>About Me</h1>
          <p>This is the About section.</p>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} style={{ height: "100vh", padding: "50px" }}>
          <h1>Projects</h1>
          <p>This is the Projects section.</p>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} style={{ height: "100vh", padding: "50px" }}>
          <h1>Contact</h1>
          <p>This is the Contact section.</p>
        </section>

        {/* Resume Section */}
        <section ref={resumeRef} style={{ height: "100vh", padding: "50px" }}>
          <h1>Resume</h1>
          <p>This is the Resume section.</p>
        </section>
      </div>
    </>
  );
};
