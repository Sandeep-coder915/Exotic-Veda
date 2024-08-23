import React, { Component } from 'react';
import Hamburger from 'hamburger-react'

import { Link } from 'react-router-dom'
import img3 from './Assets-Header/fevicon 48 by 48-01.png'
import './header.css'
class Navbar extends Component {
  state = { clicked: false };

  // Define the HandleClick function here
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <>
        <nav>
          <div>
            <Link to='/'><img src={img3} style={{ borderRadius: '50%', height: '50px', width: '50px;' }}></img></Link>
          </div>

          <ul  id='ulnav' >
            {/* <li ClassName='active'><Link to='./' >Home</Link></li> */}
            <li>Home</li>
            <li>Receipe &Tips</li>
            <li>Products </li>


          </ul >
          <div >

            <ul id='navbar1' className={this.state.clicked ? "active" : ""} >
              <li>AboutUS</li>
              <Link to='/contactus'></Link>   <li>Contact US</li>
              <li>Shop by Categories</li>
              <a href='www.revaais.shop'> <li>Our Shop</li> </a>

            </ul>
          </div>

          <div id='resposive' onClick={this.handleClick} >
            <Hamburger toggled={this.state.clicked} toggle={this.handleClick} />

          </div>
        </nav>
      </>
    );
  }
}


export default Navbar;