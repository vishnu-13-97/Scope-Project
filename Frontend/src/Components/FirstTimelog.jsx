import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FirstTimelog() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    try {
      await axios.post('https://scope-project-backend.onrender.com/student/send-otp', 
        { email }, 
        { withCredentials: true }
      );
      setStep(2);
    } catch (error) {
      if (error.response?.data?.message === 'Email not registered') {
        setEmailError('Email not registered');
      } else {
        console.error('Error:', error);
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setOtpError('');

    try {
      await axios.post('https://scope-project-backend.onrender.com/student/verify-otp', 
        { otp }, 
        { withCredentials: true }
      );
      setStep(3);
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Something went wrong';
      setOtpError(errorMessage);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError('');

    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://scope-project-backend.onrender.com/student/set-password', 
        { newPassword, confirmPassword }, 
        { withCredentials: true }
      );
      setSuccessMessage(response.data.message);
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Something went wrong';
      setPasswordError(errorMessage);
    }
  };

  return (
    <div>
      <h1>OTP Login</h1>
      {step === 1 && (
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          <button type="submit">Send OTP</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
          <button type="submit">Verify OTP</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          <button type="submit">Set Password</button>
        </form>
      )}

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default FirstTimelog;
