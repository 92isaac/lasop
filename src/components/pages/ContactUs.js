import React from 'react';
import contactUs from '../contactUsList'
import ContactUsEntry from '../ContactUsEntry'
import FooterSendMsg from '../FooterSendMsg';
import IframeHolder from '../IframeHolder';


const ContactMap =(contactpedia)=>{
  return <ContactUsEntry 
  key={contactpedia.icon}
  icon={contactpedia.icon}
  type={contactpedia.type}
  iconText={contactpedia.iconText}
  />
}




const ContactUs = (props) => {
  return <div className="contactus-container">
    <div className="contactus-text">
      <h3>Contact Us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="contactus-card-container">
      {contactUs.map(ContactMap)}
    </div>
    <div className="contactus-map">
       <IframeHolder/>
      <FooterSendMsg/>
      </div> 
    </div>;
};

export default ContactUs;
