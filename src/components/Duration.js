import React from 'react';
import { NavLink } from 'react-router-dom';


const Duration = () => {
  return <div className="duration-text">
    {/* <p><strong>|16 weeks Training&nbsp;:</strong><em>28 hours per week</em><strong> |</strong></p>

<p><strong>&nbsp; |Price:&nbsp;</strong>N&nbsp;<s>150,000</s>&nbsp; N100,000 for weekday/weekend&nbsp; &nbsp;N100, 000 for online<strong> |</strong></p>

<p><strong>| Next Start date: |&nbsp;|&nbsp;Weekdays:</strong><em>10/01/22&nbsp;</em><strong>|&nbsp;|Weekend:</strong>15<em>/01/22&nbsp;</em><strong>| | Online :&nbsp;</strong>Not Scheduled<strong>&nbsp;|</strong></p> */}
<h3>Enroll For Our various courses </h3>
<button><NavLink to="/Apply"> Apply now </NavLink></button>
  </div>;
};

export default Duration;
