import axios from 'axios';
import { useEffect, useState } from "react";
import DoctorsNavbar from '../components/DoctorsNavbar';
import Footer from '../components/Footer';

function Appointment() {
 
  const [searchNIC, setSearchNIC] = useState(""); // State to store the NIC entered in the search bar
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]); // State to st


  useEffect(() => {
    loadAppointments();
  }, []);

  useEffect(() => {
    // Convert searchNIC to lowercase for case-insensitive search
    const searchQuery = searchNIC.toLowerCase();

    // Filter appointments based on the entered NIC
    const filtered = appointments.filter(appointment => appointment.nic.toLowerCase().includes(searchQuery));
    setFilteredAppointments(filtered);
  }, [searchNIC, appointments]);

  async function loadAppointments() {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/appointments/getAll");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error loading appointments:", error);
    }
  }

  return (
    <div>
      <DoctorsNavbar/>
        <br/>
      <h1>Appointments Details</h1>
      <br/>

      <div>
        <input
          type="text"
          placeholder="Search by NIC"
          value={searchNIC}
          onChange={(e) => setSearchNIC(e.target.value)}
        />
      </div>
      <br/>
      
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
          {filteredAppointments.map(appointment => (
            <tr key={appointment._id}>
              <td>{appointment.nic}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.number}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer /> 
    </div>
  );
}

export default Appointment;