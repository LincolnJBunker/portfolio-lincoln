import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AppNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          onClick={() => navigate('/')}
          className="fs-2 fw-bold" 
        >
          Lincoln Bunker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => navigate('/')}
              className="fs-5 mx-4"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/about')}
              className="fs-5 mx-4"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/projects')}
              className="fs-5 mx-4"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/Contact')}
              className="fs-5 mx-4"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/Resume')}
              className="fs-5 mx-4"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
