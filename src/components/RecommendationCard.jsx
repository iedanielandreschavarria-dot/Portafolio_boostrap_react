import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * Componente RecommendationCard
 * Utiliza el componente Card de React-Bootstrap para mostrar el texto de una
 * recomendación con estilo en cursiva y bordes redondeados, igual al diseño original.
 */
function RecommendationCard({ text, author }) {
  return (
    <Card className="recommendation-card h-100">
      <Card.Body className="p-3">
        <Card.Text className="fst-italic mb-0 recommendation-text">
          <span className="quote-mark">&ldquo;</span> {text}{' '}
          <span className="quote-mark">&rdquo;</span>
        </Card.Text>
        {author && (
          <div className="text-end mt-2 fw-semibold small text-secondary">
            &mdash; {author}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default RecommendationCard;

