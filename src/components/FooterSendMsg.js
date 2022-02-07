import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FooterSendMsg = () => {
  return <div>
    <Container>
    <Form>
      <Row>
        <Col>
    <Form.Group>
      <Form.Control type="text" placeholder="Your name" />
    </Form.Group>
        </Col>
        <Col>
    <Form.Group >
      <Form.Control className="p-0 h-1.3" type="email" placeholder="Your email here" />
    </Form.Group>
        </Col>
      </Row>
    <Form.Group>
      <Form.Control type="text" placeholder="Subject" />
    </Form.Group>
     <Form.Group className="mb-3">
    <Form.Control as="textarea" rows={4} />
  </Form.Group>
  <Button>Send Message</Button>
    </Form>
    </Container>
  </div>;
};

export default FooterSendMsg;
