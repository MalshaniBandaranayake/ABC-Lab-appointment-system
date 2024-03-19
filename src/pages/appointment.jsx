import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Appointment() {
  const [nic, setNIC] = useState("");
  const [patientName, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [appointmentId, setAppointmentId] = useState(""); // Initialize appointmentId state
  const [searchNIC, setSearchNIC] = useState(""); // State to store the NIC entered in the search bar
  const [filteredAppointments, setFilteredAppointments] = useState([]); // State to store filtered appointments
  const [formErrors, setFormErrors] = useState({}); // State for form validation errors

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

  async function saveAppointment(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/v1/appointments/save", {
        nic: nic,
        patientName: patientName,
        date: date,
        time: time,
        number: number
      });
      alert("Appointment Successful");
      clearForm();
      loadAppointments();
    } catch (error) {
      alert("Appointment Failed");
      console.error("Error saving Appointment:", error.message);
    }
  }

  function clearForm() {
    setNIC("");
    setName("");
    setDate("");
    setTime("");
    setNumber("");
  }

  function editAppointment(appointment) {
    setAppointmentId(appointment._id); // Update appointmentId state with appointment ID
    setNIC(appointment.nic);
    setName(appointment.patientName);
    setDate(appointment.date);
    setTime(appointment.time);
    setNumber(appointment.number);
  }

  async function deleteAppointment(appointmentId) {
    try {
      await axios.delete(`http://localhost:8080/api/v1/appointments/delete/${appointmentId}`);
      alert("Appointment deleted Successfully");
      await loadAppointments();
    } catch (error) {
      console.error("Error deleting Appointment:", error);
    }
  }

  async function updateAppointment(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      await axios.put(`http://localhost:8080/api/v1/appointments/edit/${appointmentId}`, {
        nic: nic,
        patientName: patientName,
        date: date,
        time: time,
        number: number
      });
      alert("Appointment Updated Successfully");
      clearForm();
      loadAppointments();
    } catch (error) {
      alert("Appointment Update Failed");
      console.error("Error updating Appointment:", error);
    }
  }

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate NIC format (exactly 9 digits followed by 'V')
    const nicRegex = /^\d{9}V$/;
    if (!nicRegex.test(nic)) {
      errors.nic = 'NIC must be 9 digits followed by the letter V';
      isValid = false;
    }

    // Check if any field is empty
    if (!patientName) {
      errors.patientName = 'Patient Name is required';
      isValid = false;
    }
    if (!date) {
      errors.date = 'Date is required';
      isValid = false;
    }
    if (!time) {
      errors.time = 'Time is required';
      isValid = false;
    }
    if (!number) {
      errors.number = 'Number is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <div>
      <br/>
      <h1>Appointment Details</h1>
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
      
      <div className="container mt-4">
        <form onSubmit={saveAppointment}>
          <div className="form-group">
            <label>NIC</label>
            <input type="text" className="form-control" value={nic} onChange={(event) => setNIC(event.target.value)} />
            {formErrors.nic && <span className="text-danger">{formErrors.nic}</span>}
          </div>
          <div className="form-group">
            <label>Patient Name</label>
            <input type="text" className="form-control" value={patientName} onChange={(event) => setName(event.target.value)} />
            {formErrors.patientName && <span className="text-danger">{formErrors.patientName}</span>}
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="text" className="form-control" value={date} onChange={(event) => setDate(event.target.value)} />
            {formErrors.date && <span className="text-danger">{formErrors.date}</span>}
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="text" className="form-control" value={time} onChange={(event) => setTime(event.target.value)} />
            {formErrors.time && <span className="text-danger">{formErrors.time}</span>}
          </div>
          <div className="form-group">
            <label>Number</label>
            <input type="text" className="form-control" value={number} onChange={(event) => setNumber(event.target.value)} />
            {formErrors.number && <span className="text-danger">{formErrors.number}</span>}
          </div>
          <button className="btn btn-primary mt-4" type="submit">Create Appointment</button> 
          <button className="btn btn-warning mt-4  mr-2" onClick={updateAppointment}>Update Appointment</button>
          <button className="btn btn-primary mt-4 btn btn-danger" type="button">
            <Link to="/admin" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              View registered patients
            </Link>
          </button>
        </form>
      </div>
      <br />
      <h2>View Appointments</h2>
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">NIC</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Number</th>
            <th scope="col">Options</th>
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
              <td>
                <button className="btn btn-warning" onClick={() => editAppointment(appointment)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteAppointment(appointment._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer /> 
    </div>
  );
}

export default Appointment;
