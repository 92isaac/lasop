import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from "react";
const FooterSendMsg = () => {

  const [name, setName] = useState("Simple");
  const [email, setEmail] = useState("Omoniyi@iil.com");
  const [subject, setSubject] = useState("Topic");
  const [message, setMessage] = useState("Tester test");

  const [focus, setFocus] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const Message = [name, email, subject, message];

    fetch('http://localhost:3000/messages', {
      method: 'POST',
      header:{ "Content-Type": "application/json" },
      body: JSON.stringify(Message)
    }).then(() => {
      console.log('new message sent' + Message);
    })
    
  }
  const handleFocus =(e)=>{
    setFocus(true);
    const Message = [name, email, subject, message]
  console.log(Message)
    };

  return <div>
    <Container>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
    <Form.Group>
      <Form.Control type="text" 
      placeholder="Your name" 
      value={name}
      onChange={(e) => setName(e.target.value)} 
      focus={focus.toString()}
      onBlur={handleFocus} />
    </Form.Group>
        </Col>
        <Col>
    <Form.Group >
      <Form.Control className="p-0 h-1.3" 
      type="email" 
      placeholder="Your email here"
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      focus={focus.toString()}
      onBlur={handleFocus}
       />
    </Form.Group>
        </Col>
      </Row>
    <Form.Group>
      <Form.Control type="text" 
      placeholder="Subject"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      focus={focus.toString()}
      onBlur={handleFocus}
      />
    </Form.Group>
     <Form.Group className="mb-3">
    <Form.Control as="textarea" rows={4}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    focus={focus.toString()}
    onBlur={handleFocus}
    />
  </Form.Group>
  <Button type="submit">Send Message</Button>
    </Form>
    </Container>
  </div>;
};

export default FooterSendMsg;
