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
  Kerala: ["Trivandrum", "Kollam", "Pathanamthitta", "Alappuzha"],
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
    name: '', lastName: '', dateOfBirth: '', gender: '', email: '', phone: '', country: '', state: '', city: '', hobbies: [], avatar: null
  });
  const [previewAvatar, setPreviewAvatar] = useState('');
  const [states, setStates] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    axios.get('https://scope-project-backend.onrender.com/dashboard/edit-profile', {
      withCredentials: true
    })
    .then((response) => {
      const data = response.data;
      const formattedDate = data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "";
      setFormData({ ...data, dateOfBirth: formattedDate });
      if (data.avatar) {
        setPreviewAvatar(`https://scope-project-backend.onrender.com/${data.avatar}`);
      }
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
    setFormData(prev => ({ ...prev, [name]: value }));
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
    setFormData({ ...formData, avatar: file });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewAvatar(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    const updatedHobbies = checked ? [...formData.hobbies, value] : formData.hobbies.filter(hobby => hobby !== value);
    setFormData({ ...formData, hobbies: updatedHobbies });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formData.hobbies.forEach(hobby => formDataToSend.append('hobbies[]', hobby));
    Object.keys(formData).forEach((key) => {
      if (key !== "hobbies") {
        formDataToSend.append(key, formData[key]);
      }
    });
    try {
      await axios.put("https://scope-project-backend.onrender.com/dashboard/update-profile", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      setSuccess("Profile updated successfully!");
      setTimeout(() => setSuccess(""), 3000);
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
