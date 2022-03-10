import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import './AppQuery460.css'
// import './AppQuery960.css'
import NavbarF from "./components/navbarfiles/NavbarF";
import NavbarR from "./components/navbarfiles/NavbarR";
import Home from "./components/pages/Home";
import Apply from "./components/pages/Apply";
import Payment from './components/pages/Payment'
import AboutUs from './components/pages/AboutUs'
import Course from './components/pages/Course'
import ContactUs from './components/pages/ContactUs'
import FAQ from './components/pages/FAQ'
import Frontend from './components/coursefiles/Frontend'
import Backend from './components/coursefiles/Backend'
import Fullstack from './components/coursefiles/Fullstack'

function App() {
  return ( <Router>
  <NavbarF/>
  <NavbarR/>
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/Apply" element={ <Apply/> } />
    <Route path="/Payment" element={ <Payment/> } />
    <Route path="/AboutUs" element={ <AboutUs/> } />
    <Route path="/Course" element={ <Course/> } />
    <Route path="/ContactUs" element={ <ContactUs/> } />
    <Route path="/FAQ" element={ <FAQ/> } />
    <Route path="/Frontend" element={ <Frontend/> } />
    <Route path="/Backend" element={ <Backend/> } />
    <Route path="/Fullstack" element={ <Fullstack/> } />

  </Routes>
  </Router>
  )}

export default App;
