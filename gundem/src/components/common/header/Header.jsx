import React, { useState } from "react"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  const handleNavClick = (path) => {
    setClick(false)
    window.location.hash = path
  }

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "}>
            <li onClick={() => handleNavClick('/')}>
              <span style={{cursor: 'pointer'}}>Home</span>
            </li>
            <li onClick={() => handleNavClick('/courses')}>
              <span style={{cursor: 'pointer'}}>All Courses</span>
            </li>
            <li onClick={() => handleNavClick('/about')}>
              <span style={{cursor: 'pointer'}}>About</span>
            </li>
            <li onClick={() => handleNavClick('/team')}>
              <span style={{cursor: 'pointer'}}>Team</span>
            </li>
            <li onClick={() => handleNavClick('/pricing')}>
              <span style={{cursor: 'pointer'}}>Pricing</span>
            </li>
            <li onClick={() => handleNavClick('/journal')}>
              <span style={{cursor: 'pointer'}}>Journal</span>
            </li>
            <li onClick={() => handleNavClick('/contact')}>
              <span style={{cursor: 'pointer'}}>Contact</span>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
