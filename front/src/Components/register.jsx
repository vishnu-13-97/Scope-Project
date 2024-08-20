import React, { useState } from 'react';

function Register() {
  // State to manage selected hobbies
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  // Handle checkbox changes
  const handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    setSelectedHobbies(prev =>
      checked ? [...prev, value] : prev.filter(hobby => hobby !== value)
    );
  };

  return (
    <>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav mb-5">
        <div className="pb-2 top-bar mb-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-lg-9">
                <a href="/" className="small mr-3"><span className="icon-question-circle-o mr-2"></span> <span className="d-none d-lg-inline-block">Have a question?</span></a> 
                <a href="/" className="small mr-3"><span className="icon-phone mr-2"></span> <span className="d-none d-lg-inline-block">10 20 123 456</span></a> 
                <a href="/" className="small mr-3"><span className="icon-envelope mr-2"></span> <span className="d-none d-lg-inline-block">info@mydomain.com</span></a> 
              </div>
              <div className="col-6 col-lg-3 text-right">
                <a href="login.html" className="small mr-3">
                  <span className="icon-lock"></span>
                  Log In
                </a>
                <a href="register.html" className="small">
                  <span className="icon-person"></span>
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-nav js-sticky-header">
          <div className="container position-relative">
            <div className="site-navigation text-center">
              <a href="index.html" className="logo menu-absolute m-0">Scope India<span className="text-primary">.</span></a>
              <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                <li><a href="index.html">Home</a></li>
                <li className="has-children">
                  <a href="/">Dropdown</a>
                  <ul className="dropdown">
                    <li><a href="elements.html">Elements</a></li>
                    <li className="has-children">
                      <a href="/">Menu Two</a>
                      <ul className="dropdown">
                        <li><a href="/">Sub Menu One</a></li>
                        <li><a href="/">Sub Menu Two</a></li>
                        <li><a href="/">Sub Menu Three</a></li>
                      </ul>
                    </li>
                    <li><a href="/">Menu Three</a></li>
                  </ul>
                </li>
                <li><a href="staff.html">Our Staff</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="about.html">About</a></li>
                <li className="active"><a href="contact.html">Contact</a></li>
              </ul>
              <a href="/" className="btn-book btn btn-secondary btn-sm menu-absolute">Enroll Now</a>
              <a href="/" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="untree_co-hero inner-page overlay" style={{ backgroundImage: "url('images/img-school-5-min.jpg')" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div className="col-lg-6 text-center ">
                  <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Register</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-8 mx-auto order-1" data-aos="fade-up" data-aos-delay="200">
              <form action="#" className="form-box">
                <div className="row">
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                  <div className="col-12 mb-3">
                    <select className="form-control">
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <input type="date" className="form-control" placeholder="Date of Birth" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                 
                  <div className="col-12 mb-3">
                    <select className="form-control">
                      <option value="">Country</option>
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <select className="form-control">
                      <option value="">State</option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                      {/* Add more states based on selected country */}
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                  <select className="form-control">
                      <option value="">City</option>
                      <option value="city1">city 1</option>
                      <option value="city2">city 2</option>
                      {/* Add more states based on selected country */}
                    </select>
                   </div>
                  <div className="col-12 mb-3">
                    <input type="file" className="form-control"  accept="image/*" />
                  </div>
                  <div className="col-12 mb-3">
                    <fieldset>
                      <legend>Hobbies</legend>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="hobby1" value="hobby1" onChange={handleHobbyChange} />
                        <label className="form-check-label" htmlFor="hobby1">Hobby 1</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="hobby2" value="hobby2" onChange={handleHobbyChange} />
                        <label className="form-check-label" htmlFor="hobby2">Hobby 2</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="hobby3" value="hobby3" onChange={handleHobbyChange} />
                        <label className="form-check-label" htmlFor="hobby3">Hobby 3</label>
                      </div>
                      {/* Add more hobbies as needed */}
                    </fieldset>
                  </div>
                  <div className="col-12 mb-3">
                    <label className="control control--checkbox">
                      <span className="caption">Accept our <a href="/">terms and conditions</a></span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                  </div>
                  <div className="col-12">
                    <input type="submit" value="Register" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 

      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mr-auto">
              <div className="widget">
                <h3>About Us<span className="text-primary">.</span></h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div> 
              <div className="widget">
                <h3>Connect</h3>
                <ul className="list-unstyled social">
                  <li><a href="/"><span className="icon-instagram"></span></a></li>
                  <li><a href="/"><span className="icon-twitter"></span></a></li>
                  <li><a href="/"><span className="icon-facebook"></span></a></li>
                  <li><a href="/"><span className="icon-linkedin"></span></a></li>
                  <li><a href="/"><span className="icon-pinterest"></span></a></li>
                  <li><a href="/"><span className="icon-dribbble"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 ml-auto">
              <div className="widget">
                <h3>Projects</h3>
                <ul className="list-unstyled float-left links">
                  <li><a href="/">Web Design</a></li>
                  <li><a href="/">HTML5</a></li>
                  <li><a href="/">CSS3</a></li>
                  <li><a href="/">jQuery</a></li>
                  <li><a href="/">Bootstrap</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="widget">
                <h3>Gallery</h3>
                <ul className="instafeed instagram-gallery list-unstyled">
                  <li><a className="instagram-item" href="assets/images/gal_1.jpg" data-fancybox="gal"><img src="assets/images/gal_1.jpg" alt="" width="72" height="72" /></a></li>
                  <li><a className="instagram-item" href="assets/images/gal_2.jpg" data-fancybox="gal"><img src="assets/images/gal_2.jpg" alt="" width="72" height="72" /></a></li>
                  <li><a className="instagram-item" href="assets/images/gal_3.jpg" data-fancybox="gal"><img src="assets/images/gal_3.jpg" alt="" width="72" height="72" /></a></li>
                  <li><a className="instagram-item" href="assets/images/gal_4.jpg" data-fancybox="gal"><img src="assets/images/gal_4.jpg" alt="" width="72" height="72" /></a></li>
                  <li><a className="instagram-item" href="assets/images/gal_5.jpg" data-fancybox="gal"><img src="assets/images/gal_5.jpg" alt="" width="72" height="72" /></a></li>
                  <li><a className="instagram-item" href="assets/images/gal_6.jpg" data-fancybox="gal"><img src="assets/images/gal_6.jpg" alt="" width="72" height="72" /></a></li>
                </ul>
              </div> 
            </div>
            <div className="col-lg-3">
              <div className="widget">
                <h3>Contact</h3>
                <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                <ul className="list-unstyled links mb-4">
                  <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                  <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                  <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                </ul>
              </div> 
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a></p>
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
      
    </>
  );
}


export default Register;
