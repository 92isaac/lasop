import React from 'react';
import {Accordion} from 'react-bootstrap'
import courselist from './coursepagesdic'
import OurCoursesPageEntry from './OurCoursesPageEntry';



const courseList=(cList)=>{
  return <OurCoursesPageEntry 
  
  key={cList.eventKey}
  eventKey={cList.eventKey}
  courseName={cList.courseName}
  desc={cList.desc}
  courseLink={cList.courseLink}
  
  
  />
}


const CourseAccordion = () => {
  return <div className="container-fluid">
 <Accordion className="w-70">
      {courselist.map(courseList)}
      </Accordion>
  </div>;
};

export default CourseAccordion;
