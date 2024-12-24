import React, { useState } from 'react'
import axios from 'axios';
function Courses() {
  const [successMessage, setSuccessMessage] = useState('');
  const courseData = [
    { title: "Java Full Stack Internship", url: "#" },
    { title: "Python Full Stack Internship", url: "#" },
    { title: "PHP Full Stack Internship", url: "#" },
    { title: ".Net Core Full Stack Internship", url: "#" },
    { title: "MERN Full Stack Internship", url: "#" },
    { title: "MEAN Full Stack Internship", url: "#" },
    { title: "Mobile App Course in Flutter", url: "#" },
    { title: "Mobile App Course in IONIC", url: "#" },
    { title: "Website Designing Course", url: "#" },
    { title: "UI/UX Designing", url: "#" },
  ];
  const courseData2=[
    {title:"Networking, Server, & Cloud Administration",url:"#"},
    {title:"AWS Architect Associate",url:"#"},
    {title:"Ms Azure Cloud Administrator",url:"#"},
    {title:"Red Hat Certified System Administrator (RHCSA)",url:"#"},
    {title:"Red Hat Certified Engineer (RHCE)",url:"#"},
    {title:"DevOps Engineer",url:"#"},
    {title:"Cisco Certified Network Associate(CCNA)",url:"#"},

  ]
  const courseData3=[
    {title:"Data Science & AI",url:"#"},
    {title:"Data Analytics",url:"#"},
    {title:"Digital Marketing Expert",url:"#"},
    {title:"Microsoft Power BI",url:"#"}
]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevFormData) => ({ ...prevFormData, errors: {} }));
    setSuccessMessage("");
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email); 
    data.append('subject', formData.subject);
    data.append('message', formData.message); 
  
    try {
     const response = await axios.post('https://scope-project-backend.onrender.com/student/contact', data, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
        
  
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        errors: {}
      });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data && error.response.data.errors) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            errors: error.response.data.errors
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            errors: { message: 'An unexpected error occurred. Please try again.' }
          }));
        }
      } else if (error.request) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          errors: { message: 'No response from the server. Please try again later.' }
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          errors: { message: 'An error occurred while sending the request. Please try again.' }
        }));
      }
    }
  };
  return (
 <>
   <div className="overlay img-fluid" style={{
        backgroundImage: "url('assets/scope Images/snowpark-skis-headerbg2.png')",
        paddingTop: "200px",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center display-4">
                <div className="col-lg-12  text-center" style={{ marginTop: "-20px" }}>
                  <h1 className="mb-4 heading" data-aos="fade-up" data-aos-delay="100" style={{ color: "#fbba02", fontFamily: "sanserif", fontSize: "55px", fontWeight: "100" }}>
                   <em>SCOPE </em> INDIA 
                  </h1>
                  <h2 className='mb-4 heading text-white' data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: "Viga", fontSize: "35px" }}>
                  Center for Software, Networking, & Cloud Education
                  </h2>
                  <h6 style={{"color":"white","font-size":"20px","fontFamily":"viga","font-weight":"400","letter-spacing":"0px"}} data-aos="fade-up" data-aos-delay="100">All Trainers at SCOPE INDIA are working professionals, Software Engineers, Networking Engineers, and Software Test Engineers of Suffix E Solutions with
<br />
<strong style={{"color": "#fbba02","font-size": "20px","fontWeight":"700","fontFamily":"viga"}} >17 years of Industrial experience.</strong></h6>
                </div>
                <div className="d-flex flex-column align-items-center  justify-content-center container">
                  <img 
                    className="img-fluid d-block" 
                    style={{ width: "300px" }} 
                    data-aos="fade-up" 
                    data-aos-delay="100" 
                    src="assets/scope Images/5star.png" 
                    alt="star rating" 
                  />
                  <h6 style={{ lineHeight: "20px" }} className="text-center text-white" data-aos="fade-up" data-aos-delay="100">
                    Google 4.9 * Rated Institute
                  </h6>


                


<div className="container" data-aos="fade-up" data-aos-delay="100" style={{marginTop:"100px"}}>
      <div className="row mb-4">
        <h3 style={{"color":"white","fontFamily":"viga"}}>Software Programming Courses</h3>
      </div>
      <div className="row">
        {courseData.map((course, index) => (
          <div className="col-12 col-lg-4 mb-3" key={index}>
            <div className="card h-100 cssanimation fadeInBottom">
              <a href={course.url} className="text-decoration-none">
                <div className="card-body">
                  <h6 className="card-title">{course.title}</h6>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row mb-4">
        <h3 style={{"color":"white","fontFamily":"viga"}}>Software Testing Courses</h3>
      </div>
      <div className="row">
      
          <div className="col-12 col-lg-4 mb-3" >
            <div className="card h-100 cssanimation fadeInBottom">
            
                <div className="card-body">
                  <h6 className="card-title">Software  Testing Advanced</h6>
                </div>
       
            </div>
          </div>
     
      </div>
    </div>     

    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row mb-4">
        <h3 style={{"color":"white","fontFamily":"viga"}}>Networking, Server, & Cloud</h3>
      </div>
      <div className="row">
        {courseData2.map((course, index) => (
          <div className="col-12 col-lg-4 mb-3" key={index}>
            <div className="card h-100 cssanimation fadeInBottom">
              <a href={course.url} className="text-decoration-none">
                <div className="card-body">
                  <h6 className="card-title">{course.title}</h6>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row mb-4">
        <h3 style={{"color":"white","fontFamily":"viga"}}>Other Courses</h3>
      </div>
      <div className="row">
        {courseData3.map((course, index) => (
          <div className="col-12 col-lg-4 mb-3" key={index}>
            <div className="card h-100 cssanimation fadeInBottom">
              <a href={course.url} className="text-decoration-none">
                <div className="card-body">
                  <h6 className="card-title">{course.title}</h6>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* <div className="section mcb-section dark" style={{ paddingTop:"30px", marginTop:"30px",paddingBottom: '100px', backgroundColor: '#051a69' }}> */}
      {/* Address details */}
      <div className="container">
        
      <div
  style={{
    borderRadius: "10px",
    width: "90%",
    backgroundImage: "url('assets/scope Images/si-call-back-bg.jpg')",
    backgroundColor: "green",
    marginTop: "90px",
    marginBottom:"60px"
  }}
  data-aos="fade-up"
  data-aos-delay="100"
  className="pb-5"
>
  <div className="row m-0" style={{ width: "100%", paddingTop: "20px", justifyContent: "center" }}>
    <div className=" col-md-6 col-lg-6" style={{ border: "5px solid black" }}>
      <iframe
        style={{ borderRadius: "5px" }}
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/eIFj4nYNYbw?si=Tx96IaYAvqy9zyFx"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="col-12 col-md-6 col-lg-5">
      <h1
        style={{
          color: "#009318",
          fontSize: "31px",
          lineHeight: "59px",
          fontWeight: "800",
          letterSpacing: "1px",
          fontFamily: "viga",
        }}
      >
        Get a Free Callback
      </h1>
      <form onSubmit={handleSubmit} className="contactForm">
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          value={formData.name}
          placeholder="Enter your name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="form-control mb-2"
          value={formData.email}
          placeholder="Enter your Email"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          className="form-control mb-2"
          value={formData.subject}
          placeholder="Enter subject"
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          className="form-control mb-2"
          placeholder="Message"
          value={formData.message}
          required
          rows="4"
          onChange={handleChange}
        ></textarea>

        {successMessage && (
          <p className="alert alert-success" style={{ fontFamily: "poppins" }} role="alert">
            {successMessage}
          </p>
        )}

        <input type="submit" className="btn btn-primary mt-2" value={"Send Message"} />
      </form>
    </div>
  </div>
</div>

                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
     

      </div>
    </div>
    
        {/* <img style={{ width: "100%", height: "100px" }} src="assets/scope Images/snowpark-home-slide-decoration-bottomm.png" alt="Decoration" /> */}
        
       <div
      className="bg-cover text-center text-white py-5"
      style={{
        backgroundColor: '#041a6b',
        backgroundImage: 'url(https://scopeindia.org/images/snowpark-home-slider-background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4 mt-5" >
            <h4 className="text-warning fw-bold">1000+</h4>
            <h5>STUDENTS ARE<br />TRAINED EVERY YEAR</h5>
          </div>
          <div className="col-md-4 mb-4" style={{ marginTop: '-40px' }}>
            <h4 className="text-warning fw-bold">30+</h4>
            <h5>COMPUTER COURSES</h5>
          </div>
          <div className="col-md-4 mb-4 mt-5">
            <h4 className="text-warning fw-bold">95%</h4>
            <h5>STUDENTS ARE GETTING<br />PLACED EVERY YEAR</h5>
          </div>
        </div>
      </div>
      <div
        className="position-relative"
        style={{
          backgroundImage: 'url(https://scopeindia.org/images/snowpark-home-slide-decoration-bottomm.png)',
          height: '127px',
          bottom: '-20px',
          top:"50px"
        }}
      ></div>
    </div>

      </div>
 
 </>
  )
}

export default Courses
