import React from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import H1 from './H1'
import Contact from './Contact';
import About from './About';
import "./Router1.css";


export default function Web() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
            <li id='logo'>Amozon.in</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><input type='text' placeholder='search in amozon.in'/>
            <button>search</button>
            </li>
            
        </ul>
        </nav>
        <Routes>
            <Route path='/' element={<H1/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>

     
    </div>
    </Router>
  )
}
