import React from 'react';




const ContactUsEntry = (props) => {
  return <div className="row contactus-card">
   <img src={props.icon} alt="icon"/>
      <h5>{props.type}</h5>
      <p>{props.iconText}</p>
  </div>;
};

export default ContactUsEntry;