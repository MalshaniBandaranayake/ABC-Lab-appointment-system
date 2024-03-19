import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js'; // Import CryptoJS library
import Footer from '../components/Footer';

function Payment() {
  const [nic, setNic] = useState('');
  const [patientname, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [testname, setTestName] = useState('');
  const [amount, setAmount] = useState(''); // Default amount
  const [cardtype, setCardType] = useState(''); // State for selected card type
  const [cardnumber, setCardNumber] = useState(''); 
  const [securitycode, setSecurityCode] = useState(''); 
  const [formErrors, setFormErrors] = useState({}); // State for form validation errors
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleTestNameChange = (selectedTestName) => {
    // Set the selected test name
    setTestName(selectedTestName);
    // Set the amount based on the selected test name
    switch (selectedTestName) {
      case 'Urea':
        setAmount('500'); // Set the amount for Urea test
        break;
      case 'Sugar':
        setAmount('300'); // Set the amount for Sugar test
        break;
      case 'Cholesterol':
        setAmount('600'); // Set the amount for Cholesterol test
        break;
      case 'Blood Test':
        setAmount('700'); // Set the amount for Blood Test
        break;
      default:
        setAmount(''); // Reset amount if no test selected
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    // nic validate
    const nicRegex = /^\d{9}V$/;
    if (!nicRegex.test(nic)) {
      errors.nic = 'NIC must be 9 digits followed by the letter V';
      isValid = false;
    }

    // Validate card number
    if (!cardnumber) {
      errors.cardnumber = 'Card number is required';
      isValid = false;
    }

    // Validate card type
    if (!cardtype) {
      errors.cardtype = 'Card type is required';
      isValid = false;
    }

    // Validate security code
    if (!securitycode) {
      errors.securitycode = 'Security code is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handlePayment = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!validateForm()) {
      return;
    }

    try {
      // Encrypt card number and security code
      const encryptedCardNumber = CryptoJS.AES.encrypt(cardnumber, 'secret').toString();
      const encryptedSecurityCode = CryptoJS.AES.encrypt(securitycode, 'secret').toString();

      const response = await axios.post('http://localhost:8080/api/v1/payments/save', {
        nic,
        patientname,
        email,
        testname,
        amount,
        cardtype,
        cardnumber: encryptedCardNumber,
        securitycode: encryptedSecurityCode
      });

      // Check if the payment was successful
      if (response.status === 200) {
        console.log('Payment successful');
        // Reset form fields after successful payment
        setNic('');
        setPatientName('');
        setEmail('');
        setTestName('');
        setAmount(''); // Reset amount to default
        setCardType('');
        setCardNumber('');
        setSecurityCode('');
        // Optionally, display a success message within the component
        setSuccessMessage('Your payment was successful. A receipt has been sent to your email.');
      } else {
        console.error('Payment failed');
        setSuccessMessage('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error saving payment:', error);
      setSuccessMessage('Error saving payment. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <form onSubmit={handlePayment}>
        <div>
          <label>NIC:</label>
          <input type="text" className="form-control" value={nic} onChange={(event) => setNic(event.target.value)} />
          {formErrors.nic && <span className="text-danger">{formErrors.nic}</span>}
        </div>
        <div>
          <label>Patient Name:</label>
          <input type="text" className="form-control" value={patientname} onChange={(event) => setPatientName(event.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required />
          {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
        </div>
        <div>
          <label>Test Name:</label>
          <select className="form-control" value={testname} onChange={(event) => handleTestNameChange(event.target.value)}>
            <option value="">Select Test Name</option>
            <option value="Urea">Urea</option>
            <option value="Sugar">Sugar</option>
            <option value="Cholesterol">Cholesterol</option>
            <option value="Blood Test">Blood Test</option>
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input type="text" className="form-control" value={amount} readOnly />
        </div>
        <div>
          <label>Select Card Type:</label>
          <div>
            <label>
              <input type="radio" value="master" checked={cardtype === 'master'} onChange={() => setCardType('master')} required />
              MasterCard
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="visa" checked={cardtype === 'visa'} onChange={() => setCardType('visa')} required />
              Visa
            </label>
          </div>
          {formErrors.cardtype && <span className="text-danger">{formErrors.cardtype}</span>}
        </div>
        <div>
          <label>Card Number:</label>
          <input type="text" className="form-control" value={cardnumber} onChange={(event) => setCardNumber(event.target.value)} required />
          {formErrors.cardnumber && <span className="text-danger">{formErrors.cardnumber}</span>}
        </div>
        <div>
          <label>Security Code:</label>
          <input type="text" className="form-control" value={securitycode} onChange={(event) => setSecurityCode(event.target.value)} required />
          {formErrors.securitycode && <span className="text-danger">{formErrors.securitycode}</span>}
        </div>
        <button type="submit" className="btn btn-warning mt-4">Pay Now</button>
        {successMessage && <div className="text-success">{successMessage}</div>}
      </form>

      <Footer /> 
    </div>
  );
}

export default Payment;
