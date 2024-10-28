import React, { useState } from "react";
import axios from "axios";


const hobbiesList = ['Reading','Gaming','Travelling','Cooking','Gardening'];
 
const countries = [
  {
    name: "India",
    states: [
      "Kerala",
      "Tamilnadu",
     "Assam",
    ],
  },
  { name: "Canada", states: ["Ontario", "Quebec"] },
  { name: "United Kingdom", states: ["England", "Scotland"] },
];

const cities = {
  Kerala: [
    "Trivandrum",
    "Kollam",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Ernakulam",
    "Trissur",
    "Palakkad",
    "Malappuram",
    "Kozhikkode",
    "Kannur",
    "Kasargode",
    "Wayanad",
    "Idukki",
  ],
  Tamilnadu: ["Chennai", "Coimbatore", "Madurai",'Kannyakumari'],

  Assam: ["Guwahati", "Dibrugarh", "Nagaon"],
  Ontario: ["Toronto", "Brampton", "Ottawa"],
  Quebec: ["Quebec City", "Montreal", "Lavel"],
  England: ["London", "Nottingham", "Liverpool"],
  Scotland: ["Edinburgh", "Stirling", "Perth"],
};
 
function Register() {

  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    firstname:"",
    lastName:"",
    dateOfBirth:"",
    gender:"",
    email:"",
    phone:"",
    country:"",
    state:"",
    city:"",
    hobbiesList :[],
    avatar:null,
    errors: {},
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevFormData) => ({ ...prevFormData, errors: {} }));
    setSuccessMessage('');
    const data = new FormData();
    data.append('firstname', formData.firstname);
    data.append('lastName', formData.lastName);
    data.append('dateOfBirth', formData.dateOfBirth);
    data.append('gender', formData.gender);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('country', formData.country);
    data.append('state', formData.state);
    data.append('city', formData.city);
