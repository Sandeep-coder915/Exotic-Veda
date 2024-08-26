import React, { useState,Component } from 'react';
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
       
            <Link to='/'><li>Home</li></Link>
            <Link to='/treatments&tips'><li>Receipe &Tips</li></Link>
          <Link to='/products'>  <li>Products </li></Link>
    


          </ul >
          <div >

            <ul id='navbar1' className={this.state.clicked ? "active" : ""} >
             <Link to='/aboutus'><li>AboutUS</li></Link> 
              <Link to='/contactus'><li>Contact US</li></Link>
              <Link to=''></Link> <li>Shop by Categories</li>
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