import React from 'react'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import S from './S'
import Signin from './Signin'

export default function Home() {
  return (
    <Router>
    <div>
        <nav>
            <ul>
                {/* <li><Link to='/'></Link></li>
                <li><Link to='/Signin'></Link></li> */}

            </ul>
            <Routes>
                <Route path='/' element={<S/>}/>
                <Route path='/Signin' element={<Signin/>}/>
            </Routes>
        </nav>
      
    </div>
    </Router>
  )
}
