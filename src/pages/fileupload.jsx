import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';


function FileUpload() {
  const [file, setFile] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [patientNIC, setPatientNIC] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getAllFiles();
  }, []);

  const getAllFiles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/files/all');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !patientName || !patientNIC) {
      setError('All fields are required');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('patientName', patientName);
    formData.append('patientNIC', patientNIC);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
      getAllFiles(); // Refresh the file list after upload
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file. Please try again.');
    }
  };

 

  const handleDelete = async (fileId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/files/delete/${fileId}`);
      setMessage(response.data);
      getAllFiles(); // Refresh the file list after delete
    } catch (error) {
      console.error('Error deleting file:', error);
      setMessage('Error deleting file. Please try again.');
    }
  };

  const handleSearch = async () => {
    if (!searchQuery) {
      setError('Search query is required');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/files/search/${searchQuery}`);
      setFiles(response.data);
    } catch (error) {
      console.error('Error searching files:', error);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    getAllFiles(); // Clearing search query also refreshes the file list
    setError('');
  };

  return (
    <div className="container">
      
      <h2 className="my-4">File Upload</h2>
      {error && <p className="text-danger">{error}</p>}
      <input className="form-control mb-2" type="file" onChange={handleFileChange} />
      <input className="form-control mb-2" type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
      <input className="form-control mb-2" type="text" placeholder="Patient NIC" value={patientNIC} onChange={(e) => setPatientNIC(e.target.value)} />
      <button className="btn btn-primary mr-2" onClick={handleUpload}>Upload</button> <br/>
      <br/><input className="form-control mb-2" type="text" placeholder="Search by Patient NIC" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className="btn btn-info mr-2" onClick={handleSearch}>Search</button>
      <button className="btn btn-secondary" onClick={handleClear}>Clear</button>
      <p className="mt-3">{message}</p>

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Patient Name</th>
            <th>Patient NIC</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file._id}>
              <td>{file.fileName}</td>
              <td>{file.patientName}</td>
              <td>{file.patientNIC}</td>
              <td>
                
                <button className="btn btn-sm btn-danger ml-2" onClick={() => handleDelete(file._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer /> 
    </div>
  );
}

export default FileUpload;
