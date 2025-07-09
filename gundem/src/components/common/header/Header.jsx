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
              <span style={{cursor: 'pointer'}}>Anasayfa</span>
            </li>
            <li onClick={() => handleNavClick('/about')}>
              <span style={{cursor: 'pointer'}}>Hakkımızda</span>
            </li>
            <li onClick={() => handleNavClick('/courses')}>
              <span style={{cursor: 'pointer'}}>Projelerimiz</span>
            </li>
            <li onClick={() => handleNavClick('/team')}>
              <span style={{cursor: 'pointer'}}>Yapı Hesap</span>
            </li>
            <li onClick={() => handleNavClick('/contact')}>
              <span style={{cursor: 'pointer'}}>İletişim</span>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>Şimdi Randevu Alın!</div>
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
