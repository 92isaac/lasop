import React from 'react';
import OurCourses from './CardCourse';
import ourCoursesDic from './cardcoursedic';



const showCourse =(show)=>{
  return <OurCourses
  key={show.courseTitle}
  courseImg={show.courseImg}
  courseTitle={show.courseTitle} 
  courseDesc={show.courseDesc} />

}

const Card = () => {
  return <div className='courses-container'>
    <div className="course-container-card">
        <h1>Courses We Offer</h1>
      <div className="ourcourse-card">
    {ourCoursesDic.map(showCourse)}
   </div>
    </div>
  </div>;
};

export default Card;
