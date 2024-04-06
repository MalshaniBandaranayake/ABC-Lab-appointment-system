
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for Navbar styles

function Navbar() {
  return (
    
    <nav className="navbar">
      <ul className="navbar-list">
        
        <li className="navbar-item navbar-left">
          ABC LABORATORY
        </li>


      <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
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
          <Link to="/payment" className="navbar-link">Payment</Link>
        </li>

        <li className="navbar-item">
          <Link to="/filedownload" className="navbar-link">Download Report</Link>
        </li>

       
      </ul>
    </nav>
  );
}

export default Navbar;

