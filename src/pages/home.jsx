
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MainHome.css'; // Import CSS file

 function home() {
  return (
    <div>
      <Navbar/>
      <h2>Home Page</h2>

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
export default home