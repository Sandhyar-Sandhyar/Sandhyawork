import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js"
import "./r.css";

export default function r1() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>

      </Routes>
      
    </div>
    </Router>
  )
}
