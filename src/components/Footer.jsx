import React from 'react';
import { Link } from "react-scroll"; 
import logo from "../../public/assets/hero/logox.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> 
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

    
        <div className="footer-right">
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/service1">Service 1</Link></li>
              <li><Link to="/service2">Service 2</Link></li>
              <li><Link to="/service3">Service 3</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><Link to="/product1">Product 1</Link></li>
              <li><Link to="/product2">Product 2</Link></li>
              <li><Link to="/product3">Product 3</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
