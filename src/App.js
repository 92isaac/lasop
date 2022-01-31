import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavbarF from "./components/NavbarF";
import NavbarR from "./components/NavbarR";
import Home from "./components/pages/Home";
import Apply from "./components/pages/Apply";
import Payment from './components/pages/Payment'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import FAQ from './components/pages/FAQ'

function App() {
  return ( <Router>
  <NavbarF/>
  <NavbarR/>
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/Apply" element={ <Apply/> } />
    <Route path="/Payment" element={ <Payment/> } />
    <Route path="/AboutUs" element={ <AboutUs/> } />
    {/* <Route path="/Courses" element={ <Courses/> } /> */}
    <Route path="/ContactUs" element={ <ContactUs/> } />
    <Route path="/FAQ" element={ <FAQ/> } />

  </Routes>
  </Router>
  )}

export default App;
