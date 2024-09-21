import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa'; // Import social media icons
import img3 from "./logo.jpg";
import './footer.css';
import linktrsvg from  './linktree-logo-icon.svg'

const Footer = () => {
  // Array of social media links with icons
  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61552173721446', icon: <FaFacebook />, name: 'Facebook' },
    { href: 'https://www.instagram.com/revaais_us/', icon: <FaInstagram />, name: 'Instagram' },
    { href: 'https://www.youtube.com/@RevaaaisUS', icon: <FaYoutube  />, name: 'YouTube' },
    { href: 'https://linktr.ee/Revaais_US', icon: <img src={linktrsvg} alt="Linktree" style={{ height: "24px", width: "24px" }} />, name: 'linktree' },

  ];

  // Array of footer links
  const footerLinks = [
    { to: '/aboutus', name: 'About' },
    { to: '/contactus', name: 'Contact' },
    { to: '/FAQ', name: 'FAQ' },
    { to: '/terms', name: 'Terms' },
    { to: '/policy', name: 'Policy' },
    { to: '/review', name: 'Review' },
    { to: '/Search', name: 'Search' },
  ];

  return (
    <footer className='footer' style={{ borderBottom: "4px solid grey" }}>
      {/* Social Media Section */}
      <div className='Social-media'>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0 }}>
          {socialLinks.map((link, index) => (
            <a href={link.href} key={index} target="_blank" rel="noopener noreferrer">
              <li style={{ fontSize: '24px', display: 'inline' }}>{link.icon}</li> {/* Display the icon */}
            </a>
          ))}
        </ul>
        <div className='logo'>
          <Link to="/">
            <img src={img3} style={{ height: "40px", width: "40px" }} alt="Logo" />
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
  <a href="tel:6239315288" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
    <FaPhone style={{ fontSize: '24px' }} />
    <span style={{ marginLeft: '5px' }}>Call: 623-931-5288</span>
  </a>
</div>

      </div>

      {/* Footer Links Section */}
      <div className='Footer-ul'>
        {Array.from({ length: 4 }).map((_, i) => (
          <ul key={i} style={{ padding: 0 }}>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Copyright Section */}
      <div>
        <p style={{ fontSize: "14px", textAlign: 'center', fontWeight: 'bold' }}>Copyright 2024,</p>
        <p style={{ fontSize: "14px", textAlign: 'center', fontWeight: 'bold' }}>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;