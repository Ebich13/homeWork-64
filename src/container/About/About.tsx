import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About: React.FC = () => {
  const realMadridLogoUrl = 'https://i.pinimg.com/originals/b9/ab/e1/b9abe1a9b905ba8f6e19a6e20a836289.png';

  return (
    <Container className="mt-4">
      <h2>About Real Madrid</h2>
      <p>Real Madrid Football Club is based in Madrid, Spain. It has a rich history of success in domestic and international competitions.</p>
      <p>The club's colors are white and blue, and their home matches are played at the Santiago Bernabéu Stadium.</p>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Achievements</Card.Title>
              <Card.Text>
                Real Madrid has won numerous domestic league titles, UEFA Champions League trophies, and other prestigious honors.
              </Card.Text>
              <Button variant="primary">Explore Achievements</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Community Engagement</Card.Title>
              <Card.Text>
                We are committed to engaging with our local and global communities through various social initiatives and events.
              </Card.Text>
              <Button variant="primary">Learn About Our Community Work</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <img src={realMadridLogoUrl} alt="Real Madrid Logo" className="img-fluid" />
        </Col>
      </Row>

      <p className="mt-4">
        For more information, visit the <a href="https://www.realmadrid.com/en" target="_blank" rel="noopener noreferrer">official Real Madrid website</a>.
      </p>
    </Container>
  );
};



export default About;