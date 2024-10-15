import React from 'react';

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row justify-content-center">
         <img src="assets/scope Images/snowpark-footer-logo.png" alt="scope-logo" className='img-fluid'/>
         <div className="row">
          <div className="col-md-12 fs-lg-4">Technopark TVM | Thampanoor TVM | Kochi, Kerala | Nagercoil, Tamil Nadu</div>
          </div>
 
        </div>
        <hr className="no_line" style={{ margin: '0 auto 30px' }} />
        <div className="row justify-content-center">
        <img src="assets/scope Images/iso_iaflogo.png" alt="iaflogo" className='img-fluid w-25 h-25'/>
      </div>

      <p style={{textAlign: 'center'}}>An ISO 9001:2015 Certified Company</p> 
       
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="copyright">
            All Rights Reserved &nbsp;<a href="https://www.suffixesolutions.com">Suffix E Solutions</a>&nbsp; &copy; &nbsp; 2007 - {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
      <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
