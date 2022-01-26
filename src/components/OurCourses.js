import React from 'react';
import { Link } from 'react-router-dom';

const OurCourses = (props) => {
  return <div className="course-card">
        <img src={props.courseImg} alt="frontend" />
        <p>{props.courseTitle}</p>
        <p>{props.courseDesc}</p>
        <Link to="/">Read more</Link>
     
  </div>;
};

export default OurCourses;
