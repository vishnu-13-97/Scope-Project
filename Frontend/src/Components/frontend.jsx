import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Frontend = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // To show loading indicator
  const [error, setError] = useState(null); // To capture errors

  useEffect(() => {
    // Fetch the protected data when the component mounts
    axios
      .get('http://localhost:5000/protected', {
        withCredentials: true, // Send cookies with the request (for authentication)
      })
      .then((response) => {
        console.log(response.data); // Log to inspect the structure of the response
        
        // If your data is directly in response.data (not in profiles), you may need to adjust this
        setData(response.data || []); // Fallback to an empty array if response.data is undefined
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
    <div>
      <h2>Fetched Data:</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.username} - {item.email} {/* Adjust fields based on your data */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p> // Message for when no data is available
      )}
    </div>
  );
};

export default Frontend;
