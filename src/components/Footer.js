import React from 'react'
import FooterLinks from './FooterLinks';
import FooterSendMsg from './FooterSendMsg';
import FooterServices from './FooterServices';
import Location from './Location';
import CurrentYear from "./CurrentYear";


const Footer = () => {
  return(<footer>
    <div className='footer'>
      <Location/>
    <FooterLinks/>
    <FooterServices/>
    <FooterSendMsg/>
    </div>
    <div>
    <hr/>
    <div className="footer-copyright">
      <h6 className='inline'>&copy; <span><CurrentYear/></span>Lasop. All right reserved</h6>
      <div>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>
    </div>
    </footer>
  )};

export default Footer;