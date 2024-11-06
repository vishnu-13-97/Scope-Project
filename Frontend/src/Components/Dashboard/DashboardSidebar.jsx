import React from 'react'
import axios from 'axios'

function DashboardSidebar() {
 
  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("Hello");

    try {
      const response = await axios.post('http://localhost:5000/dashboard/logout', {}, { withCredentials: true, timeout: 5000 });
      
      if (response.data.message === 'Logged out successfully') {
        console.log('Logout successful, navigating to login...');
  
         window.location.href = '/login'
      } else {
        console.error('Logout response was unexpected:', response.data);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div id="sidebar">
      <div className="sidebar-header">
      <a href="/" className="d-flex align-items-center text-decoration-none">
  <img src={'../../../assets/scope Images/scope-india-logo-bird.png'} alt="Scope India Logo" style={{"backgroundColor":"#051a69"}} className="img-fluid  rounded-circle w-25 mr-2" />
  <span className="ms-2">Scope India</span>
</a>

      </div>
      <ul className="list-unstyled component m-0 mt-4">
      <li className="active">
          <a href="/dashboard/" className="dashboard">
            <i className="material-icons">account_circle</i>Profile
          </a>
        </li>
        <li className="active">
          <a href="/dashboard/selectcourses" className="dashboard">
            <i className="material-icons">book</i>Select Course
          </a>
        </li>
        <li className="active">
          <a href="/dashboard/changepassword" className="dashboard">
            <i className="material-icons">lock</i>Change Password
          </a>
        </li>
        <li className="active">
          <a href="/dashboard/editProfile" className="dashboard">
            <i className="material-icons">edit</i>Edit Profile
          </a>
        </li>
        <li className="active">
          <a href="/login" className="dashboard" onClick={handleLogout}>
            <i className="material-icons">logout</i>Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;
