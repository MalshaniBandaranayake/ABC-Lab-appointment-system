
import React from 'react'
import AdminNavbar from '../components/AdminNavbar';
import './adminhome.css'; // Make sure this path is correct
import Footer from '../components/Footer';


function adminhome() {
  return (
    <div>
      <AdminNavbar/>
      <h1>Welecome to admin page</h1>
      
      <Footer /> 

    </div>
  )
}

export default adminhome
