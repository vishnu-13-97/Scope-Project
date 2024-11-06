import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardHome() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get('http://localhost:5000/dashboard', {
        withCredentials: true, 
      })
      .then((response) => {
        console.log("data is ", response.data);
        setData(Array.isArray(response.data) ? response.data : [response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Log error for debugging
        setError(error); // Set error state
        setLoading(false); // Stop loading even if there's an error
      });
  }, []); // Empty dependency array ensures it runs only once (on component mount)

  // Centering styles for loading and error messages
  const centeredMessageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem',
    color: 'red',
  };

  if (loading) return <div style={centeredMessageStyle}>Loading...</div>; // Centered loading message
  if (error) return <div style={centeredMessageStyle}>Error: {error.message}</div>; // Centered error message

  return (
    <>
      <div className="container mt-5 home">
        <div className="row justify-content-center">
          {/* Card Container */}
          <div className="col-lg-8">
            <div className="card shadow-lg p-4">
              <div className="row d-flex align-items-center">
                {/* Profile Information Section */}
                <div className="col-md-12">
                  {/* Render profile details only if data is an array */}
                  {Array.isArray(data) && data.map((item) => (
                    <div key={item._id} className="row mb-4">
                      {/* Profile Photo Section */}
                      <div className="col-md-4 text-center mb-3 mb-md-0">
                        <img
                          src={item.avatar ? `http://localhost:5000/${item.avatar}` : 'https://via.placeholder.com/150'}
                          alt="Profile"
                          className="img-fluid rounded-circle shadow"
                          style={{ width: '150px', height: '150px' }}
                        />
                      </div>

                      {/* Profile Details Section */}
                      <div className="col-md-8">
                        <h1 className="h4 font-weight-bold text-primary mb-3">
                          {`${item.name} ${item.lastName}`} {/* Template literal for full name */}
                        </h1>
                        <p className="h6 mb-2"><strong>Email:</strong> {item.email}</p>
                        <p className="h6 mb-2"><strong>Country:</strong> {item.country}</p>
                        <p className="h6 mb-2">
                          <strong>Course Enrolled:</strong>
                          {Array.isArray(item.enrolledCourses) ? (
                            <ul>
                              {item.enrolledCourses.map((course) => (
                                <li key={course.courseId}>{course.courseName}</li> 
                              ))}
                            </ul>
                          ) : (
                            <span>No courses enrolled</span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
