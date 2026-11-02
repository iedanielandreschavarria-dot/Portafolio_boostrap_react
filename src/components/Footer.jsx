import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Componente Footer
 * Renderiza el botón circular morado de "scroll to top" en la esquina inferior derecha
 * utilizando el componente Button de React-Bootstrap.
 */
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-scroll-container py-3">
      <Button
        onClick={scrollToTop}
        className="scroll-top-btn rounded-circle d-flex align-items-center justify-content-center"
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up-short fs-3"></i>
      </Button>
    </footer>
  );
}

export default Footer;

