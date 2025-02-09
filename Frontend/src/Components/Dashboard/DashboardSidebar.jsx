import axios from 'axios';


function DashboardSidebar() {
  const navigate = useNavigate();

 const handleLogout = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('https://scope-project-backend.onrender.com/dashboard/logout', {}, { withCredentials: true, timeout: 5000 });

    if (response.data.message === 'Logged out successfully') {
     window.location.href = '/login'
    } else {
      console.error('Unexpected logout response:', response.data);
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code outside the range of 2xx
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request data:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
  }
};
  return (
    <div id="sidebar">
      <div className="sidebar-header">
        <a href="/" className="d-flex align-items-center text-decoration-none">
          <img src={'../../../assets/scope Images/scope-india-logo-bird.png'} alt="Scope India Logo" style={{ "backgroundColor": "#051a69" }} className="img-fluid rounded-circle w-25 mr-2" />
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
