import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * Componente ProjectItem
 * Representa cada proyecto individual utilizando Card de React-Bootstrap
 * y recibe por props el título, la descripción y si debe mostrar línea divisoria.
 */
function ProjectItem({ title, description, isLast }) {
  return (
    <Card className={`border-0 bg-transparent project-item-card ${!isLast ? 'project-divider' : ''}`}>
      <Card.Body className="px-0 py-3">
        <Card.Title as="h5" className="fw-bold mb-2">
          {title}
        </Card.Title>
        <ul className="mb-0 ps-4">
          <li className="project-description">{description}</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ProjectItem;

