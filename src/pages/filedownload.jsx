import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

function FileDownload() {
  
  const [patientNIC, setPatientNic] = useState('');
  const [fileData, setFileData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleDownload = async (fileId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/files/download/${fileId}`, {
        responseType: 'blob'
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      setFileData(URL.createObjectURL(blob));
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/files/search/${patientNIC}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching files:', error);
    }
  };

  return (
    <div className="container">
      
      <h2 className="my-4">Search Patient Reports</h2>
      <input className="form-control mb-2" type="text" placeholder="Patient NIC" value={patientNIC} onChange={(e) => setPatientNic(e.target.value)} />
      <button className="btn btn-primary mb-2" onClick={handleSearch}>Search</button>

      {/* Display search results */}
      <div>
        <h3>Search Results:</h3>
        <table className="table table-dark" align="center">
          <thead>
            <tr>
              <th>File Id</th>
              <th>Patient NIC</th>
              <th>Patient Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((file) => (
              <tr key={file._id}>
                <td>{file._id}</td>
                <td>{file.patientNIC}</td>
                <td>{file.patientName}</td>
                <td>
                  
                  <a className="btn btn-success" href={`http://localhost:8080/api/v1/files/download/${file._id}`} download>Download File</a>
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

export default FileDownload;
