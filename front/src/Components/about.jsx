
import React from 'react'

function About() {
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
            <a href="/" className="small mr-3"><span className="icon-question-circle-o mr-2"></span> <span className="d-none d-lg-inline-block">Have a questions?</span></a> 
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
            <li className="active"><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>

          <a href="/" className="btn-book btn btn-secondary btn-sm menu-absolute">Enroll Now</a>

          <a href="/" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
            <span></span>
          </a>

        </div>
      </div>
    </div>
  </nav>
  
  <div className="untree_co-hero overlay" style={{ backgroundImage: "url('assets/images/img-school-1-min.jpg')" }}>

    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="row justify-content-center ">
            <div className="col-lg-6 text-center ">
              <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">About Us</h1>
              <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                <p>Another free template by <a href="https://untree.co/" target="blank" className="link-highlight">Untree.co</a>. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.</p>
              </div>

              <p className="mb-0" data-aos="fade-up" data-aos-delay="300"><a href="/" className="btn btn-secondary">Explore courses</a></p>

            </div>


          </div>

        </div>

      </div>
    </div> 

  </div>




  <div className="services-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-4 mb-5 mb-lg-0">

          <div className="section-title mb-3" data-aos="fade-up" data-aos-delay="0">
            <h2 className="line-bottom mb-4">Become an Instructor</h2>
          </div>

          <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>

          <ul className="ul-check list-unstyled mb-5 primary" data-aos="fade-up" data-aos-delay="200">
            <li>Behind the word Mountains.</li>
            <li>Far far away Mountains.</li>
            <li>Large language Ocean.</li>
          </ul>

          <p data-aos="fade-up" data-aos-delay="300"><a href="/" className="btn btn-primary">Get Started</a></p>

        </div>
        
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
        
  <figure className="img-wrap-2">
  <img src="assets/images/teacher-min.jpg" alt="img" className="img-fluid"/>
    <div className="dotted"></div>
  </figure>
</div>

</div>
    </div>
  </div>


  <div className="untree_co-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 className="line-bottom text-center mb-4">Our Team</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="0">
          <div className="staff text-center">
            <div className="mb-4"><img src="assets/images/staff_1.jpg" alt="img" className="img-fluid"/></div>
            <div className="staff-body">
              <h3 className="staff-name">Mina Collins</h3>
              <span className="d-block position mb-4">Teacher in Math</span>
              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="social">
                <a href="/" className="mx-2"><span className="icon-facebook"></span></a>
                <a href="/" className="mx-2"><span className="icon-twitter"></span></a>
                <a href="/" className="mx-2"><span className="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="staff text-center">
            <div className="mb-4"><img src="assets/images/staff_2.jpg" alt="img" className="img-fluid"/></div>
            <div className="staff-body">
              <h3 className="staff-name">Anderson Matthew</h3>
              <span className="d-block position mb-4">Teacher in Music</span>
              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="social">
                <a href="/" className="mx-2"><span className="icon-facebook"></span></a>
                <a href="/" className="mx-2"><span className="icon-twitter"></span></a>
                <a href="/" className="mx-2"><span className="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="staff text-center">
            <div className="mb-4"><img src="assets/images/staff_3.jpg" alt="img" className="img-fluid"/></div>
            <div className="staff-body">
              <h3 className="staff-name">Cynthia Misso</h3>
              <span className="d-block position mb-4">Teacher English</span>
              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="social">
                <a href="/" className="mx-2"><span className="icon-facebook"></span></a>
                <a href="/" className="mx-2"><span className="icon-twitter"></span></a>
                <a href="/" className="mx-2"><span className="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="untree_co-section">
    <div className="container"> 
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 className="line-bottom text-center mb-4">We Have Best Education</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="feature">
            <span className="uil uil-music"></span>
            <h3>Music className</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="feature">
            <span className="uil uil-calculator-alt"></span>
            <h3>Math className</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div className="feature">
            <span className="uil uil-book-open"></span>
            <h3>English className</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>


        <div className="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="feature">
            <span className="uil uil-book-alt"></span>
            <h3>Reading for Kids</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="feature">
            <span className="uil uil-history"></span>
            <h3>History className</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div className="feature">
            <span className="uil uil-headphones"></span>
            <h3>Music</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </div>
    </div> 
  </div> 


  

  <div className="untree_co-section">


    <div className="container">
      <div className="row">
        <div className="col-lg-5 mr-auto mb-5 mb-lg-0"  data-aos="fade-up" data-aos-delay="0">
          <img src="assets/images/img-school-5-min.jpg" alt="img" className="img-fluid"/>
        </div>
        <div className="col-lg-7 ml-auto" data-aos="fade-up" data-aos-delay="100">
          <h3 className="line-bottom mb-4">Why Choose Us</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>

          <div className="custom-accordion" id="accordion_1">
            <div className="accordion-item">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Good Teachers and Staffs</button>
              </h2>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1">
                <div className="accordion-body">
                  <div className="d-flex">
                    <div className="accordion-img mr-4">
                      <img src="assets/images/img-school-1-min.jpg" alt="img" className="img-fluid"/>
                    </div>
                    <div>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> 

            <div className="accordion-item">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">We Value Good Characters</button>
              </h2>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1">
                <div className="accordion-body">
                  <div className="d-flex">
                    <div className="accordion-img mr-4">
                      <img src="assets/images/img-school-2-min.jpg" alt="img" className="img-fluid"/>
                    </div>
                    <div>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Your Children are Safe</button>
              </h2>

              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                <div className="accordion-body">
                  <div className="d-flex">
                    <div className="accordion-img mr-4">
                      <img src="assets/images/img-school-3-min.jpg" alt="img" className="img-fluid"/>
                    </div>
                    <div>
                      <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
                      <p>Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div> 

          </div>

        </div>
      </div>
    </div>
  </div> 
  <div className="site-footer">


    <div className="container">

      <div className="row">
        <div className="col-lg-3 mr-auto">
          <div className="widget">
            <h3>About Us<span className="text-primary">.</span> </h3>
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
        </div>/

        <div className="col-lg-3">
          <div className="widget">
            <h3>Gallery</h3>
            <ul className="instafeed instagram-gallery list-unstyled">
              <li><a className="instagram-item" href="assets/images/gal_1.jpg" data-fancybox="gal"><img src="assets/images/gal_1.jpg" alt="" width="72" height="72"/></a>
              </li>
              <li><a className="instagram-item" href="assets/images/gal_2.jpg" data-fancybox="gal"><img src="assets/images/gal_2.jpg" alt="" width="72" height="72"/></a>
              </li>
              <li><a className="instagram-item" href="assets/images/gal_3.jpg" data-fancybox="gal"><img src="assets/images/gal_3.jpg" alt="" width="72" height="72"/></a>
              </li>
              <li><a className="instagram-item" href="assets/images/gal_4.jpg" data-fancybox="gal"><img src="assets/images/gal_4.jpg" alt="" width="72" height="72"/></a>
              </li>
              <li><a className="instagram-item" href="assets/images/gal_5.jpg" data-fancybox="gal"><img src="assets/images/gal_5.jpg" alt="" width="72" height="72"/></a>
              </li>
              <li><a className="instagram-item" href="assets/images/gal_6.jpg" data-fancybox="gal"><img src="assets/images/gal_6.jpg" alt="" width="72" height="72"/></a>
              </li>
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
          <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a> </p>
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
  )
}

export default About;




  