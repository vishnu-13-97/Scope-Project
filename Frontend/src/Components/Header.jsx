import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
        <div className="container">
          <div className="row align-items-center">
            {/* Additional row elements (if needed) */}
          </div>
        </div>

        <div className="sticky-nav js-sticky-header">
          <div className="container position-relative">
            <div className="site-navigation d-flex justify-content-between align-items-center">
              {/* Left-aligned navigation (Home, About, Contact) */}
              <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                <li><Link to="/" className="small mr-3">Home</Link></li>
                <li><Link to="/about" className="small mr-3">About</Link></li>
                <li><Link to="/contact" className="small mr-3">Contact Us</Link></li>
              </ul>

              {/* Center-aligned Logo */}
              <Link to="/" className="logo m-auto">
                <img src="assets/scope Images/scope-india-logo-bird.png" alt="bird-logo" className="img-fluid w-25 mr-3" />
              </Link>

              {/* Right-aligned Log In and Register */}
              <ul className="js-clone-nav d-none d-lg-inline-block site-menu ml-auto text-right">
                <li>
                  <Link to="/login" className="small mr-3">
                    <span className="icon-lock"></span> Log In
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="small">
                    <span className="icon-person"></span> Register
                  </Link>
                </li>
              </ul>

              {/* Mobile Menu Toggle */}
              <Link to="/" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
