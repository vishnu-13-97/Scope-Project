import React from 'react';
// import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
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
            <p className="copyright">
              Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> 
              Distributed By <a href="https://themewagon.com">ThemeWagon</a>
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
