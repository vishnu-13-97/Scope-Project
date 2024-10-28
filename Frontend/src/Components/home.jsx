import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate= useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {},
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
    data.append("name", formData.name);
    data.append("email", formData.email); // Change 'to' to 'email'
    data.append("subject", formData.subject);
    data.append("message", formData.message); // Change 'text' to 'message'

    try {
      await axios.post("http://localhost:5000/contact", data, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccessMessage(
        "Thank you for enquiring us, we will contact you shortly!"
      );
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        errors: {},
      });
    } catch (error) {
      if (error.response) {
        if (error.response.data && error.response.data.errors) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            errors: error.response.data.errors,
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            errors: {
              message: "An unexpected error occurred. Please try again.",
            },
          }));
        }
      } else if (error.request) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          errors: {
            message: "No response from the server. Please try again later.",
          },
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          errors: {
            message:
              "An error occurred while sending the request. Please try again.",
          },
        }));
      }
    }
  };

  return (
    <div>
      <div
        className="untree_co-hero"
        style={{ backgroundImage: `url('assets/scope Images/slider_bg.png')` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div
                  className="col-12 col-md-10 col-lg-8 text-center h-100 mb-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/scope Images/scope-india-logo-web.png"
                    alt="scope-img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          style={{ backgroundColor: "#050a4c" }}
          data-ride="carousel"
          data-interval="1000"
        >
          <div className="carousel-inner" style={{ height: "600px" }}>
            <div className="carousel-item active align-items-center ">
              <img
                className="d-block w-100"
                src="assets/carousel/scope-india-aws-certification-course-(1).png"
                alt="First slide"
                style={{ width: "100%", height: "600px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="assets/carousel/scope-india-flutter-fullstack-course.png"
                alt="Second slide"
                style={{ width: "100%", height: "600px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="assets/carousel/scope-india-mean-mern-stack-course.png"
                alt="Third slide"
                style={{ width: "100%", height: "600px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="assets/carousel/Devops-training-scopeindia.png"
                alt="Fourth slide"
                style={{ width: "100%", height: "600px" }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage:
              "url('/assets/scope Images/snowpark-home-slide-decoration-bottomm.png",
            height: "100px",
            backgroundColor: "#050a4c",
            backgroundRepeat: "no-repeat",
          }}
        >
          {" "}
        </div>

        <div className="container">
  <div className="row align-items-center justify-content-center">
    <div className="col-12">
      <div className="row justify-content-center display-4">
        <div className="d-flex flex-column align-items-center col-sm-10 col-md-8 col-lg-10 justify-content-center container">
          <div
            style={{
              borderRadius: "10px",
              width: "100%",
              backgroundImage: "url('assets/scope Images/si-call-back-bg.jpg')",
              backgroundColor: "green",
              marginBottom: "20px",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            className="pb-5"
          >
            <div
              className="row m-0"
              style={{
                width: "100%",
                paddingTop: "20px",
                justifyContent: "center",
              }}
            >
              <div className="col-12 col-md-6" style={{ border: "5px solid black" }}>
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
              <div className="col-12 col-md-6">
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
                <form className="contactForm" onSubmit={handleSubmit}>
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
                    value={formData.message}
                    placeholder="Message"
                    required
                    rows="4"
                    onChange={handleChange}
                  ></textarea>

                  {successMessage && (
                    <h3
                      className="alert alert-success"
                      style={{ fontFamily: "poppins" }}
                      role="alert"
                    >
                      {successMessage}
                    </h3>
                  )}

                  <input
                    type="submit"
                    className="btn btn-primary mt-2"
                    value={"Send Message"}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        <div className="container">
          <div className="row align-items-center justify-content-center mt-3">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div className="d-flex flex-column align-items-center justify-content-center container ">
                  <img
                    className="img-fluid d-block"
                    style={{ width: "300px" }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src="assets/scope Images/5star.png"
                    alt="starimg"
                  />

                  <h6
                    style={{ lineHeight: "20px" }}
                    className="text-center text-dark"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Google 4.9 * Rated Institute
                  </h6>
                </div>
                <div
                  className="col-lg-12 text-center "
                  style={{ marginTop: "50px" }}
                >
                  <h1
                    className="mb-4 heading"
                    style={{
                      color: "#021b5b",
                      fontFamily: "Viga",
                      lineHeight: "65px",
                      fontWeight: "500",
                      fontSize: "55px",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    SCOPE INDIA, your career partner!
                  </h1>

                  <h2
                    className="col-md-12 text-center "
                    style={{
                      fontFamily: "Viga",
                      lineHeight: "45px",
                      fontWeight: "400",
                      fontSize: "36px",
                      color: "#021b5b",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    One of India's best Training destinations for Software,
                    Networking, and Cloud Computing courses with 17 years of
                    Industrial experience.
                  </h2>
                  <div
                    className="col-lg-12"
                    style={{
                      color: "#021b5b",
                      marginLeft: "-10px",
                      textAlign: "justify",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p>
                      Software, Networking, and Cloud Professional Education
                      Centre in Kerala and Tamil Nadu from
                      <strong> Suffix E Solutions </strong> with WORKING
                      PROFESSIONALS oriented on-the-job TRAINING model. SCOPE
                      INDIA provides courses for
                      <strong> Software Programming </strong>in Python (Data
                      Science | Artificial Intelligence | Machine Learning |
                      Deep Learning, Data Analytics), Java, PHP, .Net, MERN,
                      <strong> Software Testing</strong> Manual and Automation,
                      <strong> Cloud Computing</strong> (AWS | Azure),{" "}
                      <strong>Server Administration </strong>
                      (MicroSoft MCSE | Linux RHCE), Networking (CCNA),{" "}
                      <strong>DevOps</strong> ,{" "}
                      <strong> Mobile App Development</strong> in Flutter, and
                      <strong>Digital Marketing</strong>. A Training with a 100%
                      Trusted Job-Based Internship Model. SCOPE INDIA has a
                      Strong Placement Cell that provides jobs to thousands of
                      students annually. We assure you, you won't regret it
                      after training from SCOPE INDIA!
                    </p>
                    <p>
                      {" "}
                      This is how SCOPE INDIA can support both newbies and those
                      experienced in the industry to upgrade their skills.
                    </p>

                    <div
                      className="d-flex flex-column  justify-content-center container"
                      style={{
                        width: "100%",
                        height: "500px",
                        marginBottom: "40px",
                      }}
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <button
                        style={{
                          backgroundColor: "#7c62bd",
                          color: "white",
                          width: "100%",
                          borderColor: "#32d732",
                          height: "50px",
                          margin: "10px",
                        }}
                      >
                        Recent Placements
                      </button>
                      <button
                        style={{
                          backgroundColor: "#62bdb4",
                          color: "white",
                          width: "100%",
                          borderColor: "#35e9d7",
                          height: "50px",
                          margin: "10px",
                        }}
                        onClick={()=> navigate('/courses')}
                      >
                        Courses
                      </button>
                      <button
                        style={{
                          backgroundColor: "#5ead5e",
                          color: "white",
                          width: "100%",
                          borderColor: "#32d732",
                          height: "50px",
                          margin: "10px",
                        
                        }}
                        onClick={()=> navigate('/register')}
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div
  className="pt-4 d-flex justify-content-center"
  style={{ paddingBottom: "5%", backgroundColor: "whitesmoke" }}
>
  <div
    className="container"
    style={{ width: "100%", maxWidth: "1200px" }}
  >
    <div className="row" style={{ textAlign: "justify" }}>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div className="text-center">
          <a style={{ color: "black" }} href="/">
            <img
              style={{ width: "64px", height: "64px" }}
              src="assets/scope Images/snowpark-home-icon1.png"
              alt="icon-img"
            />
          </a>
          <h1
            style={{
              fontFamily: "viga",
              fontSize: "40px", // Adjusted for better scaling
              color: "#021b5b",
            }}
          >
            Training
          </h1>
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              color: "black",
            }}
          >
            You are trained under Suffix E Solutions working professionals, on-the-job training model.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div className="text-center">
          <a style={{ color: "black" }} href="/">
            <img
              style={{ width: "64px", height: "64px" }}
              src="assets/scope Images/snowpark-home-icon2.png"
              alt="icon-img"
            />
          </a>
          <h1
            style={{
              fontFamily: "viga",
              fontSize: "40px", // Adjusted for better scaling
              color: "#021b5b",
            }}
          >
            Internship
          </h1>
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              color: "black",
            }}
          >
            After course completion, you will be proceeded to live projects with a 6 months experience certificate.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div className="text-center">
          <a style={{ color: "black" }} href="/">
            <img
              style={{ width: "64px", height: "64px" }}
              src="assets/scope Images/snowpark-home-icon3.png"
              alt="icon-img"
            />
          </a>
          <h1
            style={{
              fontFamily: "viga",
              fontSize: "40px", // Adjusted for better scaling
              color: "#021b5b",
            }}
          >
            Grooming
          </h1>
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              color: "black",
            }}
          >
            CV Preparation, Interview Preparation, and Personality Development.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div className="text-center">
          <a style={{ color: "black" }} href="/">
            <img
              style={{ width: "64px", height: "64px" }}
              src="assets/scope Images/snowpark-home-icon4.png"
              alt="icon-img"
            />
          </a>
          <h1
            style={{
              fontFamily: "viga",
              fontSize: "40px", // Adjusted for better scaling
              color: "#021b5b",
            }}
          >
            Placement
          </h1>
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              color: "black",
            }}
          >
            Gives 100% FREE placement support to all our fellow techies through SCOPE INDIA's Placement Cell.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>





    </div>
  );
}

export default Home;
