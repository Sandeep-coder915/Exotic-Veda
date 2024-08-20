import React from 'react'
import  img from './Untitled design (65).png'
const Cateogry = () => {
  return (
    <div> <h1 style={{textAlign:"center"}}>Our Categories</h1>
    <div className='Container'>
       
<div className='row'>
    <div className='col-md-4'>
        <div className='card'>
            <img src={img}  alt='img'></img>
            <div className='card-body'>
                <h5 className='card-title'>Nature</h5>
                <p className='card-text'>This is a longer card with supporting text below as a natural</p>
                <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
            </div>

        </div>

    </div>
    <div className='col-md-4'>
        <div className='card'>
        <img src={img}  alt='img'></img>   
         <div className='card-body'>
                <h5 className='card-title'>Sports</h5>
                <p className='card-text'>This is a longer card with supporting text below as a natural</p>
                <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
    <div className='col-md-4'>
        <div className='card'>
        <img src={img}  alt='img'></img>
                    <div className='card-body'>
                <h5 className='card-title'>Sports</h5>
                <p className='card-text'>This is a longer card with supporting text below as a natural</p>
                <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
            </div>
        </div>
      
    </div>
</div>
    </div></div>
  )
}

export default Cateogry
