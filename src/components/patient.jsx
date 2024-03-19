import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer component


function Patient() {
  const [nic, setNIC] = useState('');
  const [patientname, setName] = useState('');
  const [patientaddress, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [doctorname, setDoctorname] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const doctorOptions = ["Roy Perera", "Brian Liwera", "Shafa Perera"];

  const save = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/v1/patients/save", {
        nic: nic,
        patientname: patientname,
        patientaddress: patientaddress,
        email: email,
        mobile: mobile,
        doctorname: doctorname
      });
      alert("Patient Registration Successful");
      // Redirect to home page after successful registration
      redirectTo('/home');
    } catch (error) {
      alert("Patient Registration Failed");
      console.error("Error saving patient:", error);
    }
  };

  const redirectTo = (path) => {
    window.location.href = path;
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate NIC format (exactly 9 digits followed by 'V')
    const nicRegex = /^\d{9}V$/;
    if (!nicRegex.test(nic)) {
      errors.nic = 'NIC must be 9 digits followed by the letter V';
      isValid = false;
    }

    // Validate patient name
    if (!patientname) {
      errors.patientname = 'Patient Name is required';
      isValid = false;
    }

    // Validate doctor name
    if (!doctorname) {
      errors.doctorname = 'Doctor Name is required';
      isValid = false;
    }

    // Validate mobile number (exactly 10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <div>
     
      <div class="container mt-4">
      <h1 class="text-center">Patient Registration</h1>
        <div class="row justify-content-center">
          <div class="col-lg-6">

        <form class="border p-3 shadow">
          <div class="form-group">
            <label>NIC</label>
            <input
              type="text"
              class="form-control"
              id="nic"
              value={nic}
              onChange={(event) => setNIC(event.target.value)}
            />
            {formErrors.nic && <span className="text-danger">{formErrors.nic}</span>}
          </div>
          <div class="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              class="form-control"
              id="patientname"
              value={patientname}
              onChange={(event) => setName(event.target.value)}
            />
            {formErrors.patientname && <span className="text-danger">{formErrors.patientname}</span>}
          </div>
          <div class="form-group">
            <label>Patient Address</label>
            <input
              type="text"
              class="form-control"
              id="patientaddress"
              value={patientaddress}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
          </div>
          <div class="form-group">
            <label>Mobile</label>
            <input
              type="text"
              class="form-control"
              id="mobile"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
            {formErrors.mobile && <span className="text-danger">{formErrors.mobile}</span>}
          </div>
          <div class="form-group">
            <label>Doctor Name</label>
            <select
              class="form-control"
              id="doctorname"
              value={doctorname}
              onChange={(event) => setDoctorname(event.target.value)}
            >
              <option value="">Select Doctor</option>
              {doctorOptions.map((doctor, index) => (
                <option key={index} id="doctor" value={doctor}>{doctor}</option>
              ))}
            </select>
            {formErrors.doctorname && <span className="text-danger">{formErrors.doctorname}</span>}
          </div>
          <div>
            <button class="btn btn-primary mt-4-dark" id="registration" onClick={save}>Register</button> <br />
            <button className="btn btn-primary mt-4 btn-warning" type="button">
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                Internal Logins
              </Link>
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>

      <br />
      <Footer /> 
    </div>
  );
}

export default Patient;
