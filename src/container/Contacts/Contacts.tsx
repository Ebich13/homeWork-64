import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts: React.FC = () => {
  return (
    <Container className="mt-4">
      <h2>Contact Us</h2>
      <p>If you have any inquiries or need information about Real Madrid Football Club, feel free to get in touch with us.</p>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Customer Support</Card.Title>
              <Card.Text>
                For general inquiries or assistance, please contact our customer support team.
              </Card.Text>
              <Button variant="primary" href="mailto:support@realmadrid.com">Email Customer Support</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Media Relations</Card.Title>
              <Card.Text>
                Journalists and media professionals can reach out to our media relations team for press inquiries.
              </Card.Text>
              <Button variant="primary" href="mailto:media@realmadrid.com">Contact Media Relations</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <p>For general inquiries, you can also reach us through:</p>
          <ul>
            <li>Email: <a href="mailto:info@realmadrid.com">info@realmadrid.com</a></li>
            <li>Phone: +34 91 398 43 00</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
