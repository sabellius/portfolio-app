import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  // Update CSS variable with the actual header height after render
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${header.offsetHeight}px`
        );
      }
    };

    // Update on mount and window resize
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
