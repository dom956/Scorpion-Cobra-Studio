
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';

function NavbarMenu() {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavbarMenu;