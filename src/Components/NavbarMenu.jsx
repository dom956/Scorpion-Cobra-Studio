import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import "../Styles/Navbar.css";


function NavbarMenu() {
  return (
   <Navbar bg="transparent">
    <Container className='container'>
      <Link to="/">
        <div className='logo-brand'>
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        </div>
      </Link>
      <Nav className="links">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    );
}

export default NavbarMenu;