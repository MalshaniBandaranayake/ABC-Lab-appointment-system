import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

function Payment() {
  
  const [payments, setPayments] = useState([]); // State for storing payments
  const [searchNIC, setSearchNIC] = useState(''); // State for search NIC
  const [filteredPayments, setFilteredPayments] = useState([]); // State to store filtered payments

  useEffect(() => {
    loadPayments();
  }, []);

  useEffect(() => {
    // Convert searchNIC to lowercase for case-insensitive search
    const searchQuery = searchNIC.toLowerCase();

    // Filter payments based on the entered NIC
    const filtered = payments.filter(payment => payment.nic && payment.nic.toLowerCase().includes(searchQuery));
    setFilteredPayments(filtered);
  }, [searchNIC, payments]);

  const loadPayments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/payments/getAll');
      setPayments(response.data);
    } catch (error) {
      console.error('Error loading payments:', error);
    }
  };

  const deletePayment = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/payments/delete/${id}`);
      console.log('Payment deleted successfully');
      // Reload payments after successful deletion
      loadPayments();
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };

  return (
    <div>
      <br/>
      <h1>View All Payments</h1>
      <div>
        <br/>
        <input
          type="text"
          placeholder="Search by NIC"
          value={searchNIC}
          onChange={(e) => setSearchNIC(e.target.value)}
        />
      </div>
      <br/>
      <br/>
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">NIC</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Email</th>
            <th scope="col">Test Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Card Type</th>
            <th scope="col">Card Number</th>
            <th scope="col">Security Code</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map(payment => (
            <tr key={payment._id}>
              <td>{payment.nic}</td>
              <td>{payment.patientname}</td>
              <td>{payment.email}</td>
              <td>{payment.testname}</td>
              <td>{payment.amount}</td>
              <td>{payment.cardtype}</td>
              <td>{payment.cardnumber}</td>
              <td>{payment.securitycode}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deletePayment(payment._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer /> 
    </div>
  );
}

export default Payment;
