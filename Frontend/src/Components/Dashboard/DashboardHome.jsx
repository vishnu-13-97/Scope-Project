import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardHome() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get('https://scope-project-backend.onrender.com/dashboard', {
        withCredentials: true, // Use cookies for authentication
      })
      .then((response) => {
        setData(Array.isArray(response.data) ? response.data : [response.data]); // Ensure data is an array
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []); // Dependency array ensures the request runs once on mount

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error.message}</div>;

  return (
    <div className="container mt-5 home">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg p-4">
            <div className="row d-flex align-items-center">
              <div className="col-md-12">
                {data.map((item) => (
                  <div key={item._id} className="row mb-4">
                    <div className="col-md-4 text-center mb-3 mb-md-0">
                      <img
                        src={item.avatar ? `https://scope-project-backend.onrender.com/${item.avatar}` : 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="img-fluid rounded-circle shadow"
                        style={{ width: '150px', height: '150px' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <h1 className="h4 font-weight-bold text-primary mb-3">
                        {`${item.name} ${item.lastName}`}
                      </h1>
                      <p className="h6 mb-2"><strong>Email:</strong> {item.email}</p>
                      <p className="h6 mb-2"><strong>Country:</strong> {item.country}</p>
                      <p className="h6 mb-2">
                        <strong>Course Enrolled:</strong>
                        {item.enrolledCourses?.length > 0 ? (
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
  );
}

export default DashboardHome;
