import React from 'react';
import { Link } from 'react-router-dom';

const CardCourse = (props) => {
  return <div className="course-card">
        <img src={props.courseImg} alt="frontend" />
        <h2>{props.courseTitle}</h2>
        <p>{props.courseDesc}</p>
        <Link to="/">Read more</Link>
     
  </div>;
};

export default CardCourse;
