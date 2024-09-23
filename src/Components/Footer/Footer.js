import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaAmazonPay, FaInstagram, FaPhone,FaYoutube, FaPaypal, FaCcVisa, FaCcMastercard, FaApple, FaGooglePay } from 'react-icons/fa';
// Import social media icons
import img3 from "./logo copy.jpg";
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
  const footerSections = [
    {
      title: 'Company Information',
      links: [
        { name: 'About Us', path: '/aboutus' },
        { name: 'Adress-1001 S MAIN ST STE 500 KALISPELL, MT 59901', path: '/mission' },
        { name: 'support@revaais.com', path: '/contactus' },
        { name: 'Store Location', path: '/storelocation' }
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Shipping & Returns', path: '/shipping' },
        { name: 'Privacy Policy', path: '/privacypolicy' },
        { name: 'Terms & Conditions', path: '/terms' }
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Skincare Products', path: '/category/skincare' },
        { name: 'Haircare Products', path: '/category/haircare' },
        { name: 'Dietary Use Products', path: '/category/dietary' },
        { name: 'Special Offers', path: '/specialoffers' }
      ]
    },
    {
      title: 'Additionals',
      links: [
        { name: 'Our Shop', path: '/category/haircare' },
        { name: 'Search', path: '/category/skincare' },
     
        { name: 'Contact Us', path: '/contactus' },
        { name: 'Special Offers', path: '/specialoffers' }
      ]
    },
 
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
    <span style={{ marginLeft: '5px' }}>Call:312667-9634</span>
  </a>
</div>

      </div>

      {/* Footer Links Section */}
      <div className='Footer-ul'>
  {footerSections.map((section, sectionIndex) => (
    <ul key={sectionIndex} style={{ padding: 0 }}>
      <h3 style={{ textAlign: 'center' }}>{section.title}</h3> {/* Aligning the title in the center */}
      {section.links.map((link, linkIndex) => (
        <li key={linkIndex}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  ))}
</div>


      <div className='payment-methods' style={{ textAlign: 'center', marginTop: '20px' }}>
          <FaApple style={{ fontSize: '24px', margin: '0 10px', color: '#A2AAAD' }} />
          <FaGooglePay style={{ fontSize: '24px', margin: '0 10px', color: '#4285F4' }} />
          <FaAmazonPay style={{ fontSize: '24px', margin: '0 10px', color: '#FF9900' }} />
          <FaPaypal style={{ fontSize: '24px', margin: '0 10px', color: '#00308F' }} />
          <FaCcVisa style={{ fontSize: '24px', margin: '0 10px', color: '#1A1F71' }} />
          <FaCcMastercard style={{ fontSize: '24px', margin: '0 10px', color: '#EB001B' }} />
        </div>

      <div>
        <p style={{ fontSize: "14px", textAlign: 'center', fontWeight: 'bold' }}>Copyright 2024,</p>
        <p style={{ fontSize: "14px", textAlign: 'center', fontWeight: 'bold' }}>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;