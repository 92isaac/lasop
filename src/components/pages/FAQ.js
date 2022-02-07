import React from 'react';
import {Accordion} from 'react-bootstrap'
import FaqEntry from '../FaqEntry';
import faquestion from '../faquestions'
import FaqImg from '../../assets/faq 1.png'
import Footer from '../Footer'

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
  <div className='faq-body'>
    <Accordion className="w-50">
      {faquestion.map(fQuestion)}
      </Accordion>
      <div className='faq-img'>
      <img src={FaqImg} alt="faq"/>
      </div>
  </div>

  <Footer/>

  </div>;
};

export default FAQ;
