import React from 'react';

const TestimonialEntry = (props) => {
  return <div>
        <div className="testimonial-col">
      <img src={props.imgs} alt="user1 "/>
      <div>
        <p>{props.text}</p>
        <h3>{props.name}</h3>
        <i className={props.fullstar}></i>
        <i className={props.fullstar}></i>
        <i className={props.fullstar}></i>
        <i className={props.fullstar}></i>
        <i className={props.halfstar}></i>
      </div>
    </div>
  </div>;
};

export default TestimonialEntry;
