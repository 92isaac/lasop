import React from 'react';
import FaqImg from '../../assets/logo.png'
// import ApplyBtn from '../ApplyBtn';
import CourseAccordion from '../CourseAccordion';





const Course = () => {
  return <div className="ourcoursespage-container">
    <h4>Our Courses</h4>
  <div className='faq-body'>
      <CourseAccordion/>
      <div className='faq-img'>
      <img src={FaqImg} alt="faq"/>
      </div>
      </div>
      <div className="ourcoursespage-btn">      
        {/* <ApplyBtn/> */}
      </div>
  </div>;
};

export default Course;
