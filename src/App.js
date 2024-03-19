import React from 'react';
import Patient from './components/patient';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Admin from './pages/admin';
import Appointment from './pages/appointment';
import LabTechnition from './pages/labtechnition.jsx';
import ABOUT from './pages/About.jsx';
import CONTACT from './pages/contact.jsx';
import HOME from './pages/home.jsx';
import PAYMENT from './pages/payment.jsx';
import VIEWPAYMENT from './pages/viewpayment.jsx';
//import Navbar from './components/Navbar';
import TOKEN from './pages/token.jsx';
import DOCTOR from './pages/doctor.jsx';
import ADMINHOME from './pages/adminhome.jsx';
import Login from './pages/login.jsx';
import FILEDOWNLOAD from './pages/filedownload.jsx';
import FILEUPLOAD from './pages/fileupload.jsx';
import Mainhome from './pages/mainhome.jsx';
import DoctorsName from './pages/doctorsname';

function App() {
  return (
    <div className='App'>

      
      <Router>
     

        <Routes>
        <Route exact path="/" element={<Mainhome/>}/>
        </Routes>

        <Routes>
        <Route path="/admin" element={<Admin/>}/>
        </Routes>

        <Routes>
        <Route path="/appointment" element={<Appointment/>}/>
        </Routes>


        <Routes>
          <Route path="/labtechnition" element={<LabTechnition/>}/>
        </Routes>

        <Routes>
          <Route path="/About" element={<ABOUT/>}/>
        </Routes>

        <Routes>
          <Route path="/contact" element={<CONTACT/>}/>
        </Routes>

        <Routes>
          <Route path="/home" element={<HOME/>}/>
        </Routes>

        <Routes>
          <Route path="/payment" element={<PAYMENT/>}/>

        </Routes>
        <Routes>
          <Route path="/viewpayment" element={<VIEWPAYMENT/>}/>
        </Routes>

        <Routes>
          <Route path="/token" element={<TOKEN/>}/>
        </Routes>

        <Routes>
          <Route path="/doctor" element={<DOCTOR/>}/>
        </Routes>

        <Routes>
          <Route path="/adminhome" element={<ADMINHOME/>}/>
        </Routes>

        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>

        <Routes>
          <Route path="/filedownload" element={<FILEDOWNLOAD/>}/>
        </Routes>

        <Routes>
          <Route path="/fileupload" element={<FILEUPLOAD/>}/>
        </Routes>

        <Routes>
          <Route path="/patient" element={<Patient/>}/>
        </Routes>

        <Routes>
          <Route path="/doctorsname" element={<DoctorsName/>}/>
        </Routes>

        





        
        

      </Router>

      
      
    </div>
  );
}

export default App;
