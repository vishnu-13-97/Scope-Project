import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DashboardTopNavBar() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get('http://localhost:5000/dashboard', {
        withCredentials: true, // Send cookies with the request (for authentication)
      })
      .then((response) => {
        // Check the full response structure
        // Ensure the response data is either an array or wrap it into an array
        setData(Array.isArray(response.data) ? response.data : [response.data]);
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Log error for debugging
        setError(error); // Set error state
        setLoading(false); // Stop loading even if there's an error
      });
  }, []); // Empty dependency array ensures it runs only once (on component mount)

  if (loading) return <div>Loading...</div>; // Show loading message while fetching data
  if (error) return <div>Error: {error.message}</div>; // Display error message if there's an error

 

  return (
    <div className="top-navbar">
    <div className="xd-topbar">
      <div className="row">
        {/* Menu Icon */}
        {/* <div className="col-2 col-md-1 col-lg-1 order-2 order-md-1 align-self-center">
          <div className="xp-menubar">
            <span className="material-icons text-white">signal_cellular_alt</span>
          </div>
        </div> */}

        {/* Searchbar */}
        <div className="col-md-5 col-lg-3 order-3 order-md-2">
          {/* <div className="xp-searchbar">
            {/* <form>
              <div className="input-group">
                <input type="search" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                  <button className="btn" type="submit" id="button-addon2">Go</button>
                </div>
              </div>
            </form> */}
          {/* </div> */} 
        </div>

        {/* Profile bar */}
        {/* <div className="col-10 col-md-6 col-lg-8 order-1 order-md-3">
          <div className="xp-profilebar text-right">
            <nav className="navbar p-0">
              <ul className="nav navbar-nav flex-row ml-auto">
                <li className="dropdown nav-item">
                  <a className="nav-link" href="/dashboard" data-toggle="dropdown">
                    <img src={''} style={{ width: '40px', borderRadius: '50%' }} alt="User" />
                    <span className="xp-user-live"></span>
                  </a>
                  <ul className="dropdown-menu small-menu">
                    <li><a href="/dashboard"><span className="material-icons">person_outline</span> Profile</a></li>
                    <li><a href="/"><span className="material-icons">settings</span> Settings</a></li>
                    <li><a href="/"><span className="material-icons">logout</span> Logout</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
      </div>

  
      <div className="xp-breadcrumbbar text-center">
        <h4 className="page-title">Dashboard</h4>
        <ol className="breadcrumb" style={{"marginLeft":"45%"}}>


          <li className="breadcrumb-item">Welcome</li>
          {Array.isArray(data) && data.map((item) => (
          <li className="breadcrumb-item active"key={item._id}  aria-current="page">{item.name}!</li>
          ))}
        </ol>
      </div>
    </div>
  </div>
  )
}

export default DashboardTopNavBar