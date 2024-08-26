import React from 'react';
import { Link } from 'react-router-dom';
import img3 from "./fevicon 48 by 48-01.png";

const Footer = () => {
  // Array of social media links
  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61552173721446', name: 'Facebook' },
    { href: 'https://www.instagram.com/revaais_us/', name: 'Instagram' },
    { href: 'https://www.youtube.com/@RevaaaisUS', name: 'YouTube' }
  ];

  // Array of footer links
  const footerLinks = [
    { to: '/aboutus', name: 'About' },
    { to: '/contactus', name: 'Contact' },
    { to: '/FAQ', name: 'FAQ' },
    { to: '/terms', name: 'Terms' },
    { to: '/policy', name: 'Policy' ,
      to: '/review',name:'Review'
    }
  ];

  return (
    <div className='footer' style={{ borderBottom: "4px solid grey" }}>
      {/* Social Media Section */}
      <div className='Social-media'>
        <ul style={{ display: "flex", gap: "30px", listStyle: "none" }}>
          {socialLinks.map((link, index) => (
            <a href={link.href} key={index}>
              <li>{link.name}</li>
            </a>
          ))}
        </ul>
        <div>
          <Link to="/">
            <img src={img3} style={{ height: "40px", width: "40px" }} alt="Logo" />
          </Link>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className='Footer-ul'>
        {Array.from({ length: 4 }).map((_, i) => (
          <ul key={i}>
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
    </div>
  );
};

export default Footer;