import React from 'react'
import './producet.css'
import img1  from './Assets/exe.png'
import img11  from './Assets/sandalwood front 1 300.png'
import img12  from './Assets/sandalwood front 2 300.png'
import img2  from './Assets/Untitled design (66).png'
import triphala2 from './Assets/Triphala  2nd img  .png'
import triphala1 from './Assets/Untitled design (70).png'

const Product = () => {
  return (
    <>  <div style={{display:"flex",flexDirection:"column",alignItems:'center' ,padding:"3rem"}}><div><h1 style={{textAlign:"center"}}>Explore Our Products</h1></div>
    <div className='Container1'>
      
    <div className='row'>
   
    <div className='col-md-4'>
            <div className='card'>
                <img src={img11} alt='img'></img>
                <img src={img12} alt='img'></img>
                <div className='card-body'>
                   <h2 className='card-title' > Organic Triphala Powder for Men & Women</h2> 
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <a href='https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g'> <button className='btn btn-primary'>Buy Now</button></a>
                </div>
    
            </div>
            </div>
    <div className='col-md-4'>
            <div className='card'>
                <img src={img11} alt='img'></img>
                <img src={img12} alt='img'></img>
                <div className='card-body'>
                   <h2 className='card-title' > Organic Triphala Powder for Men & Women</h2> 
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <a href='https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g'> <button className='btn btn-primary'>Buy Now</button></a>
                </div>
    
            </div>
            </div>
    <div className='col-md-4'>
            <div className='card'>
                <img src={img11} alt='img'></img>
                <img src={img12} alt='img'></img>
                <div className='card-body'>
                   <h2 className='card-title' > Organic Triphala Powder for Men & Women</h2> 
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <a href='https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g'> <button className='btn btn-primary'>Buy Now</button></a>
                </div>
    
            </div>
            </div>
    <div className='col-md-4'>
            <div className='card'>
                <img src={img11} alt='img'></img>
                <img src={img12} alt='img'></img>
                <div className='card-body'>
                   <h2 className='card-title' > Organic Triphala Powder for Men & Women</h2> 
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <a href='https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g'> <button className='btn btn-primary'>Buy Now</button></a>
                </div>
    
            </div>
            </div>
     
  
      
  
            </div>
    {/* <div className='row'>
        <div className='col-md-4'>
            <div className='card'>
                <img src={img1} alt='img'></img>
                <img src={img2} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Thriphala Powder </h5>
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <a href='https://www.revaais.shop/collections/exotic-veda'><button className='btn btn-primary'>Buy Now</button></a>
                </div>
    
            </div>
            </div>
        <div className='col-md-4'>
            <div className='card'>
                <img src={img1} alt='img'></img>
                <img src={img2} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Thriphala Powder </h5>
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
    
            </div>
            </div>
        <div className='col-md-4'>
            <div className='card'>
                <img src={img1} alt='img'></img>
                <img src={img2} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Thriphala Powder </h5>
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
    
            </div>
            </div>
        <div className='col-md-4'>
            <div className='card'>
                <img src={img1} alt='img'></img>
                <img src={img2} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Thriphala Powder </h5>
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
    
            </div>
            </div>
  
            </div>
    <div className='row'>
        <div className='col-md-4'>
            <div className='card'>
                <img src={img1} alt='img'></img>
                <img src={img2} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Thriphala Powder </h5>
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <a href='https://www.revaais.shop/collections/exotic-veda'><button className='btn btn-primary'>Buy Now</button></a>
                </div>
    
            </div>
            </div>
        <div className='col-md-4'>
            <div className='card'>
                <img src={img1} alt='img'></img>
                <img src={img2} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Thriphala Powder </h5>
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
    
            </div>
            </div>
        <div className='col-md-4'>
            <div className='card'>
                <img src={img1} alt='img'></img>
                <img src={img2} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Thriphala Powder </h5>
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
    
            </div>
            </div>
        <div className='col-md-4'>
            <div className='card'>
                <img src={img1} alt='img'></img>
                <img src={img2} alt='img'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Thriphala Powder </h5>
                    <p className='card-text'>Welcome To exotic veda  l</p>
                    <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
    
            </div>
            </div>
  
            </div> */}
 
            </div>
            </div></>
  )
}

export default Product
