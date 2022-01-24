import React from 'react';
import Testimonial from './Testimonial'
import testimonialfiles from '../testimonialfiles';


console.log(testimonialfiles);

const createTestimonialMap = (listsT) => {
  return (
  <div>
    <Testimonial 
  // key={listsT.testimonialName}
  // testText={listsT.testimonialText}
  // testImage={listsT.testimonialImage}
  // testName={listsT.testimonialName}
  // testJob={listsT.testimonialJob}
  />
  {/* <Testimonial
      testText='At LASOP, we provide high quality training to equip our students with industry – recongnised IT skills and knowledge quality companies are looking for.'
  testImage={lists.testimonialImage}
  testName="David Shuaib"
  testJob="Frontend Developer"
  /> */}
  <Testimonial/>
  </div>
  )};

const TestimonialEntry = () => {
  return <div className="testimonial-container">
    {testimonialfiles.map(createTestimonialMap)}
  </div>;
  };

export default TestimonialEntry;
