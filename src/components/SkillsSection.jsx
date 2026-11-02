import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard';

/**
 * Componente SkillsSection
 * Renderiza la cuadrícula responsiva de habilidades utilizando Row y Col de Bootstrap
 * y pasando los datos de cada habilidad por props al componente reutilizable SkillCard.
 */
function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-4">
      <h2 className="section-title fw-bold mb-4">Skills</h2>
      <Row className="g-4">
        {skills.map((skill) => (
          <Col key={skill.id} xs={12} sm={6} md={4} lg={3}>
            <SkillCard
              name={skill.name}
              experience={skill.experience}
              icon={skill.icon}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SkillsSection;

