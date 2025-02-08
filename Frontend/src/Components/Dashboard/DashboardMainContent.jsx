import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DashboardMainContent() {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [enrollmentSuccess, setEnrollmentSuccess] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('https://scope-project-backend.onrender.com/dashboard/courses', {
                    withCredentials: true,
                });
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
                'https://scope-project-backend.onrender.com/dashboard/add-course',
                { courseId },
                { withCredentials: true }
            );
            setEnrollmentSuccess(`Successfully enrolled in ${response.data.courseName}`);

            // Optionally, refresh courses list after enrollment
            setTimeout(() => setEnrollmentSuccess(null), 3000); // Reset success message after 3 sec
        } catch (error) {
            console.error('Error enrolling in course:', error);
            setEnrollmentSuccess('Failed to enroll in course');
            setTimeout(() => setEnrollmentSuccess(null), 3000); // Reset error message after 3 sec
        }
    };

    if (loading) return <p className='text-center'>Loading courses...</p>;
    if (error) return <p className='text-center text-danger'>{error}</p>;

    return (
        <div className="main-content">
            <div className="row">
                <div className="col-md-12">
                    <div className="table-wrapper">
                        {/* Table Title */}
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
                                    <h2 className="ml-lg-2">Select a Course</h2>
                                </div>
                            </div>
                        </div>

                        {/* Enrollment Success Message */}
                        {enrollmentSuccess && (
                            <div className="alert alert-success text-center">{enrollmentSuccess}</div>
                        )}

                        {/* Table */}
                        <table className="table table-striped table-hover">
                            <thead className="bg-light">
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
                                        <td>{course.courseName}</td>
                                        <td>{course.courseFee}</td>
                                        <td>{course.duration}</td>
                                        <td>
                                            <button 
                                                className="btn btn-primary"
                                                onClick={() => handleEnroll(course._id)}
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
