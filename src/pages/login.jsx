import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
//import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the entered credentials match the hardcoded ones for admin
    if (username === 'admin' && password === 'admin123') {
      // Redirect to admin dashboard
      // replace the link with the actual route to your admin home page
      window.location.href = '/adminhome';
    } 
    // Check if the entered credentials match the hardcoded ones for doctors
    else if (username === 'doctor' && password === 'doctor456') {
      // Redirect to doctor dashboard
      // replace the link with the actual route to your doctor home page
      window.location.href = '/doctor';
    } 

    else if (username === 'labtech' && password === 'labtech789') {
      // Redirect to lab technician dashboard
      // replace the link with the actual route to your lab technician home page
      window.location.href = '/labtechnition';
    } 
    // Handle invalid credentials
    else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5"> {/* Add Bootstrap container class */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group"> {/* Add Bootstrap form-group class */}
          <label>Username:</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group"> {/* Add Bootstrap form-group class */}
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button> {/* Add Bootstrap button classes */}
        {error && <div className="text-danger">{error}</div>}
      </form>

      <Footer /> 
    </div>
  );
}

export default Login;
