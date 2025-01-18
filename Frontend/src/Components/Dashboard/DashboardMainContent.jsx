import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DashboardMainContent() {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);     
    const [loading, setLoading] = useState(true);
    const [enrollmentSuccess, setEnrollmentSuccess] = useState(null); // To track enrollment success message

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                 const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage

  if (!token) {
    console.error('Token not found');
    return; 
  }

                const response = await axios.get('https://scope-project-backend.onrender.com', {
  withCredentials: true,
  headers: { 'Authorization': `Bearer ${token}` },
})

                setCourses(response.data); 
            } catch (err) {
                setError('Error fetching courses');
                console.error(err);
            } finally {
                setLoading(false); 
            }
        };

        fetchCourses();
    }, []); 

    const handleEnroll = async (courseId) => {
        try {
            const response = await axios.post(
                'https://scope-project-backend.onrender.com',
                { courseId },
                { withCredentials: true } // Include credentials for authentication
            );
            setEnrollmentSuccess(`Successfully enrolled in ${response.data.courseName}`);
        
        } catch (error) {
            console.error('Error enrolling in course:', error);
            setEnrollmentSuccess('Failed to enroll in course');
        }
    };

    if (loading) {
        return <p className='text-center'>Loading courses...</p>;
    }

    if (error) {
        return <p className='text-center'>{error}</p>;
    }

    return (
        <div className="main-content">
            <div className="row">
                <div className="col-md-12">
                    <div className="table-wrapper">

                        {/* Table title */}
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
                                    <h2 className="ml-lg-2">Select a Course</h2>
                                </div>
                            </div>
                        </div>

                        {/* Enrollment Success Message */}
                        {enrollmentSuccess && (
                            <div className="alert alert-success">
                                {enrollmentSuccess}
                            </div>
                        )}

                        {/* Table */}
                        <table className="table table-striped table-hover">
                            <thead style={{ backgroundColor: 'smokewhite' }}>
                                <tr>
                                    <th style={{ fontSize: '20px' }}>Course Name</th>
                                    <th style={{ fontSize: '20px' }}>Course Fee</th>
                                    <th style={{ fontSize: '20px' }}>Duration</th>
                                    <th style={{ fontSize: '20px' }}>Enroll</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course) => (
                                    <tr key={course._id}>
                                        <td>{course.CourseName}</td>
                                        <td>{course.CourseFee}</td>
                                        <td>{course.Duration}</td>
                                        <td>
                                            <button 
                                                className="btn btn-primary"
                                                onClick={() => handleEnroll(course._id)} // Call enroll function on click
                                            >
                                                Enroll
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardMainContent;
