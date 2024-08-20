import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
<>
<div className='header'>
    <div className='logo'>
    <Link to='/about'>Logo</Link>

    </div>

    <div className='Menu1'>
        <ul>
        <li><Link to='/'>Home</Link></li>
      <li>Hair care</li> 
        <li>Skin care  </li>
        <li>Diet </li>
        </ul>
    </div>
    <div className='Menu1'>
        <ul>
        <li><Link to='/aboout'>About Us </Link> </li>
        <li><Link to='/contactus'>Contact Us</Link> </li>
        <a href='https://www.revaais.shop/collections/exotic-veda'><li style={{fontWeight:'bold'}}>Our Shop</li></a>
        </ul>
    </div>



</div>
</>
  )
}

export default Header
