import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate('/firstTime');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    try {
       await axios.post('http://localhost:5000/login', {
        email: user.username,
        password: user.password,
        rememberMe:rememberMe.rememberMe
      }, {
        withCredentials: true
      });

      
        navigate('/firstTime');
      
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('Invalid username or password.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="untree_co-hero inner-page overlay" style={{ backgroundImage: "url('assets/scope Images/snowpark-skis-headerbg2.png')" }}>
        <div className="container">
          <div className="col-12">
            <div className="row justify-content-center ">
              <div className="col-lg-6 text-center ">
                <h1 className="mb-4 heading " style={{ paddingTop: "250px", color: "#fbba02", fontFamily: "Viga" }}>LOGIN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section" style={{ backgroundColor: "#051a69" }}>
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-5 mx-auto order-1" data-aos="fade-up" data-aos-delay="200">
              <form onSubmit={handleSubmit} className="form-box" style={{ backgroundColor: "#eeeeee" }}>
                <div className="row">
                  <div className="col-12 mb-3">
                    <input type="email" className="form-control" name="username" value={user.username} onChange={handleChange} required placeholder="Email" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="password" className="form-control"  autocomplete="current-password" name="password" value={user.password} onChange={handleChange} required placeholder="Password" />
                  </div>

                  <div className="col-12">
                  {error && <p style={{ color: 'red' }}>{error}</p>}

                    <input type="submit" value="Login" className="btn btn-primary" />
                    <label className="control control--checkbox">
                      <span className="caption">Keep me logged in</span>
                      <input type="checkbox" id="rememberMe" onChange={(e) => setRememberMe(e.target.checked)}/>
                      <div className="control__indicator"></div>
                    </label>
                  </div>

                  <div className="col-12 mb-3">
                    <div className='row'>
                      <a href="/">Forgot Password</a>
                    </div>
                  
                    <div className='row'>
                      <a href="/firstTime" onClick={handleNavigate}>First time login ?</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
