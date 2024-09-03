import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { assets } from '../../products/Assets/prodimg/assets';
import './skincare.css'
const Haircare = () => {{
  const products = [
    {
      id: 1,
      link: '/products/aloevera-powder',
      img: assets.aloe,
      title: 'Pure Aloe Vera Powder by Exotic Veda: Your Natural Solution for Skin and Hair Care',
      description: 'Welcome To Exotic Veda',
      updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/aloevera-powder',
    },
     
    {
      id: 2,
      link: '/products/multani-mitti',
      img: assets.multani,
      title: 'Pure Multani Mitti by Exotic Veda: Detoxify, Purify, and Brighten Oily Skin',
      description: 'Welcome To Exotic Veda',
            updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/multani-mitti',
    },
  

    {
      id: 3,
      link: '/products/beetroot-powder',
      img: assets.beetroot,
      title: 'Pure Beetroot Powder by Exotic Veda: Add Natural Color and Nutrients to Your Smoothies',
      description: 'Welcome To Exotic Veda',
            updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/beetroot-powder'
    },
    {
      id: 4,
      link: '/products/lemongras-powder',
      img: assets.lemongrass,
      title: 'Lemongrass Powder by Exotic Veda: Boost Your Recipes with Fresh, Zesty Taste',
      description: 'Welcome To Exotic Veda',
      updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/lemongras-powder'
    },

    {
      id: 5,
      link: '/products/amla-powder',
      img: assets.amla,
      title: 'Exotic Veda Amla Powder: Natural Solution for Healthy Hair, Scalp, and Skin',
      description: 'Welcome To Exotic Veda',
            updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/amla-powder',
    },
    {
      id:6,
      link: '/products/jaamun-seed',
      img: assets.jamuseed,
      title: 'amun Seed Powder by Exotic Veda: Promote Wellness with Natural Antioxidants and Nutrients',
      description: 'Welcome To Exotic Veda',
      updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/jaamun-seed',
    },

  ];
  return (

    <div style={{ marginTop: '4.2rem' }}>
      <img src={assets.haircarebanner} style={{ maxWidth: '100%' }} />

      <h1 className="text-center mb-4">Explore Our Products</h1>
      <div className="container mt-5">

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <Link to={product.link}>
                  <img src={product.img} className="" alt={product.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      <Link to={product.link}>{product.updateInfo}</Link>
                    </small>
                  </p>
   <Link to={product.link}><button className='btn'>Buy Now</button></Link> 
                 
                    
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

  )
}
}

export default Haircare
