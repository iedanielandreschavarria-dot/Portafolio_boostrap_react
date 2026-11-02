import React, { useState } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';

/**
 * Componente LeaveRecommendationForm
 * Implementa el formulario "Leave a Recommendation" usando Form, Form.Group,
 * Form.Label, Form.Control y Button de React-Bootstrap.
 * Permite agregar interactivamente nuevas recomendaciones al portafolio.
 */
function LeaveRecommendationForm({ onAddRecommendation }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    onAddRecommendation({
      name: name.trim(),
      text: message.trim(),
    });

    setName('');
    setMessage('');
    setShowModal(true);
  };

  return (
    <section className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h4 className="mb-3 fw-normal leave-rec-title">Leave a Recommendation</h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="recommendationName">
              <Form.Label className="visually-hidden">Name (Optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name (Optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="custom-form-control"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="recommendationMessage">
              <Form.Label className="visually-hidden">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="custom-form-control"
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" variant="outline-primary" className="submit-rec-btn px-5 py-1">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      {/* Modal de confirmación al enviar una recomendación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center py-4">
          <div className="mb-3 text-success fs-1">
            <i className="bi bi-check-circle-fill"></i>
          </div>
          <h5 className="mb-3">Thanks for leaving a recommendation!</h5>
          <Button
            variant="outline-primary"
            className="submit-rec-btn px-4"
            onClick={() => setShowModal(false)}
          >
            Ok
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default LeaveRecommendationForm;

