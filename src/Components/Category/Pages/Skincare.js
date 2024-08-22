import React from 'react'
import { Link } from 'react-router-dom'
import img111 from '../Assets/Aloe Vera  1 img  .png'

const Skincare = () => {
  return (
    <div className='Container1' style={{marginTop:'4.9rem', }}>
      <h1>Expolre Our Skin Care Categories</h1>
    <div className='row'>
   
    <div className='col-md-4'>
            <div className='card'>
                <Link to='/products/thriphala'>
                <img src={img111} alt='img'></img></Link>
             
                <div className='card-body'>
                   <h2 className='card-title' >Aloevera Powder for Men & Women</h2> 
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'> <button className='btn btn-primary'>Buy Now</button></a>
                </div>
    
            </div>
            </div>
            </div></div>
  )
}

export default Skincare
