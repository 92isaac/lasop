import React from 'react';
import View from '../assets/2.jpg'
import ApplyBtn from './ApplyBtn';


const Duration = () => {
  return <div className="duration-text">
<h3>Enroll For Our various courses </h3>
<figure>
  <img src={View} alt="figImage" />
<figcaption>Just as with any position, having people interested in the job is not enough for them to get hired. There may be existing programmers on the market, but their inexperience may throw off companies who want to hire someone with better skills.
      Therefore, it’s not just the question of having a shallow talent pool to begin with, but also the skill level of those who do want to apply. Lack of experience for software developers, lack of technical skills, and lack of workplace competencies are some of the are some of problems faced by most developer today.

      At LASOP, we hire only industry experts with at least 7years of industrial working experience. This is to ensure that our students get best of all knowledge, skills and experience needed to work in high tech companies and be sustained. Our state of the art facilities stationed in a conducive environment are second to none.</figcaption>
</figure>
        <ApplyBtn/>
  </div>;
};

export default Duration;
