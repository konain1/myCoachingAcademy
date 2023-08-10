import React from 'react'
import "./Navbar.scss"


function Navbar() {
  return (
    <div className='navbar'>

    <div className='navbar__logo'>logoSection</div>
    <div className='navbar__nav'>
    <ul>
    <li>English</li>
    <li>DSA</li>
    <li>FrontEnd</li>
    <li>BackEnd</li>



    </ul>


    </div>
    <div className='navbar__login'>login</div>
      
    </div>
  )
}

export default Navbar
