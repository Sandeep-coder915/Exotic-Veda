import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Information */}
        <div className="footer-section">
          <h3>Company Information</h3>
          <ul>
            <li>About Us</li>
            <li>Mission/Values</li>
            <li>Contact Information</li>
            <li>Store Location</li>
          </ul>
        </div>
        
        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        
        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Skincare Products</li>
            <li>Haircare Products</li>
            <li>Dietary Use Products</li>
            <li>Special Offers</li>
          </ul>
        </div>
        
        {/* Connect with Us */}
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Newsletter Signup</li>
          </ul>
        </div>
        
        {/* Payment Methods */}
        <div className="footer-section">
          <h3>Payment Methods</h3>
          <ul>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>PayPal</li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Exotic Veda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
/* Basic Styles */
.footer {
  background-color: #2c2c2c;
  color: #fff;
  padding: 40px 20px;
  text-align: left;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin: 20px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #f9a825; /* Accent color */
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
  font-size: 14px;
}

.footer-section ul li:hover {
  text-decoration: underline;
  cursor: pointer;
}

/* Footer Bottom */
.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #555;
}

.footer-bottom p {
  font-size: 14px;
  margin: 0;
  color: #aaa;
}

/* Responsive CSS */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-section {
    margin: 20px 0;
  }
}

@media (max-width: 480px) {
  .footer-section h3 {
    font-size: 16px;
  }

  .footer-section ul li {
    font-size: 12px;
  }

  .footer-bottom p {
    font-size: 12px;
  }
}
