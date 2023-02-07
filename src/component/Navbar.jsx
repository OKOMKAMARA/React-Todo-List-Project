import React from 'react'
import mainlogo from "../assets/images/logo.png"


const Navbar = () => {
  return (
    
    // <header className='header'>
    <>
   
    <nav className='nav-header'>
      <a href='index.#'>
         <img src={mainlogo} alt="loading" />
      </a>
   <ul className="navbar">
           <li>
            <a className="active"
            href="index.html">Home</a>
            </li>
            <li>
              <a href='index.html'>Find Jobs</a>
            </li>
            </ul>
         <ul className='mobile'>
          <i className='fas fa-bars'></i>
            <i className='fas fa-times'>
          </i>
         </ul>
      </nav>
     </>
//  </header>
  //   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  // <div class="container-fluid">
  //   <a class="navbar-brand" href="#">
  //     <img src={mainlogo} alt="logo" />
  //   </a>
  //   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //   <div class="collapse navbar-collapse" id="navbarNav">
  //     <ul class="navbar-nav">
  //       <li class="nav-item">
  //         <a class="nav-link " aria-current="page" href="#">Home</a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link" href="#">Find Jobs</a>
  //       </li>
  //      </ul>
      
  //    </div>
  // </div>
  )
}

export default Navbar
