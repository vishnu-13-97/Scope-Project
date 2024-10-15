import React from 'react'
import './dashboard.css'
import { useState } from 'react';

function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false);

// Function to toggle dropdown visibility
const toggleDropdown = () => {
  setShowDropdown(!showDropdown);
};

  return (
    <>
 <div className="site-mobile-menu">
   
  </div>
  {/* <nav className="site-nav ">
      <div className="container">
     
        <button className="btn btn-primary" onClick={toggleDropdown}>
          Profile
        </button>

        
        {showDropdown && (
          <div className="dropdown-menu show" style={{ position: 'absolute', top: '100%', left: '0' }}>
            <a href="/" className="dropdown-item">View Profile</a>
            <a href="/" className="dropdown-item">Profile Settings</a>
            <a href="/" className="dropdown-item">Log Out</a>
          </div>
        )}
      </div>
    </nav> */}
  
  <div className="untree_co-hero inner-page overlay" style={{ backgroundImage: "url('assets/images/img-school-5-min.jpg')" }}>
    <div className="container">
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h1 className="mb-4 heading text-white" style={{ paddingTop: '200px' }} data-aos="fade-up" data-aos-delay="100">Profile Dashboard</h1>
          </div>
        </div>
      </div>
    </div> 
  </div>
  
  <div className="untree_co-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4 mb-4">
          <div className="card">
            <div className="card-header text-center">
              <img src="images/user-profile.jpg" className="rounded-circle" alt="User_Profile_Picture" width="150" height="150"/>
              <h3 className="mt-3">John Doe</h3>
              <p className="text-muted">john.doe@example.com</p>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Enrolled Courses:</strong> 5</li>
                <li className="list-group-item"><strong>Completed Courses:</strong> 3</li>
                <li className="list-group-item"><strong>Membership:</strong> Premium</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-lg-8 mb-4">
          <div className="card">
            <div className="card-header">
              <h4>Recent Activity</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Completed "Advanced CSS and Sass" - <span className="text-muted">2 days ago</span></li>
                <li className="list-group-item">Enrolled in "React and Redux Masterclass" - <span className="text-muted">5 days ago</span></li>
                <li className="list-group-item">Scored 95% in "JavaScript Essentials" - <span className="text-muted">1 week ago</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <a href="/" className="btn btn-primary">View All Courses</a>
        </div>
      </div>
    </div>
  </div>
  
 

  </>
  
  )
}

export default Dashboard