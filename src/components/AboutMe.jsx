import React from 'react';
import { Row, Col } from 'react-bootstrap';
import developerAvatar from '../assets/developer-avatar.svg';

/**
 * Componente AboutMe
 * Muestra la sección de presentación con la ilustración del avatar a la izquierda
 * y el saludo + descripción profesional a la derecha utilizando Row y Col de Bootstrap.
 */
function AboutMe({ name, bio }) {
  return (
    <section id="about" className="py-5">
      <Row className="align-items-center g-4">
        <Col xs={12} md={4} className="text-center">
          <img
            src={developerAvatar}
            alt={`${name} illustration`}
            className="img-fluid avatar-illustration"
          />
        </Col>
        <Col xs={12} md={8}>
          <h1 className="section-main-title fw-bold mb-3">
            Hi, I&apos;m {name}! <span role="img" aria-label="waving hand">👋</span>
          </h1>
          <p className="about-description text-secondary fs-5 lh-base mb-0">
            {bio}
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default AboutMe;

