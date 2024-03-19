import React from 'react';
import Footer from '../components/Footer'; // Import the Footer component
import './doctorname.css'; // Import your CSS file

function doctorsname() {
  return (
    <div>
    <br/>
    <h1 style={{ textAlign: 'center', color: 'white' }}>Doctors Details</h1>
    
    <div className="imageContainer">
      <div className="image doctor1">
        <div className="doctorInfo">
          <h2>Dr. Roy perera</h2>
          <p>Hospital: Colombo Main Hospital</p>
        </div>
      </div>
      <div className="image doctor2">
        <div className="doctorInfo">
          <h2>Dr. Brain Liwera</h2>
          <p>Hospital: Base Hospital Balapitiya</p>
        </div>
      </div>
      <div className="image doctor3">
        <div className="doctorInfo">
          <h2>Dr. Shafa Perera</h2>
          <p>Hospital: Karapitiya Hospital</p>
        </div>
      </div>
    </div>

    <Footer /> 
  </div>
);
}

export default doctorsname;
