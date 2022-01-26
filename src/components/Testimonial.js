import React from 'react';
import TestimonialEntry from './TestimonialEntry';
import testimonialfiles from './testimonialfiles'

const testMap=(testi)=>{
  return <TestimonialEntry
  key={testi.name}
  imgs={testi.imgs}
  text={testi.text}
  name={testi.name}
  fullstar={testi.fullstar}
  halfstar={testi.halfstar}
  />
}


const Testimonial = () => {
  return <section className="testimonial">
  <h1>What Our Student Says</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <div className="row">
     {testimonialfiles.map(testMap)}
    </div>
</section>;
};

export default Testimonial;
