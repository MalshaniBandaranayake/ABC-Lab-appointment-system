// DoctorNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorNavbar.css'; // Import CSS file for Navbar styles

function DoctorsNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      
        <li className="navbar-item navbar-left">
          ABC LABORATORY
        </li>
        <li className="navbar-item">
          <Link to="/doctor" className="navbar-link">Appointments</Link>
        </li>

        <li className="navbar-item">
          <Link to="/filedownload" className="navbar-link">Report Generator</Link>
        </li>
        
     
      </ul>
    </nav>
  );
}

export default DoctorsNavbar;
