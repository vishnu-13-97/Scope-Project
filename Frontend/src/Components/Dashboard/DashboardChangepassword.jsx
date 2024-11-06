import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardChangepassword() {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errors and success message before submission
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:5000/dashboard/changepassword', {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword
      }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });

      // If the password update is successful
      if (response.status === 200) {
        setSuccessMessage('Password Updated Successfully.');
        setTimeout(() => {
          setSuccessMessage('');
        window.location.href = '/login'
        }, 3000);
          
      
        // Clear form fields after success
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        });
      }

    } catch (error) {
      // Handle specific backend responses
      if (error.response) {
        if (error.response.status === 404) {
          setError('User not found.');
        } else if (error.response.status === 400) {
          const errorMessage = error.response.data.message;
          if (errorMessage === 'Email validation failed') {
            setError('Email validation failed.');
          } else if (errorMessage === 'Incorrect current password') {
            setError('Incorrect current password.');
          } else if (errorMessage === 'New password and confirmation do not match') {
            setError('New password and confirmation do not match.');
          } else {
            setError('An error occurred. Please try again.');
          }
        } else if (error.response.status === 500) {
          setError('Server error. Please try again later.');
        } else {
          setError('An unexpected error occurred. Please try again.');
        }
      } else {
        setError('An error occurred. Please check your connection.');
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card shadow-lg mb-3 p-4 h-50 w-50 mx-auto">
          <h2 className="h5 mb-4 text-center text-primary">Change Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Update Password</button>
            </div>
            
            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

          </form>
        </div>
      </div>
    </>
  );
}

export default DashboardChangepassword;
