import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavbarF from "./components/NavbarF";
import NavbarR from "./components/NavbarR";
import Home from "./components/pages/Home";
import Apply from "./components/pages/Apply";
import Payment from './components/pages/Payment'

function App() {
  return ( <Router>
  <NavbarF/>
  <NavbarR/>
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/Apply" element={ <Apply/> } />
    <Route path="/Payment" element={ <Payment/> } />

  </Routes>
  </Router>
  )}

export default App;
