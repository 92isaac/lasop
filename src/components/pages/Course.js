import React from 'react';
import FaqImg from '../../assets/logo.png'
import CourseAccordion from '../coursefiles/CourseAccordion';
import { Col } from 'react-bootstrap'





const Course = () => {
  return <div className="container-fluid">
 <div className="ourcoursespage-container">
    <h4>Our Courses</h4>
  <div className='row faq-body pt-5'>
      <Col className="faq-img">
      <img className="img-fluid" src={FaqImg} alt="faq"/>
      </Col>

      <Col xs={6}>
      <CourseAccordion/>
      </Col>
      </div>
      </div>
  </div>;
};

export default Course;
