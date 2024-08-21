import React from 'react'
import { Link } from 'react-router-dom'
import  img3 from './Assets-Header/fevicon 48 by 48-01.png'
import './header.css'
const Header = () => {
  return (
<>
<div className='header'>
  
    <div className='Menu1'>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/treatments&tips'>Reciepe & Tips </Link></li> 
        <li><Link to='/products'>Products</Link></li>
        <li>Serch By Category </li>
        </ul>
    </div>
    <div className='logo'>
    <Link to='/about'><img src={img3} style={{height:"50px", borderRadius:"50%",width:'50px'}}></img></Link>

    </div>
    <div className='Menu1'>
        <ul>
        <li><Link to='/aboutus'>About Us </Link> </li>
        <li><Link to='/contactus'>Contact Us</Link> </li>
        <a href='https://www.revaais.shop/collections/exotic-veda'><li style={{fontWeight:'bold'}}>Our Shop</li></a>
        </ul>
    </div>



</div>
</>
  )
}

export default Header
