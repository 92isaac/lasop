import React from 'react';
import {Accordion, button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const OurCoursesPageEntry = (props) => {
  return <div>
    <Accordion.Item eventKey={props.eventKey}>
    <Accordion.Header>{props.courseName}</Accordion.Header>
    <Accordion.Body> 
      {props.desc}
      <br />
&nbsp;
    <Link to={props.courseLink}>Read More</Link>
    </Accordion.Body>
  </Accordion.Item>

  </div>;
};

export default OurCoursesPageEntry;
