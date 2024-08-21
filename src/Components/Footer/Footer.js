import React from 'react'
import { Link } from 'react-router-dom'
import img3 from "./fevicon 48 by 48-01.png"

const Footer = () => {
  return (
    <div className='footer' >
      <div className='Social-media' style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-around' }}>
        <ul style={{ display: "flex", gap: "30px", listStyle: "none" }}>
          <a href='https://www.facebook.com/profile.php?id=61552173721446'><li>facebook</li></a>
          <a href='https://www.instagram.com/revaais_us/'> <li>Instagram </li></a>
          <a href='https://www.youtube.com/@RevaaaisUS'><li>Youtube</li></a>

        </ul>
        <div><Link to="/"><img src={img3} style={{ height: "40px", width: "40px" }} /></Link></div>

        <div>Contact-<span><a href="tel:555-666-7777">3126679634</a></span></div>
      </div>
          
<div className='Footer-ul'>
  <ul>
    <li><Link to="/aboutus">About</Link></li>
    <li><Link to="/contactus">Contact</Link></li>
    <li><Link to="/FAQ">FAQ</Link></li>
    <li><Link to="/terms">Terms</Link></li>
    <li><Link to="/policy">Policy</Link></li>
  </ul>
  <ul>
    <li><Link to="/aboutus">About</Link></li>
    <li><Link to="/contactus">Contact</Link></li>
    <li><Link to="/FAQ">FAQ </Link></li>
    <li><Link to="/terms">Terms</Link></li>
    <li><Link to="/policy">Policy</Link></li>
  </ul>
  <ul>
    <li><Link to="/aboutus">About</Link></li>
    <li><Link to="/contactus">Contact</Link></li>
    <li><Link to="/FAQ">FAQ</Link></li>
    <li><Link to="/terms">Terms</Link></li>
    <li><Link to="/policy">Policy</Link></li>
  </ul>
  <ul>
    <li><Link to="/aboutus">About</Link></li>
    <li><Link to="/contactus">Contact</Link></li>
    <li><Link to="/FAQ">FAQ</Link></li>
    <li><Link to="/terms">Terms</Link></li>
    <li><Link to="/policy">Policy</Link></li>
  </ul>
   
</div>
<div>
  <p style={{ fontSize: "14px", textAlign:'center',fontWeight:'bold' }}>Copyright 2024,</p>
</div>
    </div>
  )
}

export default Footer
