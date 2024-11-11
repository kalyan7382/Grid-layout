// Footer.js
import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          {/* <p>
            We are a company dedicated to providing excellent services and products
            to our customers.
          </p> */}
        </div>
        {/* <div className="footer-section links">
             <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul> 
        </div> */}
      </div>
      <div className="footer-bottom">
         <p><h6>We are a company dedicated to providing excellent services and products
            to our customers.
            </h6>
          </p>
            <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h6>Useful Links</h6>
            <a href="">Home</a><br/>
            <a href="">service</a><br/>
            <a href="">About</a>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h6>Links</h6>
            <a href="">Home</a><br/>
            <a href="">service</a><br/>
            <a href="">About</a>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h6>Reach</h6>
            <a href="">Home</a><br/>
            <a href="">service</a><br/>
            <a href="">About</a><br/>
            <a href="">news</a><br/>
            <a href="">contact</a>
            </div>
            </div>
        {/* <p>&copy; 2024 Your Company. All Rights Reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
