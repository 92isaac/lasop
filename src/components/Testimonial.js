import React from 'react';

const Testimonial = (props) => {
  return (<div className="testimonial">
	<div className="testimonial-body">
		<p>{props.testText}</p>
		<i className="fas fa-quote-right"></i>
	</div>
	<div className="testimonial-footer">
		<img src={props.testImage} alt="user" />
		<h3>{props.testName}</h3>
		<h4>{props.testJob}</h4>
	</div>
</div>);
}

export default Testimonial;
