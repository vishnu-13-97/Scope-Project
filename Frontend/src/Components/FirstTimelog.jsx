import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FirstTimelog() {

  // State to manage form steps
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [email, setEmail] = useState({
    email:"",
    errors:{}
  });
  const [otp, setOtp] = useState({
    otp:"",
    errors:{}
  });
  const [passwords, setPasswords] = useState({
    newPassword:"",
    confirmPassword:""
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Simulate email sending
  const handleEmailSubmit = async(e) => {
    e.preventDefault();
    setEmail(prevEmail=>({...prevEmail,errors:{}}));
   try {
  const response =   await axios.post('https://scope-project-backend.onrender.com/student/send-otp',{
      email:email.email,
    
     }
    ,{
      headers:{
        'Content-Type':'application/json'},
         withCredentials: true
    } )

    if (response.status === 200)setIsEmailSent(true);
    
    
   } catch (error) {
    if (error.response && error.response.data) {
      if(error.response.data.message ==='Email not registered'){
        setEmail((prevEmail)=>({
          ...prevEmail,
          errors:{email:'Email not registered'}
        }))
      }else{

      
      setEmail(prevEmail => ({ ...prevEmail, errors: error.response.data.errors }));
    } }else {
      console.error("Error posting data:", error);
    }
} 

  };

  // Handle OTP submission
  const handleOTPSubmit = async(e) => {
    e.preventDefault();
    setOtp(prevOtp => ({...prevOtp, errors: {}}));

    try {
   
 await axios.post('https://scope-project-backend.onrender.com/student/verify-otp', {
        otp: otp.otp // Ensure this holds the correct value
   console.log("OTP being sent:", otp.otp);

      }, {
        headers: {
          'Content-Type': 'application/json'},
          withCredentials: true
        
      });

      // Log response from server

      setIsOtpVerified(true);

    } catch (error) {
      console.log(error)
      if (error.response && error.response.data) {
     console.log(error.response);
         console.log(error.response.data)
        if (error.response.data.error === 'Invalid OTP') {
           console.log(error.response.data.error)
          setOtp((prevOtp) => ({
            ...prevOtp, errors: { otp: 'Invalid OTP' }
          }));
        } else if (error.response.data.error === 'OTP expired') {
          setOtp((prevOtp) => ({
            ...prevOtp, errors: { otp: 'OTP expired' }
          }));
        }
      } else {
        console.error("Error posting data:", error);
      }
    }
};
 
 


const handlePasswordSubmit = async (e) => {
  e.preventDefault();
  setSuccessMessage('');
  
  // Reset errors before the new submission
  setPasswords(prevPasswords => ({ ...prevPasswords, errors: {} }));
  
  try {
  
    
    
      const response = await axios.post('https://scope-project-backend.onrender.com/student/set-password', {
          newPassword: passwords.newPassword,
          confirmPassword: passwords.confirmPassword,
      }, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true // Ensures cookies/session info is sent
      });
      
      if (response.data.message === 'Password reset successfully') {
          // Update success state and message
          setPasswords(prevPasswords => ({
              ...prevPasswords,
              message: { passwords: 'Password reset successfully' }
          }));
          setSuccessMessage('Password reset successfully');

          // Clear the success message after 5 seconds
          setTimeout(() => {
              setSuccessMessage('');
          }, 5000);

          // Navigate to login page after success
          navigate('/login');
      }
  } catch (error) {
      if (error.response && error.response.data) {

          // Handle specific errors returned from the backend
          if (error.response.data.error === 'Passwords do not match') {
              setPasswords(prevPasswords => ({
                  ...prevPasswords,
                  errors: { passwords: 'Passwords do not match' }
              }));
          } else if (error.response.data.error === 'No email found. Please verify OTP first.') {
              setPasswords(prevPasswords => ({
                  ...prevPasswords,
                  errors: { passwords: 'No email found. Please verify OTP first.' }
              }));
          }
      } else {
          // Log any unexpected errors
          console.error('Error posting data:', error);
      }
  }
};

  return (
    <>
      <div
        className="untree_co-hero inner-page overlay"
        style={{
          backgroundImage:
            "url('assets/scope Images/snowpark-skis-headerbg2.png')",
        }}
      >
        <div className="container">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h1
                  className="mb-4 heading"
                  style={{
                    paddingTop: "250px",
                    color: "#fbba02",
                    fontFamily: "Viga",
                  }}
                >
                  OTP Login
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section" style={{ backgroundColor: "#051a69" }}>
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div
              className="col-lg-5 mx-auto order-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
             {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
              <form
                onSubmit={
                  !isEmailSent
                    ? handleEmailSubmit
                    : !isOtpVerified
                    ? handleOTPSubmit
                    : handlePasswordSubmit
                }
                className="form-box"
                style={{ backgroundColor: "#eeeeee" }}
              >
                <div className="row">
                  {!isEmailSent && (
                    <div className="col-12 mb-3">
                      <label htmlFor="email">Enter Email</label>
                      <input
                        type="email"
                        name='email'
                        className="form-control"
                        placeholder="Enter email"
                        value={email.email}
                        onChange={(e) => setEmail({...email,email:e.target.value})}
                        required
                      />
                      {email.errors?.email && (
                    <div className="error" style={{ color: "red" }}>
                      {email.errors.email}
                    </div>
                  )}

                      <br />
                      <input type="submit" value="Send Otp" />
                    </div>
                  )}

                  {isEmailSent && !isOtpVerified && (
                    <div className="col-12 mb-3">
                      <label htmlFor="otp">Enter OTP</label>
                      <input
                      name='otp'
                        type="text"
                        className="form-control"
                        placeholder="Enter OTP"
                        value={otp.otp}
                        onChange={(e) => setOtp({...otp,otp:e.target.value})}
                        required
                      />
                         {otp.errors?.otp && (
                    <div className="error" style={{ color: "red" }}>
                      {otp.errors.otp}
                    </div>
                  )}
                      <br />
                      <input type="submit" value="Verify OTP" />
                    </div>
                  )}

                  {isOtpVerified && (
                    <>
                      <div className="col-12 mb-3">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                          type="password"
                          name='newPassword'
                          className="form-control"
                          placeholder="Enter new password"
                          value={passwords.newPassword}
                          onChange={(e) => setPasswords({...passwords,newPassword:e.target.value})}
                          required
                        />
                         {passwords.errors?.passwords && (
                    <div className="error" style={{ color: "red" }}>
                      {passwords.errors.passwords}
                    </div>
                  )}
                      </div>

                      <div className="col-12 mb-3">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                          type="password"
                          name='confirmPassword'
                          className="form-control"
                          placeholder="Confirm password"
                          value={passwords.confirmPassword}
                          onChange={(e) => setPasswords({...passwords,confirmPassword:e.target.value})}
                          required
                        />
                         {passwords.errors?.passwords && (
                    <div className="error" style={{ color: "red" }}>
                      {passwords.errors.passwords}
                    </div>
                  )}
                      </div>

                      <div className="col-12">
                        <input
                          type="submit"
                          value="Submit New Password"
                          className="btn btn-primary"
                        />
                      </div>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstTimelog;
