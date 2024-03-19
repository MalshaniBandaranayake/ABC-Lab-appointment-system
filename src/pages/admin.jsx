import axios from 'axios';
import {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer component


function Patient()
{

    //logic

  const [patientid, setId] = useState('');
  const [nic, setNIC] = useState("");
  const [patientname, setName] = useState("");
  const [patientaddress, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  //const [patients, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [doctorname, setDoctorname] = useState('');
    const [patients, setPatients] = useState([]);

  
    useEffect(() => {
      loadPatients();
  }, []);

  async function loadPatients() {
      try {
          const response = await axios.get("http://localhost:8080/api/v1/patients/getAll");
          setPatients(response.data);
      } catch (error) {
          console.error("Error loading patients:", error);
      }
  }

  function filterPatientsByNIC() {
      return patients.filter(patient => patient.nic.includes(searchQuery));
  }

  function handleSearchChange(event) {
      setSearchQuery(event.target.value);
  }

 
  //async function save(event) {
   // event.preventDefault();
   // try {
      //const response = await axios.post("http://localhost:8080/api/v1/patients/save", {
       //nic: nic,
       //patientname: patientname,
       // patientaddress: patientaddress,
       // email: email,
        //mobile: mobile
     // });
      //alert("Patient Registration Successful");
      // Clear input fields after successful registration
     // setNIC("");
      //setName("");
      //setAddress("");
      //setEmail("");
      //setMobile("");
      // Reload patient data
     // Load();
    //} catch (error) {
     // alert("Patient Registration Failed");
     // console.error("Error saving patient:", error);
    //}
  //}

 

async function editPatient(patient) {
  setNIC(patient.nic);
  setName(patient.patientname);
  setAddress(patient.patientaddress);
  setEmail(patient.email);
  setMobile(patient.mobile);
  setDoctorname(patient.doctorname);
  setId(patient._id);
}

async function deletePatient(patientid) {
  await axios.delete("http://localhost:8080/api/v1/patients/delete/" + patientid);
  alert("Patient deleted Successfully");
  await loadPatients(); 
}


  async function update(event) {
    event.preventDefault();
    try {
      await axios.put("http://localhost:8080/api/v1/patients/edit/" + patientid, {
        nic: nic,
        patientname: patientname,
        patientaddress: patientaddress,
        email: email,
        mobile: mobile,
        doctorname: doctorname
      });
      alert("Registration Updated Successfully");
      // Clear input fields after successful update
      setId("");
      setNIC("");
      setName("");
      setAddress("");
      setEmail("");
      setMobile("");
      setDoctorname("");
      // Reload patient data
      loadPatients();
    } catch (error) {
      alert("Patient Update Failed");
      console.error("Error updating patient:", error);
    }
  }
  

 //Design

  return (
    <div>
       <h1>Registration Management</h1>
       <div class="container mt-4" >
          <form>

          <div class="form-group">
                <label>NIC</label>
                <input  type="text" class="form-control" id="nic" 
                 value={nic}
                  onChange={(event) =>
                    {
                      setNIC(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Patient Name</label>
                <input  type="text" class="form-control" id="patientname"
                value={patientname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>
              
              <div class="form-group">
                <label>Patient Address</label>
                <input  type="text" class="form-control" id="patientaddress" 
                 value={patientaddress}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Email</label>
                <input  type="text" class="form-control" id="email" 
                 value={email}
                  onChange={(event) =>
                    {
                      setEmail(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" id="mobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Doctor Name</label>
                <input type="text" class="form-control" id="doctorname" 
                  value={doctorname}
                onChange={(event) =>
                  {
                    setDoctorname(event.target.value);      
                  }}
                />
              </div>
              <div>
              <button className="btn btn-warning mt-4" onClick={update}>Update</button> 
              <button className="btn btn-primary mt-4 btn btn-danger" type="button">
              <Link to="/appointment" style={{ color: 'inherit', textDecoration: 'inherit' }}>
    Back To Appointments
  </Link>
  </button>
              </div>   
            </form>
          </div>
          <br/>

          <div className="container mt-4">
                <input type="text" className="form-control mb-3" placeholder="Search by NIC"
                    value={searchQuery} onChange={handleSearchChange} />

                <table className="table table-dark" align="center">
                    <thead>
                        <tr>
                            <th scope="col">NIC</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Patient Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterPatientsByNIC().map(patient => (
                            <tr key={patient._id}>
                                <td>{patient.nic}</td>
                                <td>{patient.patientname}</td>
                                <td>{patient.patientaddress}</td>
                                <td>{patient.email}</td>
                                <td>{patient.mobile}</td>
                                <td>{patient.doctorname}</td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={() => editPatient(patient)}>Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={() => deletePatient(patient._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer /> 
        </div>
    );
}
  export default Patient;
  
  
