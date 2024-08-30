import React, { Component } from 'react';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import img3 from './Assets-Header/fevicon 48 by 48-01.png';
import './header.css';


class Navbar extends Component {
  state = {
    clicked: false,
    dropdownOpen: false, // State for handling dropdown visibility
  };

  // Handle click for hamburger menu
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // Handle dropdown visibility
  handleDropdownToggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    return (
      <>
        <nav>
          <div>
            <Link to='/'>
              <img src={img3} style={{ borderRadius: '50%', height: '50px', width: '50px' }} alt="Logo" />
            </Link>
          </div>

          <ul id='ulnav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/reciepe'>Treatment & Tips</Link></li>
            <li><Link to='/our-product'>Products</Link></li>
          </ul>

          <div>
            <ul id='navbar1' className={this.state.clicked ? "active" : ""}>
              <Link to='/aboutus'><li>About Us</li></Link>
              <Link to='/contactus'><li>Contact Us</li></Link>

              {/* Dropdown for "Shop by Categories" */}
              <li className="dropdown" onMouseEnter={this.handleDropdownToggle} onMouseLeave={this.handleDropdownToggle}>
                Shop by Categories
                {this.state.dropdownOpen && (
                  <ul className="dropdown-menu">
                    <Link to='/category/haircare'><li>Hair Care</li></Link>
                    <Link to='/category/skincare'><li>Skin Care</li></Link>
                    <Link to='/category/dietary'><li>Dietary</li></Link>
                  </ul>
                )}
              </li>

              <a href='https://www.revaais.shop'><li>Our Shop</li></a>
            </ul>
          </div>

          <div id='resposive' onClick={this.handleClick}>
            <Hamburger toggled={this.state.clicked} toggle={this.handleClick} />
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;