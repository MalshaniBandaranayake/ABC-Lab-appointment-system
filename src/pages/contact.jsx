import React from 'react';
import Footer from '../components/Footer';
import './Contact.css'; // Import your CSS file for styling

export default function Contact() { // Corrected the component name to start with an uppercase letter
  return (
    <div className="contact-container"> {/* Apply a class for styling */}
      <h1>Contact Us</h1>
      <div className="contact-info"> {/* Apply a class for styling */}
        <p>Address: 5th lane, Colombo 7</p>
        <p>Telephone Number: 0112256895</p>
      </div>
      <Footer />
    </div>
  );
}
