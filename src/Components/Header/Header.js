import React from 'react'
// import { Link } from 'react-router-dom'
const Header = () => {
  return (
<>
<div className='header'>
    <div className='logo'>
Logo

    </div>

    <div className='Menu1'>
        <ul>
        <li>Home </li>
      <li>Hair care</li> 
        <li>Skin care  </li>
        <li>Diet </li>
        </ul>
    </div>
    <div className='Menu1'>
        <ul>
        <li>About Us   </li>
        <li>Contact us </li>
        <a href='https://www.revaais.shop/collections/exotic-veda'><li>Our Shop</li></a>
        </ul>
    </div>



</div>
</>
  )
}

export default Header
