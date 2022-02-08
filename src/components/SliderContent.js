import React from "react";
import {NavLink} from 'react-router-dom'

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <p className="slide-header">{slide.header}</p>
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
          <div><NavLink to="/Apply" className="slide-link" >Apply Now</NavLink></div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
