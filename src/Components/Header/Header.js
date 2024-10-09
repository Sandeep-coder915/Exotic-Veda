import React, { useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import img3 from './Assets-Header/./logo.jpg';
import './header.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  const location = useLocation();
  const currentPath = location.pathname;
 
 
 
  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getHeaderClass = () => {
    if (currentPath.includes('/triphala-powder')) {
      return 'header-triphala';
    } else if (currentPath.includes('/lemongras-powder')) {
      return 'header-lemongrass';
    } else if (currentPath.includes('/shikhakhai-powder')) {
      return 'header-shika';
    } else if (currentPath.includes('/jaamun-seed')) {
      return 'header-jamun';
    } else {
      return ''; // Default class if needed
    }
  };

  return (
    <nav>
      <div>
        <Link to='/'>
          <img src={img3} style={{ borderRadius: '50%',   width:'70px'}} alt="Logo" />
        </Link>
      </div>

      <ul id='ulnav'>
        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/reciepe'>Tips</Link></li> */}
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/Search'>Search</Link></li>
      </ul>

      <div>
        <ul id='navbar1' className={clicked ? 'active' : ''}>
          <Link to='/aboutus'><li>About Us</li></Link>
          <Link to='/contactus'><li>Contact Us</li></Link>

          {/* Dropdown */}
          <li className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
            Shop by Categories
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <Link to='/category/haircare'><li>Hair Care</li></Link>
                <Link to='/category/skincare'><li>Skin Care</li></Link>
                <Link to='/category/dietary'><li>Dietary</li></Link>
                <Link to='/category/puja-items'><li>Puja Essential</li></Link>
              </ul>
            )}
          </li>
          {/* Dark Mode Toggle Button */}
   
          <a href='https://www.revaais.shop'><li>Our Shop</li></a>
        </ul>
      </div>

      

      <div id='resposive' onClick={handleClick}>
        <Hamburger toggled={clicked} toggle={handleClick} />
      </div>
    </nav>
  );
};

export default Navbar;
