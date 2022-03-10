import React from 'react'
import FooterLinks from './FooterLinks';
import FooterSendMsg from './FooterSendMsg';
import FooterServices from './FooterServices';
import Location from '../commonfiles/Location';
import CurrentYear from '../commonfiles/CurrentYear'
import {Row, Col } from 'react-bootstrap'



const Footer = () => {
  return(<footer>
    <div className='footer'>
      <Row>
        <Col  lg={3}  md={4}  sm={12} >
      <Location/>
        </Col>
        <Col  lg={3}  md={4}  sm={12} >
    <FooterLinks/>
        </Col>
        <Col  lg={3}  md={4}  sm={12} >
    <FooterServices/>
        </Col>
        <Col  lg={3}  md={12}  sm={12} >
    <FooterSendMsg/>
        </Col>
      </Row>
    </div>
    <div>
    <hr/>
    <div className="row footer-copyright">
      <Col xs={8}>
      <div>Copyright &copy;<CurrentYear/>Lasop. All right reserved</div>
      </Col>
      <Col>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </Col>
    </div>
    </div>
    </footer>
  )};

export default Footer;