
// AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; // Import CSS file for Navbar styles

function AdminNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      
        <li className="navbar-item navbar-left">
          ABC LABORATORY
        </li>

        <li className="navbar-item">
          <Link to="/adminhome" className="navbar-link">Admin Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/appointment" className="navbar-link">Appointments</Link>
        </li>
        <li className="navbar-item">
          <Link to="/viewpayment" className="navbar-link">Veiw Payments</Link>
        </li>
        <li className="navbar-item">
          <Link to="/admin" className="navbar-link">Registration Management</Link>
        </li>

        <li className="navbar-item">
          <Link to="/filedownload" className="navbar-link">Download Reports </Link>
        </li>

        
        
      </ul>
    </nav>
  );
}

export default AdminNavbar;
