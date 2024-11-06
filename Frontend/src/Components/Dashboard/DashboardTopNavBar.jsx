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
        <div className="col-md-5 col-lg-3 order-3 order-md-2">
        
        </div>

       
      </div>

  
      <div className="xp-breadcrumbbar text-center">
        <h4 className="page-title">Dashboard</h4>
        <ol className="breadcrumb" style={{"marginLeft":"45%"}}>


          <li className="breadcrumb-item">Welcome</li>
          {Array.isArray(data) && data.map((item) => (
          <li className="breadcrumb-item active"key={item._id}  aria-current="page" style={{color:"whitesmoke"}}>{item.name}!</li>
          ))}
        </ol>
      </div>
    </div>
  </div>
  )
}

export default DashboardTopNavBar