
// AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LabtechNavbar.css'; // Import CSS file for Navbar styles

function LabtechNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
    
        <li className="navbar-item navbar-left">
          ABC LABORATORY
        </li>
        <li className="navbar-item">
          <Link to="/labtechnition" className="navbar-link">Appointment Details</Link>
        </li>
        <li className="navbar-item">
          <Link to="/fileupload" className="navbar-link">Upload Test Reports</Link>
        </li>
        
        
      </ul>
    </nav>
  );
}

export default LabtechNavbar;
