import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

/**
 * Componente Header
 * Renderiza la barra de navegación superior morada con los datos de contacto
 * de Jane Doe a la izquierda y los enlaces de navegación a la derecha.
 */
function Header({ name, email, phone }) {
  return (
    <Navbar expand="lg" variant="dark" className="portfolio-navbar py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex flex-column text-white">
          <span className="fw-semibold fs-4 mb-1">{name}</span>
          <small className="contact-info d-flex align-items-center gap-2">
            <i className="bi bi-envelope-fill"></i>
            <span>{email}</span>
          </small>
          <small className="contact-info d-flex align-items-center gap-2">
            <i className="bi bi-telephone-fill"></i>
            <span>{phone}</span>
          </small>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="portfolio-navbar-nav" />

        <Navbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto gap-lg-3">
            <Nav.Link href="#about" className="text-white nav-link-custom">
              About Me
            </Nav.Link>
            <Nav.Link href="#skills" className="text-white nav-link-custom">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="text-white nav-link-custom">
              Projects
            </Nav.Link>
            <Nav.Link href="#recommendations" className="text-white nav-link-custom">
              Recommendations
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

