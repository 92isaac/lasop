import React from 'react';
import {Accordion} from 'react-bootstrap'
import FaqEntry from '../faqfiles/FaqEntry';
import faquestion from '../faqfiles/faquestions'
import FaqImg from '../../assets/faq 1.png'
import Footer from '../footerfiles/Footer'

const fQuestion=(fquest)=>{
  return <FaqEntry 
  key={fquest.question}
  eventKey={fquest.eventKey}
  question={fquest.question}
  answer={fquest.answer}
  />
}

const FAQ = () => {
  return <div className="faq-container">
    <h4>Frequently Asked Questions</h4>
  <div className='row faq-body'>
      <div className='col-lg-6 col-md-12 faq-img'>
      <img src={FaqImg} alt="faq"/>
      </div>
    <Accordion className="col-lg-6 col-md-12 accordion">
      {faquestion.map(fQuestion)}
      </Accordion>
  </div>

  <Footer/>

  </div>;
};

export default FAQ;
