import React from "react";

function About() {
  return (
    <>
      <div
        className=" overlay"
        style={{
          backgroundImage:
            "url('assets/scope Images/snowpark-skis-headerbg2.png')",
            backgroundSize:"cover",
            backgroundPosition:"50% 50%" ,
          marginTop: "60px",
          backgroundAttachment:"fixed"
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div
                  className="col-lg-12 text-center "
                  style={{ marginTop: "50px" }}
                >
                  <h1
                    className="mb-4 heading"
                    style={{
                      color: "#fbba02",
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
                    className="col-md-12 text-center text-white"
                    style={{
                      fontFamily: "Viga",
                      lineHeight: "45px",
                      fontWeight: "400",
                      fontSize: "36px",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    One of India's best Training destinations for Software,
                    Networking, and Cloud Computing courses with 17 years of
                    Industrial experience.
                  </h2>
<div  className="col-lg-12"
                  style={{ color:"white",marginLeft:"-10px",textAlign:"justify" }}  data-aos="fade-up" 
                  data-aos-delay="100" >
<p >
                    Software, Networking, and Cloud Professional Education
                    Centre in Kerala and Tamil Nadu from
                    <strong> Suffix E Solutions </strong> with WORKING
                    PROFESSIONALS oriented on-the-job TRAINING model. SCOPE
                    INDIA provides courses for
                     <strong> Software Programming </strong>in Python (Data
                    Science | Artificial Intelligence | Machine Learning | Deep
                    Learning, Data Analytics), Java, PHP, .Net, MERN,
                    <strong> Software Testing</strong> Manual and Automation,
                    <strong> Cloud Computing</strong> (AWS | Azure), <strong>Server  Administration </strong>
                    (MicroSoft MCSE | Linux RHCE), Networking
                    (CCNA), <strong>DevOps</strong> , <strong> Mobile App Development</strong> in Flutter, and
                    <strong>Digital Marketing</strong>. A Training with a 100% Trusted Job-Based
                    Internship Model. SCOPE INDIA has a Strong Placement Cell
                    that provides jobs to thousands of students annually. We
                    assure you, you won't regret it after training from SCOPE
                    INDIA!
                  </p>
                  <p> This is how SCOPE INDIA can support both newbies and those experienced in the industry to upgrade their skills.</p>


                  <div className="d-flex flex-column align-items-center justify-content-center container">
  <img 
    className="img-fluid d-block" 
    style={{ width: "300px" }} 
    data-aos="fade-up" 
    data-aos-delay="100" 
    src="assets/scope Images/5star.png" 
    alt="starimg" 
  />
  
  <h6 style={{lineHeight:"20px"}} className="text-center text-white" data-aos="fade-up" data-aos-delay="100">
    Google 4.9 * Rated Institute
  </h6>
</div>

                  
</div>

<div className="d-flex flex-column  justify-content-center container" style={{width:"100%",height:"500px"}} data-aos="fade-up" data-aos-delay="100">
  <button style={{backgroundColor:"#7c62bd",color:"white" ,width:"100%",borderColor:"#32d732",height:"50px",margin:"10px"}}>Recent Placements</button>
  <button style={{backgroundColor:"#62bdb4" ,color:"white",width:"100%",borderColor:"#35e9d7",height:"50px",margin:"10px"}}>Courses</button>
  <button style={{backgroundColor:"#5ead5e " ,color:"white",width:"100%",borderColor:"#32d732",height:"50px",margin:"10px"}}>Register Now</button>
</div>


                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
     

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
      {/* <img style={{width:"100%",height:"100px",color:"white"}} src="assets/scope Images/snowpark-home-slide-decoration-bottomm.png" alt="img" /> */}



      

     


    </>
  );
}

export default About;
