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
      <div className="pb-2 top-bar mb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-lg-9">
              <Link to="/" className="small mr-3">
                <span className="icon-question-circle-o mr-2"></span> 
                <span className="d-none d-lg-inline-block">Have a question?</span>
              </Link>
              <Link to="/" className="small mr-3">
                <span className="icon-phone mr-2"></span> 
                <span className="d-none d-lg-inline-block">2255369</span>
              </Link>
              <Link to="/" className="small mr-3">
                <span className="icon-envelope mr-2"></span> 
                <span className="d-none d-lg-inline-block">info@ScopeIndia.com</span>
              </Link>
            </div>
            <div className="col-6 col-lg-3 text-right">
              <Link to="/login" className="small mr-3">
                <span className="icon-lock"></span>
                Log In
              </Link>
              <Link to="/register" className="small">
                <span className="icon-person"></span>
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-nav js-sticky-header">
        <div className="container position-relative">
          <div className="site-navigation text-center">
            <Link to="/" className="logo menu-absolute m-0">
              Scope India<span className="text-primary">.</span>
            </Link>
            <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="active"><Link to="/contact">Contact</Link></li>
             </ul>
            <Link to="/" className="btn-book btn btn-secondary btn-sm menu-absolute">Enroll Now</Link>
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
