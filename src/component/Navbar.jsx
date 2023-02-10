import React from 'react'
import mainlogo from "../assets/images/logo.png"
import Login from './Login'

const Navbar = () => {
  return (
    <header classsName="header">
    <div className="logo">
      <a href="https://careeres.sl">
       <img src={mainlogo} alt="Careers SL"/>
      </a>
        <nav className='navbar'>
          <div className="mobile-menu-container">
           <ul className='menu-main-menu'>
              <li >
              <a href="https://careers.sl">Home</a>
              </li>
              <li >
                <a href="https://careeres.sl">Find Jobs</a>
              </li>
            </ul>
            </div>
        </nav>
        <div className= "login-menu">
          <Login />
        </div>
         </div>
     </header>
)
}
export default Navbar
