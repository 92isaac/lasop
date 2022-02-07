import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from "react";
const FooterSendMsg = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return <div>
    <Container>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
    <Form.Group>
      <Form.Control type="text" 
      placeholder="Your name" 
      value={name}
      onChange={(e) => setName(e.target.value)} />
    </Form.Group>
        </Col>
        <Col>
    <Form.Group >
      <Form.Control className="p-0 h-1.3" 
      type="email" 
      placeholder="Your email here"
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
       />
    </Form.Group>
        </Col>
      </Row>
    <Form.Group>
      <Form.Control type="text" 
      placeholder="Subject"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      />
    </Form.Group>
     <Form.Group className="mb-3">
    <Form.Control as="textarea" rows={4}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    />
  </Form.Group>
  <Button type="submit">Send Message</Button>
    </Form>
    </Container>
  </div>;
};

export default FooterSendMsg;
