import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * Componente SkillCard
 * Utiliza el componente Card de React-Bootstrap para mostrar el ícono/logo,
 * el nombre de la habilidad y los años de experiencia recibidos mediante props.
 */
function SkillCard({ name, experience, icon }) {
  return (
    <Card className="skill-card h-100 text-center border-secondary-subtle">
      <Card.Body className="d-flex flex-column align-items-center justify-content-center py-3 px-2">
        <div className="skill-icon-wrapper mb-2">{icon}</div>
        <Card.Title as="h6" className="fw-bold mb-2 skill-name">
          {name}
        </Card.Title>
        <Card.Text className="mb-0 skill-experience">{experience}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;

