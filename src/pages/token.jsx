import axios from 'axios';
import React, { useState } from "react";
import Footer from '../components/Footer';

function Token() {
  const [nics, setNICs] = useState([]);
  const [appointmentData, setAppointmentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(event) {
    if (event.key === 'Enter') {
      setLoading(true);
      try {
        // Validate NICs before making the API call
        const invalidNIC = nics.find(nic => !/^(\d{9}V?)$/.test(nic));
        if (invalidNIC) {
          setError("Invalid NIC format. NIC should be 9 digits followed by 'V'.");
          return;
        }

        const promises = nics.map(async nic => {
          const response = await axios.get(`http://localhost:8080/api/v1/appointments/search/${nic}`);
          return response.data;
        });
        const results = await Promise.all(promises);
        setAppointmentData(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  function handleClear() {
    setNICs([]);
    setAppointmentData([]);
  }

  function handleAddNIC() {
    setNICs([...nics, ""]);
  }

  function handleNICChange(index, value) {
    const updatedNics = [...nics];
    updatedNics[index] = value;
    setNICs(updatedNics);
  }

  return (
    <div>
        <br/>
      <h1>Get Patient Token</h1> <br/>
      {nics.map((nic, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Search by NIC"
            value={nic}
            onChange={(e) => handleNICChange(index, e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      ))}
      <button className="btn btn-warning" onClick={handleAddNIC}>Add NIC</button>
      <button className="btn btn-primary" onClick={handleClear}>Clear</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : appointmentData.length > 0 ? (
        <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">NIC</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Number</th>
        
          </tr>
          </thead>
          <tbody>
            {appointmentData.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.nic}</td>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

<Footer /> 
    </div>
  );
}

export default Token;
