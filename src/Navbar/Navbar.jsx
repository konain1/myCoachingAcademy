import React from 'react';
import { Link } from 'react-router-dom';
import English from '../Course/English';
import "./Navbar.scss";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>MyAcademy</div>
      <div className='navbar__nav'>
        <ul>
          <li><Link to="/english">English</Link></li>
          <li><Link to="/dsa">DSA</Link></li>
          <li><Link to="/frontend">FrontEnd</Link></li>
          <li><Link to="/backend">BackEnd</Link></li>
        </ul>
      </div>
      <div className='navbar__login'>login</div>
    </div>
  );
}

export default Navbar;
