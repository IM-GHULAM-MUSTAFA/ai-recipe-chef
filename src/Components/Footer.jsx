import React from "react";
import { Link } from "react-router-dom";
import ChefImg from '../Images/chef-claude-icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* chef logo  */}
        {/* <img src={ChefImg} className="footer-logo" alt="cheflogo" /> */}



        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/chef">Home</Link></li>
            <li><Link to="/recipe">Recipes</Link></li>
            <li><Link to="/review">Review</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            {/* <li><Link to="/signup">Signup</Link></li> */}
          </ul>
        </div>

      
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Recipe Chef. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
