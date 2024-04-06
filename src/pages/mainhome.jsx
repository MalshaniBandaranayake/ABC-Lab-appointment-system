import React from 'react';
import MainNavbar from '../components/mainNavbar';
import Footer from '../components/Footer'; // Import the Footer component
import './MainHome.css'; // Import CSS file

function MainHome() {
  return (
    <div>
      <MainNavbar /> <br />
      <h1 style={{ textAlign: 'center', color: 'white' }}>WELCOME TO ABC LABORATORY</h1>
      
      <div className="imageContainer">
        <div className="image image1"></div>
        <div className="image image2"></div>
        <div className="image image3"></div>
        <div className="image image4"></div>
      </div>

      <Footer /> 
    </div>
  );
}

export default MainHome;
