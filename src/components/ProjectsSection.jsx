import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectItem from './ProjectItem';

/**
 * Componente ProjectsSection
 * Organiza la lista de proyectos usando Row y Col de Bootstrap y renderiza
 * un componente ProjectItem por cada proyecto recibido en props.
 */
function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-5">
      <h2 className="section-title fw-bold mb-3">Projects</h2>
      <Row className="ps-md-4">
        {projects.map((project, index) => (
          <Col xs={12} key={project.id}>
            <ProjectItem
              title={project.title}
              description={project.description}
              isLast={index === projects.length - 1}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default ProjectsSection;

