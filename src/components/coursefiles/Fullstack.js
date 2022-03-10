import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footerfiles/Footer';

const Fullstack = () => {
  return <div>
    <div className="full-stack">
    <div className="full-stack-header">
      <h4>Fullstack Web Development</h4>
      <p>Hands on training to create full stack web applications using front end, back end and database development to be prepared for your new career. Our comprehensive full stack JAVASCRIPT software development program acquaints you with dynamic. Data-driven web applications. Learn HTML, CSS, JAVASCRIPT,REACT and NODE.JS in just 12-16 weeks and begin your career as a web developer. Software development Skills are in demand across a large number of industries. Getting trained helps you learn them.</p>
      </div>
      <div className="full-stack-exptn">
        <h5>What To Expect At The End Of This Program</h5>
        <div>
          <div className='container m-5'>
          <div className="row exptn-grid">
          <div className="col-lg-4 col-md-6 col-sm-12 exptn-grid-card">
            <h6><Link to="/Frontend">Frontend Development</Link></h6>
        <hr/>

            <p>Produce dynamic, interactive websites using HTML,CSS and JAVASCRIPT.</p>
          </div>
          {/* <div className='row'> */}
          <div className="col-lg-4 col-md-6 col-sm-12 exptn-grid-card">
            <h6><Link to="/Backend">Backend Development</Link></h6>
        <hr/>

            <p>Program server side applications and RESTful web APIS Express,ASP.NET or Spring.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 exptn-grid-card">
            <h6><Link to="/Frontend">Responsive Design</Link></h6>
        <hr/>

            <p>Design and properly structure a website that is responsive in all devices.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 exptn-grid-card">
            <h6><Link to="/Frontend">Programming Foundation</Link></h6>
        <hr/>

            <p>Gain core knowledge in javasript.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 exptn-grid-card">
            <h6><Link to="/Frontend">Database Developmen</Link></h6>
        <hr/>

            <p>Learn MySQL to design tables and collection</p>
          </div>
          {/* </div> */}
          </div>
        </div>
        </div>

      {/* </div> */}

      <div>
      <div>
        <h5>Setting Your Schedules</h5>
        <p>Get yourself trained as a full stack web developer with JAVASCRIPT at LASOP and become a multi-talented industry ready developer in seven weeks. You will enjoy mentorship from our industry experts in real-time. Look forward to working through industry-aligned course content that will empower you in your new career.</p>
      </div>
      <div>
        <h5>What You Will Gain</h5>
        <ol>
          <li>20 hours per week commitment</li>
	<li>After training nine months mentorship</li>
	<li>Recognized Certification on completion of the program</li>
	<li>Quality, professional feedback on all coding submission</li>
	<li>A real assessment project at the end of the training</li>
        </ol>
      </div>
      </div>

    </div>
  </div>
    <Footer/>
  </div>;
};

export default Fullstack;
