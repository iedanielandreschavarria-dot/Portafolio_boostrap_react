import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RecommendationCard from './RecommendationCard';

/**
 * Componente RecommendationsSection
 * Organiza las tarjetas de recomendación en columnas responsivas utilizando
 * Row y Col de Bootstrap y renderiza RecommendationCard por cada elemento.
 */
function RecommendationsSection({ recommendations }) {
  return (
    <section id="recommendations" className="py-4">
      <h2 className="section-title fw-bold mb-4">Recommendations</h2>
      <Row className="g-4">
        {recommendations.map((rec) => (
          <Col key={rec.id} xs={12} md={4}>
            <RecommendationCard text={rec.text} author={rec.author} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default RecommendationsSection;

