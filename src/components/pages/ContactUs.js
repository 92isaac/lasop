import React from 'react';
import contactUs from '../contactusfiles/contactUsList'
import ContactUsEntry from '../contactusfiles/ContactUsEntry'
import FooterSendMsg from '../footerfiles/FooterSendMsg';
import IframeHolder from '../commonfiles/IframeHolder';
import {Row, Col} from 'react-bootstrap'


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
    <div className=" contactus-card-container">
      {contactUs.map(ContactMap)}
    </div>
    <div className="container-fluid contactus-map">
      <Row>
        <Col lg={8}  md={12}  sm={12}>
       <IframeHolder/>
        </Col>
        <Col lg={4}  md={12}  sm={12} >
      <FooterSendMsg/>
        </Col>
      </Row>
      </div> 
    </div>;
};

export default ContactUs;