;
    if (formData.avatar) {
      data.append('avatar', formData.avatar);
    }
    formData.hobbiesList.forEach(hobby => {
      data.append('hobbiesList[]', hobby); // Use 'hobbiesList[]' to indicate multiple values
  });
  
    try {
      await axios.post("http://localhost:5000/register", data, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      setSuccessMessage('Registration successful! Please check your email.');
       setTimeout(() => {
        setSuccessMessage('');
      }, 5000);


      setFormData({
        firstname: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        hobbiesList: [],
        avatar: null,
        avatarPreview: null, 
        errors: {},
      });
    } catch (error) {
      if (error.response && error.response.data) {
        // Handle "email already registered" error
        if (error.response.data.message === "Email already registered") {
          setFormData((prevFormData) => ({
            ...prevFormData,
            errors: { email: "Email already registered" },
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            errors: error.response.data.errors,
          }));
        }
      } else {
        console.error("Error posting data", error);
      }
    }
  };
  
  return (
    <>
      <div
        className="untree_co-hero inner-page overlay"
        style={{
          backgroundImage:
            "url('assets/scope Images/snowpark-skis-headerbg2.png')",
          // backgroundPosition:"center",
          // backgroundSize:"contain",
          backgroundAttachment: "fixed",
          paddingTop: "250px",
          paddingBottom: "0px",
          backgroundColor: "#051a69",
          height: "500px",
        }}
      >
        <div className="container">
          <div className="col-12">
            <div className="row justify-content-center">
              <div
                className="col-lg-6 text-center"
                style={{ marginTop: "-50px" }}
              >
                <h1
                  className="mb-4 heading"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    color: "#fbba02",
                    fontSize: "55px",
                    lineHeight: "65px",
                    fontWeight: "500",
                    fontFamily: "Viga",
                  }}
                >
                  Registration
                </h1>
                <h2
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    fontSize: "25px",
                    fontWeight: "400",
                    fontFamily: "Viga",
                  }}
                >
                  It's just a matter of 80 days to an IT job!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section" style={{ backgroundColor: "#021b5b" }}>
      <div className="container">
  <div
    className="row justify-content-center"
    style={{
      backgroundImage: "url('assets/scope Images/si-call-back-bg.jpg')",
    }}
  >
    <div
      className="col-lg-11 col-md-12 mx-auto order-1 d-flex"
      data-aos="fade-up"
      data-aos-delay="100"
      style={{ alignItems: "stretch" }}
    >
      <div className="register_container">
        <div className="register_form">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="row">
              <div
                className="col-lg-6 col-md-12 register_form_col1"
                style={{ height: "600px" }}
              >
                <div className="row m-3">
                  <label htmlFor="firstname" id="ioi" className="mb-3">
                    First Name :
                  </label>
                  <input
                    type="text"
                    className="firstname p-1 w-100"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="row m-3">
                  <label htmlFor="lastname" className="mb-3">
                    Last Name :
                  </label>
                  <input
                    type="text"
                    className="lastname p-1 w-100"
                    id="lastname"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="row m-3">
                  <label htmlFor="dob" className="mb-3">
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    className="dob p-1 w-100"
                    id="dob"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="row m-3">
                  <label className="mb-3 w-100">Gender</label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleInputChange}
                    />{" "}
                    Male
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleInputChange}
                    />{" "}
                    Female
                  </label>
                </div>

                <div className="row m-3">
                  <label htmlFor="email" className="mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="email p-1 w-100"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formData.errors?.email && (
                    <div className="error" style={{ color: "red" }}>
                      {formData.errors.email}
                    </div>
                  )}
                </div>

                <div className="row m-3">
                  <label htmlFor="phone" className="mb-3">
                    Phone
                  </label>
                  <input
                    type="phone"
                    className="phone p-1 w-100"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 register_form_col2">
                <div className="row m-3 ">
                  <label htmlFor="country">Country:</label>
                  <select
                    className="w-100"
                    style={{ height: "38px", marginTop: "8px" }}
                    name="country"
                    id="country"
                    value={formData.country || ""}
                    onChange={(e) => {
                      setFormData((form) => ({
                        ...form,
                        country: e.target.value,
                      }));
                    }}
                  >
                    <option value="">Select a country</option>
                    {countries.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>

                  {formData.errors?.country && (
                    <div className="error">{formData.errors?.country}</div>
                  )}
                </div>

                <div className="row m-3">
                  <label htmlFor="state">State:</label>
                  <select
                    className="w-100"
                    style={{ height: "38px", marginTop: "8px" }}
                    id="state"
                    name="state"
                    value={formData.state || ""}
                    onChange={(e) => {
                      const selectedState = e.target.value;
                      setFormData((form) => ({
                        ...form,
                        state: selectedState,
                        city: "",
                      }));
                    }}
                  >
                    <option value="">Select a state</option>
                    {formData.country &&
                      countries
                        .find((c) => c.name === formData.country)
                        ?.states.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                  </select>

                  {formData.errors?.state && (
                    <div className="error">{formData.errors?.state}</div>
                  )}
                </div>

                <div className="row m-3">
                  <label htmlFor="city">City:</label>
                  <select
                    className="w-100"
                    style={{ height: "38px", marginTop: "8px" }}
                    id="city"
                    name="city"
                    value={formData.city || ""}
                    onChange={(e) => {
                      const selectedCity = e.target.value;
                      setFormData((form) => ({
                        ...form,
                        city: selectedCity,
                      }));
                    }}
                  >
                    <option value="">Select a city</option>
                    {formData.state &&
                      cities[formData.state]?.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                  </select>

                  {formData.errors?.city && (
                    <div className="error">{formData.errors?.city}</div>
                  )}
                </div>

                <div className="row m-3">
                  <label htmlFor="hobbiesList" className="mb-3 w-100">
                    Hobbies:
                  </label>
                  {hobbiesList.map((hobby) => (
                    <div key={hobby} style={{ lineHeight: "-10px" }}>
                      <input
                        type="checkbox"
                        className="hobbies p-1"
                        name="hobbiesList"
                        value={hobby}
                        checked={formData.hobbiesList.includes(hobby)}
                        onChange={(e) => {
                          const selectedHobby = e.target.value;
                          setFormData((prev) => {
                            if (prev.hobbiesList.includes(selectedHobby)) {
                              return {
                                ...prev,
                                hobbiesList: prev.hobbiesList.filter(
                                  (h) => h !== selectedHobby
                                ),
                              };
                            }
                            return {
                              ...prev,
                              hobbiesList: [...prev.hobbiesList, selectedHobby],
                            };
                          });
                        }}
                      />
                      <label>{hobby}</label>
                    </div>
                  ))}
                </div>

                <div className="row m-3">
                  <label htmlFor="avatar" className="mb-3">
                    Avatar
                  </label>
                  <input
                    type="file"
                    className="avatar p-1"
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file && file instanceof Blob) {
                        setFormData({
                          ...formData,
                          avatar: file,
                          avatarPreview: URL.createObjectURL(file),
                        });
                      } else {
                        setFormData({
                          ...formData,
                          avatar: null,
                          avatarPreview: null,
                        });
                      }
                    }}
                  />
                  {formData.avatarPreview && (
                    <>
                      <img
                        src={formData.avatarPreview}
                        alt="Avatar Preview"
                        style={{
                          width: "100px",
                          height: "100px",
                          marginTop: "10px",
                        }}
                      />
                      <br />
                    </>
                  )}
                </div>

                <div className="row m-3">
                  <input type="submit" className="bg-primary w-100" />
                </div>
                <div className="row m-3">
                  <p>Already registered?</p>
                  <a href="/login">Login</a>
                </div>
              </div>
            </div>
          </form>

          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="section mcb-section dark" style={{ paddingTop:"30px", marginTop:"30px",paddingBottom: '100px', backgroundColor: '#051a69' }}>
      {/* Address details */}
      <div className="container">
        <h2 className='text-white'>Locations</h2>
        <div className="row locations">
          
          {/* Technopark TVM Location */}
          <div className="col-md-6">
            <div className="thumbnail" style={{ backgroundColor: '#041a6b',margin:"20px",color:"white", padding: '30px',border:"1px solid white" }}>
              <ul>
                <li><h3>Technopark TVM, Kerala</h3></li>
                <li className="address" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-location"></i></span>
                  <span className="address_wrapper">Phase 1, Main Gate, Diamond Arcade, Near Technopark, Trivandrum</span>
                </li>
                <li className="phone" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-phone "></i></span>
                  <a className="footer_links text-white"  href="tel:+919745936073">9745936073</a>
                </li>
                <li className="mail" style={{ margin: '10px' }}>
                  <span className="icon"><i class="fa-regular fa-envelope"></i></span>
                  <a className="footer_links text-white"  href="mailto:technopark@scopeindia.org">technopark@scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-link"></i></span>
                  <a className="footer_links text-white" href="https://scopeindia.org/" title="A trusted IT Partner">www.scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-map"></i></span>
                  <a className="footer_links text-white" href="https://maps.app.goo.gl/hbG8wSiDcW2w9kyH9" target="blank">Location Route Map</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Thampanoor TVM Location */}
          <div className="col-md-6">
            <div className="thumbnail" style={{ backgroundColor: '#041a6b', padding: '30px' ,color:"white", margin:"20px",border:"1px solid white"  }}>
              <ul>
                <li><h3>Thampanoor TVM, Kerala</h3></li>
                <li className="address" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-location"></i></span>
                  <span className="address_wrapper">TC 25/1403/3, Athens Plaza, SS Kovil Road, Thampanoor, Trivandrum, Kerala 695001</span>
                </li>
                <li className="phone" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-phone"></i></span>
                  <a className="footer_links text-white" href="tel:+919745936073">9745936073</a>
                </li>
                <li className="mail" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-mail"></i></span>
                  <a className="footer_links text-white" href="mailto:info@scopeindia.org">info@scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-link"></i></span>
                  <a className="footer_links text-white" href="https://scopeindia.org/" title="A trusted IT Partner">www.scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-map"></i></span>
                  <a className="footer_links text-white" href="https://g.page/r/CXbW6SZGeJPfEAE" target="blank">Location Route Map</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Kochi, Kerala Location */}
          <div className="col-md-6">
            <div className="thumbnail" style={{ backgroundColor: '#041a6b',margin:"20px", color:"white",  padding: '30px' ,border:"1px solid white"  }}>
              <ul>
                <li><h3>Kochi, Kerala</h3></li>
                <li className="address" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-location"></i></span>
                  <span className="address_wrapper">SCOPE INDIA, Vasanth Nagar Rd, near JLN Metro Station, Kaloor, Kochi, Kerala 682025</span>
                </li>
                <li className="phone" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-phone"></i></span>
                  <a className="footer_links text-white" href="tel:+917592939481">7592939481</a>
                </li>
                <li className="mail" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-mail"></i></span>
                  <a className="footer_links text-white" href="mailto:kochi@scopeindia.org">kochi@scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-link"></i></span>
                  <a className="footer_links text-white" href="https://scopeindia.org/" title="A trusted IT Partner">www.scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-map"></i></span>
                  <a className="footer_links text-white" href="https://g.page/r/CWv07KhFfP7dEAE" target="blank">Location Route Map</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Nagercoil, Tamil Nadu Location */}
          <div className="col-md-6">
            <div className="thumbnail" style={{ backgroundColor: '#041a6b',margin:"20px",color:"white", padding: '30px' ,border:"1px solid white" }}>
              <ul>
                <li><h3>Nagercoil, Tamil Nadu</h3></li>
                <li className="address" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-location"></i></span>
                  <span className="address_wrapper">SCOPE INDIA, Near WCC College, Palace Rd, Nagercoil, Tamil Nadu 629001</span>
                </li>
                <li className="phone" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-phone"></i></span>
                  <a className="footer_links text-white" href="tel:+918075536185">8075536185</a>
                </li>
                <li className="mail" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-mail"></i></span>
                  <a className="footer_links text-white" href="mailto:ngl@scopeindia.org">ngl@scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-link"></i></span>
                  <a className="footer_links text-white" href="https://scopeindia.org/" title="A trusted IT Partner">www.scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-map"></i></span>
                  <a className="footer_links text-white" href="https://goo.gl/maps/fVjnoN7GzcU1zson7" target="blank">Location Route Map</a>
                </li>
              </ul>
            </div>
          </div>

           <div className="col-md-3"></div>
           
          {/* Another Nagercoil Location */}
          <div className="col-md-6">
            <div className="thumbnail" style={{ backgroundColor: '#041a6b',margin:"20px",color:"white",  padding: '30px' ,border:"1px solid white" }}>
              <ul>
                <li><h3>Nagercoil, Tamil Nadu</h3></li>
                <li className="address" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-location"></i></span>
                  <span className="address_wrapper">SCOPE INDIA, Pharma Street, 5/2 Ward 28, Distillery Road, Putheri Nagercoil (Near WCC Jn)</span>
                </li>
                <li className="phone" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-phone"></i></span>
                  <a className="footer_links text-white" href="tel:+918075536185">8075536185</a>
                </li>
                <li className="mail" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-mail"></i></span>
                  <a className="footer_links text-white" href="mailto:ngl@scopeindia.org">ngl@scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-link"></i></span>
                  <a className="footer_links text-white" href="https://scopeindia.org/" title="A trusted IT Partner">www.scopeindia.org</a>
                </li>
                <li className="www" style={{ margin: '10px' }}>
                  <span className="icon"><i className="icon-map"></i></span>
                  <a className="footer_links text-white" href="https://maps.app.goo.gl/Lsd7LzALy15PpWhX7?g_st=iw" target="blank">Location Route Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img style={{ width: "100%", height: "100px" }} src="assets/scope Images/snowpark-home-slide-decoration-bottomm.png" alt="Decoration" />
      </div>
    </>
  );
}

export default Register;