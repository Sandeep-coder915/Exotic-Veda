import React, { Component } from 'react';
import Hamburger from 'hamburger-react';
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
            <Link to='/'><li>Home</li></Link>
            <Link to='/reciepe'><li>Recipe & Tips</li></Link>
            <Link to='/products'><li>Products</li></Link>
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
                    <Link to='/categories/hair-care'><li>Hair Care</li></Link>
                    <Link to='/categories/skin-care'><li>Skin Care</li></Link>
                    <Link to='/categories/dietary'><li>Dietary</li></Link>
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