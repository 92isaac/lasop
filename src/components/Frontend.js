import React from 'react';
import { Link } from 'react-router-dom';
import FrontendImg from '../assets/Frontend Img.png'
import ApplyBtn from './ApplyBtn'
import Footer from './Footer'

const Frontend = () => {
  return <div>
  <div className="frontend">
    <h4>Frontend Development</h4>
    <div className="frontend-header">

    <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.

The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer. <br/>
<Link to="https://en.wikipedia.org/wiki/Front-end_web_development">wikipedia</Link>
</p>
<div className="frontend-header-img">
  <div className="header-img">
<img src={FrontendImg} alt="frontendIllustration"/>
  </div>

<br/>
<Link to="https://www.upwork.com/hiring/development/front-end-developer">Image source: www.upwork.com/hiring/development/front-end-developer</Link>
</div>
    </div>
      <div className="course-modules-container">
        <h4>Course Modules</h4>
      <div className="course-modules">
  <div>
  <h5>Module 1 - HTML</h5>
  <hr/>
  <p>HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.
    HTML is the basic and must have skill for every web developer. It is used and extended by various other technologies. To be completely able to understand how things work in web development, you should develop an understanding of HTML. In this section, you will learn:</p>
  <ol>
   <li>Introduction to HTML</li>
	<li>Browsers and HTML</li>
	<li>Editor&rsquo;s Offline and Online</li>
	<li>Tags, Attribute and Elements</li>
	<li>Doctype element</li>
	<li>Comments</li>
	<li>Headings, Paragraphs, Formatting text</li>
	<li>Lists and Links</li>
	<li>Images , Table</li>
  </ol>
</div>
<div>
  <h5>Module 2 - CSS</h5>
  <hr/>
  <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. Although most often used to change the style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications. In this module, you will learn</p>
  <ol>
    <li>Introduction CSS</li>
	<li>Applying CSS to HTML</li>
	<li>Selectors, properties and values</li>
	<li>CSS Colors, Backgrounds</li>
	<li>CSS Box Model</li>
	<li>CSS Margins, Padding, Borders</li>
	<li>CSS Text and Font Properties</li>
	<li>CSS General Topics</li>
	<li>CSS FRAMEWORK(BOOTSTRAP)</li>
  </ol>
</div>
        
<div>
  <h5>Module 3 - Javascript</h5>
  <hr/>
  <p>JavaScript is a high level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage or graphics facilities, relying for these upon the host environment in which it is embedded. This language is indispensable. In this section you will learn the following topics</p>
  <ol>
    <li>Introduction to JavaScript</li>
	<li>Applying JavaScript (internal, external)</li>
	<li>Understanding JS Syntax</li>
	<li>Introduction to Document and Window Object</li>
	<li>Variables, Operators</li>
	<li>Data Types, Num Type Conversion</li>
	<li>Math, String Manipulation</li>
	<li>Objects, Arrays</li>
	<li>Date and Time</li>
	<li>Conditional Statements</li>
	<li>Switch Case</li>
	<li>Looping in JS</li>
	<li>Functions</li>
  </ol>
</div>

<div>
  <h5>Module 4 - ReactJS</h5>
  <hr/>
  <p>ReactJS is the best and most popular framework for frontend development. An integral part of the MERN Stack, its community is great, and the demand for react js specialists is only increasing day by day. React is great for Rapid app development, SPAs and for creating awesome responsive and interactive web apps. In this topic you will learn:</p>
  <ol>
   <li>Introduction</li>
	<li>Templating using JSX</li>
	<li>Components, State and Props</li>
	<li>Lifecycle of Components</li>
	<li>Rendering List, Portals</li>
	<li>Error Handling</li>
	<li>Routers</li>
	<li>Redux, Redux Saga</li>
	<li>Immutable.js</li>
	<li>Service side rendering</li>
	<li>Unit testing</li>
	<li>Webpack</li>
  </ol>
  </div>
</div>
</div>
<ApplyBtn/>


  </div>
<Footer/>
  </div>;
};

export default Frontend;
