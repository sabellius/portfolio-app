import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function ContactSection() {
  return (
    <section id="contact" className="contact-section full-page-section">
      <Container>
        <h2 className="text-center mb-5">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow">
              <Card.Body className="p-4">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your message..."
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
