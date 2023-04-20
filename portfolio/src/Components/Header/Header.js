import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './Header.css'
import logo from './LogoS.png'

function Header() {
  return (
    <div className="Home">
      <BrowserRouter>
            <header>
              <img src={logo} alt='Logo' />
              <nav className="Navbar">
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#work">Work</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
                
              </nav>
            </header>
      </BrowserRouter>
    </div>
  )
}

export default Header
