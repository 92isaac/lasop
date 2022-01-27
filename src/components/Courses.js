import React from 'react';
import OurCourses from './OurCourses';
import ourCoursesDic from './ourcoursesdic';



const showCourse =(show)=>{
  return <OurCourses
  key={show.courseTitle}
  courseImg={show.courseImg}
  courseTitle={show.courseTitle} 
  courseDesc={show.courseDesc} />

}

const Courses = () => {
  return <div className='courses-container'>
    <div className="course-container-card">
        <h1>Courses We Offer</h1>
      <div className="ourcourse-card">
    {ourCoursesDic.map(showCourse)}
   </div>
    </div>
  </div>;
};

export default Courses;
