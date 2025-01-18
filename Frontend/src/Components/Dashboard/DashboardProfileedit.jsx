import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const hobbiesList = ['Reading', 'Gaming', 'Travelling', 'Cooking', 'Gardening'];

const countriesData = [
  { name: "India", states: ["Kerala", "Tamilnadu", "Assam"] },
  { name: "Canada", states: ["Ontario", "Quebec"] },
  { name: "United Kingdom", states: ["England", "Scotland"] }
];

const cities = {
  Kerala: ["Trivandrum", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Ernakulam", "Trissur", "Palakkad", "Malappuram", "Kozhikkode", "Kannur", "Kasargode", "Wayanad", "Idukki"],
  Tamilnadu: ["Chennai", "Coimbatore", "Madurai", "Kannyakumari"],
  Assam: ["Guwahati", "Dibrugarh", "Nagaon"],
  Ontario: ["Toronto", "Brampton", "Ottawa"],
  Quebec: ["Quebec City", "Montreal", "Laval"],
  England: ["London", "Nottingham", "Liverpool"],
  Scotland: ["Edinburgh", "Stirling", "Perth"]
};

function DashboardProfileEdit() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    hobbies: [],
    avatar: null
  });
  const [previewAvatar, setPreviewAvatar] = useState('');
  const [states, setStates] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
     const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage

  if (!token) {
    console.error('Token not found');
    return; // Exit if no token
  }

   axios.get('https://scope-project-backend.onrender.com/dashboard/edit-profile', {
  withCredentials: true,
  headers: { 'Authorization': `Bearer ${token}` },
})

      .then((response) => {
        const data = response.data;
       
        
        
        const formattedDate = data.dateOfBirth ? data.dateOfBirth.split("T")[0] : ""; // Convert date to "yyyy-MM-dd"
        setFormData({
          ...data,
          dateOfBirth: formattedDate,
        });


        if (data.avatar) {
          setPreviewAvatar(`https://scope-project-backend.onrender.com/${data.avatar}`);
        }
        // Set the states and cities based on fetched country and state
        if (data.country) {
          const selectedCountry = countriesData.find(c => c.name === data.country);
          setStates(selectedCountry ? selectedCountry.states : []);
        }

        if (data.state) {
          setCitiesList(cities[data.state] || []);
        }
      })
      .catch(err => {
        setError('Error fetching data');
        console.error(err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "country") {
      const selectedCountry = countriesData.find(c => c.name === value);
      setStates(selectedCountry ? selectedCountry.states : []);
      setCitiesList([]);
      setFormData(prev => ({ ...prev, state: '', city: '' }));
    } else if (name === "state") {
      setCitiesList(cities[value] || []);
      setFormData(prev => ({ ...prev, city: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      avatar: file
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    const updatedHobbies = checked
      ? [...formData.hobbies, value]
      : formData.hobbies.filter((hobby) => hobby !== value);
    
    setFormData({ ...formData, hobbies: updatedHobbies });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
  
    // Append each hobby individually
    formData.hobbies.forEach(hobby => formDataToSend.append('hobbies[]', hobby));
  
    // Append other form data fields
    Object.keys(formData).forEach((key) => {
      if (key !== "hobbies") {
        formDataToSend.append(key, formData[key]);
      }
    });
  
    try {
       const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage

  if (!token) {
    console.error('Token not found');
    return; // Exit if no token
  }

      await axios.put("https://scope-project-backend.onrender.com/dashboard/update-profile", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`
        },
        withCredentials: true,
      });
   
    
      
      setSuccess("Profile updated successfully!");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
  
      navigate("/dashboard");
    } catch (error) {
      setError("Error updating profile");
      console.error("Update Profile Error:", error);
    }
  };
  
  return (
    <div className="container mt-5">
     
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg p-4 mb-4">
            <h2 className="h5 mb-4 text-center text-primary">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group text-center mb-4">
                <img src={previewAvatar} alt="Avatar Preview" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                <div>
                  <label htmlFor="avatar" className="btn btn-outline-secondary btn-sm">Change Avatar</label>
                  <input type="file" className="form-control-file d-none" id="avatar" accept="image/*" onChange={handleFileChange} />
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="name">First Name:</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange}   readOnly  required />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone:</label>
                <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="dateOfBirth">Date Of Birth:</label>
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
              </div>

              <div className="form-group mb-3">
                <label>Gender:</label>
                <div>
                  <label>
                    <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleInputChange} required /> Male
                  </label>
                  <label className="ml-3">
                    <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleInputChange} required /> Female
                  </label>
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="country">Country:</label>
                <select className="form-control" id="country" name="country" value={formData.country} onChange={handleInputChange} required>
                  <option value="">Select a country</option>
                  {countriesData.map((country, index) => (
                    <option key={index} value={country.name}>{country.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="state">State:</label>
                <select className="form-control" id="state" name="state" value={formData.state} onChange={handleInputChange} required>
                  <option value="">Select a state</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="city">City:</label>
                <select className="form-control" id="city" name="city" value={formData.city} onChange={handleInputChange} required>
                  <option value="">Select a city</option>
                  {citiesList.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>


              <div className="form-group mb-3">
    <label>Hobbies:</label>
    <div>
      {hobbiesList.map((hobby, index) => (
        <label key={index} className="mr-3">
          <input
            type="checkbox"
            name="hobbies"
            value={hobby}
            checked={formData.hobbies.includes(hobby)}
            onChange={handleHobbyChange}
          /> {hobby}
        </label>
      ))}
    </div>
  </div>

              <button type="submit" className="btn btn-primary btn-block">Update Profile</button>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardProfileEdit;
