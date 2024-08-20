import React from 'react'
import { Link } from 'react-router-dom'
import  img3 from './fevicon 48 by 48-01.png'
const Header = () => {
  return (
<>
<div className='header'>
  

    <div className='Menu1'>
        <ul>
        <li><Link to='/'>Home</Link></li>
      <li>Treatment & Tips </li> 
        <li>Products </li>
        <li>Serch By Category </li>
        </ul>
    </div>
    <div className='logo'>
    <Link to='/about'><img src={img3} style={{height:"40px", borderRadius:"50%"}}></img></Link>

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
