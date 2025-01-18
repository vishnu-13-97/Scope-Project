import React, { useState } from 'react';
import axios from 'axios';


function Contact() {

  const [successMessage, setSuccessMessage] = useState('');
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
        headers: { 'Content-Type': 'application/json' },
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
      // Error handling logic remains unchanged
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
                  <h1 className="mb-4 heading" data-aos="fade-up" data-aos-delay="100" style={{ color: "#fbba02", fontFamily: "Viga", fontSize: "55px", fontWeight: "100" }}>
                    SCOPE INDIA is open 365 days a year
                  </h1>
                  <h2 className='mb-4 heading text-white' data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: "Viga", fontSize: "35px" }}>
                    Let's discuss your career, 24/7 free Consultation
                  </h2>
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
                  
                  <div
  style={{
    borderRadius: "10px",
    width: "90%",
    backgroundImage: "url('assets/scope Images/si-call-back-bg.jpg')",
    backgroundColor: "green",
    marginTop: "90px",
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
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ backgroundColor: "#051a69", height: "1000px" }}></div> */}

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

export default Contact;
