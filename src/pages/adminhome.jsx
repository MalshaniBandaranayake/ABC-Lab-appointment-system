
import React from 'react'
import AdminNavbar from '../components/AdminNavbar';
import './adminhome.css'; // Make sure this path is correct
import Footer from '../components/Footer';
import './MainHome.css'; // Import CSS file


function adminhome() {
  return (
    <div>
      <AdminNavbar/>
      <h2>Welecome to admin page</h2>

      <div className="imageContainer">
        <div className="image image1"></div>
        <div className="image image2"></div>
        <div className="image image3"></div>
        <div className="image image4"></div>
      </div>
      
      <Footer /> 

    </div>
  )
}

export default adminhome
