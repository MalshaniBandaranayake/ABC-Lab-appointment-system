
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for Navbar styles

function mainNavbar() {
  return (
    
    <nav className="navbar">
      <ul className="navbar-list">
        
        <li className="navbar-item navbar-left">
          ABC LABORATORY
        </li>


      <li className="navbar-item">
          <Link to="/home" className="navbar-link">Home</Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>

        <li className="navbar-item">
          <Link to="/token" className="navbar-link">Get Tocken</Link>
        </li>

        <li className="navbar-item">
          <Link to="/patient" className="navbar-link">Login</Link>
        </li>

        <li className="navbar-item">
          <Link to="/doctorsname" className="navbar-link">Doctors Details</Link>
        </li>

       

       
      </ul>
    </nav>
  );
}

export default mainNavbar;

