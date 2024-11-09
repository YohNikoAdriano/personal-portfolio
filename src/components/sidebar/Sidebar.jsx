import React, { useState } from 'react'
import "./sidebar.css"

import Logo from "../../assets/letter-n.png"

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <div>
      <aside className={toggle ? "sidebar show-menu" : "sidebar"}>
        <a href="#home" className='logo'>
          <img src={Logo} alt="Logo N" />
        </a>
        <nav className='nav'>
          <div className='navbar'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a href="#home" className='nav-link'>
                  <i className='icon-home'></i>
                </a>
              </li>
              <li className='nav-item'>
                <a href="#about" className='nav-link'>
                  <i className='icon-user'></i>
                </a>
              </li>
              <li className='nav-item'>
                <a href="#services" className='nav-link'>
                  <i className='icon-wrench'></i>
                </a>
              </li>
              <li className='nav-item'>
                <a href="#resume" className='nav-link'>
                  <i className='icon-briefcase'></i>
                </a>
              </li>
              <li className='nav-item'>
                <a href="#portfolio" className='nav-link'>
                  <i className='icon-notebook'></i>
                </a>
              </li>
              <li className='nav-item'>
                <a href="#contact" className='nav-link'>
                  <i className='icon-bubbles'></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='nav-footer'>
          <span>Niko Adriano</span><br />
          <span className='copyright'>&copy;Copyright 2024</span>
        </div>
      </aside>

      <div className={ toggle ? "nav-toggle nav-toggle-open" : "nav-toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </div>
  )
}

export default Sidebar
