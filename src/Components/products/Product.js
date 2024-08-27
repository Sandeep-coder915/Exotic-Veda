import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './producet.css';

import { assets } from './Assets/prodimg/assets';

// Array of product objects
const products = [
  {
    id: 1,
    link: '/products/aloevera-powder',
    img: assets.aloe,
    title: 'Pure Aloe Vera Powder by Exotic Veda: Your Natural Solution for Skin and Hair Care',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/aloevera-powder',
  },
  {
    id: 2,
    link: '/products/sandalwood-powder',
    img: assets.sandalwood,
    title: 'Pure Sandalwood Powder by Exotic Veda: Refresh, Rejuvenate, and Nourish Your Skin Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route:'/products/sandalwood-powder',
  },
  {
    id: 3,
    link: '/products/multani-mitti',
    img: assets.multani,
    title: 'Pure Multani Mitti by Exotic Veda: Detoxify, Purify, and Brighten Oily Skin',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/multani-mitti',
  },
  {
    id: 4,
    link: '/products/henna-powder',
    img:assets.henna ,
    title: 'Pure Henna Powder by Exotic Veda: Nourish, Strengthen, and Color Your Hair Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route:'/products/henna-powder',
  },
  {
    id: 5,
    link: '/products/curry-leaf-powder',
    img: assets.curryleaf,
    title: 'Curry Leaf Powder by Exotic Veda: Strengthen Roots and Reduce Hair Loss Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/curry-leaf-powder'
  },
  {
    id: 6,
    link: '/products/moringa-leaf-powder',
    img: assets.moringa,
    title: 'Moringa Leaf Powder by Exotic Veda: Natural Detox and Wellness Support for Vibrant Health',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route:'/products/moringa-leaf-powder'
  },
  {
    id: 7,
    link: '/products/beetroot-powder',
    img:  assets.beetroot,
    title: 'Pure Beetroot Powder by Exotic Veda: Add Natural Color and Nutrients to Your Smoothies',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 8,
    link: '/products/shikhakhai-powder',
    img: assets.shikhakhai,
    title: 'Pure Shikakai Powder by Exotic Veda: Promote Hair Growth and Scalp Health Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 9,
    link: '/products/lemongras-powder',
    img: assets.lemongrass,
    title: 'Lemongrass Powder by Exotic Veda: Boost Your Recipes with Fresh, Zesty Taste',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 10,
    link: '/products/triphala-powder',
    img: assets.triphala,
    title: 'Triphala Powder by Exotic Veda: Natural Detox and Wellness Support for Vibrant Health',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 11,
    link: '/products/jaamun-seed',
    img:  assets.jamuseed,
    title: 'amun Seed Powder by Exotic Veda: Promote Wellness with Natural Antioxidants and Nutrients',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route:  '/products/jaamun-seed',
  },
  
  {
    id: 12,
    link: '/products/alum-bar',
    img:  assets.amla,
    title: 'Alum Bar Powder by Exotic Veda: Minimize Pores and Soothe Skin Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route:  '/products/alum-bar',
  },
  {
    id: 12,
    link: '/products/amla-powder',
    img: assets.amla,
    title: 'Exotic Veda Amla Powder: Natural Solution for Healthy Hair, Scalp, and Skin',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route:'/products/amla-powder',
  },
 
];

const Product = ({assets}) => {
  return (
    <div className="product-container">
      <h1>Explore Our Products</h1>
      
      {/* Carousel component for mobile view */}
      

<div className="mobile-carousel">
  <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={true}
    showStatus={true}
    autoPlay={false}
    swipeable={true}
    emulateTouch={true}
    interval={5000}
  >
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <Link to={product.link}>
          <img src={product.img} alt={product.title} />
        </Link>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">{product.description}</p>
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
  </Carousel>
</div>

      {/* Grid display for desktop view */}
      <div className="product-grid">
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
  );
};
 


export default Product;
  