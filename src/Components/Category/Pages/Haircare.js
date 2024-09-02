import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { assets } from '../../products/Assets/prodimg/assets';
import './skincare.css'
const Haircare = () => {
  const products = [
    {
      id: 1,
      link: '/products/aloevera-powder',
      img: assets.aloe,
      title: 'Pure Aloe Vera Powder by Exotic Veda: Your Natural Solution for Skin and Hair Care',
      description: 'Welcome To Exotic Veda',
      updateInfo: 'Click here to Learn Our Recipes and tips to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/aloevera-powder',
    },
  
    {
      id: 1,
      link: '/products/aloevera-powder',
      img: assets.aloe,
      title: 'Pure Aloe Vera Powder by Exotic Veda: Your Natural Solution for Skin and Hair Care',
      description: 'Welcome To Exotic Veda',
      updateInfo: 'Click here to Learn Our Recipes and tips to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/aloevera-powder',
    },
  
    {
      id: 1,
      link: '/products/aloevera-powder',
      img: assets.aloe,
      title: 'Pure Aloe Vera Powder by Exotic Veda: Your Natural Solution for Skin and Hair Care',
      description: 'Welcome To Exotic Veda',
      updateInfo: 'Click here to Learn Our Recipes and tips to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/aloevera-powder',
    },
  
 
 
  ]
  return (
    <div className="product-container" style={{padding:'4.4rem'}}>
      <img  src={assets.haircarebanner} style={{maxWidth:'100%'}} alt='Dieatary use '></img>
    <h1>Explore Our Products</h1>
    
    {/* Carousel component for mobile view */}
    {/* Grid display for desktop view */}
    <div className="product-grid2"  
 
    >
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={product.link}>
            <img src={product.img} alt={product.title} />
          </Link>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            {/* <p className="card-text">{product.description}</p> */}
            <p className="card-text" style={{ textAlign: 'center' }}>
              <small className="text-muted">
                <Link to={product.route}>{product.updateInfo}</Link>
              </small>
            </p>
            <a href={product.buyLink}>
              <button className="btn btn-primary">Buy Now</button>
            </a>
          </div>
        </div>
      ))}

      
    </div>
  </div>
  )
}

export default Haircare
