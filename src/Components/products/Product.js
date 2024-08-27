import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './producet.css';
import img111 from './Assets/Aloe Vera  1 img  .png';
import img11 from './Assets/sandalwood front 1 300.png';
import sandalwoood from './Assets/sadalwood2.jpg';
import { assets } from './Assets/prodimg/assets';

// Array of product objects
const products = [
  {
    id: 1,
    link: '/products/thriphala',
    img: img111,
    title: 'Aloevera Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/aloevera-powder'
  },
  {
    id: 2,
    link: '/products/sandalwood',
    img: sandalwoood,
    title: 'Aloevera Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/sandalwood'
  },
  {
    id: 3,
    link: '/products/thriphala',
    img: img111,
    title: 'Aloevera Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/recipe-aloe-vera'
  },
  {
    id: 4,
    link: '/products/thriphala',
    img: img111,
    title: 'Aloevera Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/recipe-aloe-vera'
  },
  {
    id: 5,
    link: '/products/curry-leaf-powder',
    img: img11,
    title: 'TCurry Leaf Powder by Exotic Veda: Strengthen Roots and Reduce Hair Loss Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Last updated 3 mins ago',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 6,
    link: '/products/moringa-leaf',
    img: img11,
    title: 'Moringa Leaf Powder by Exotic Veda: Natural Detox and Wellness Support for Vibrant Health',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 7,
    link: '/products/beetroot-powder',
    img: img11,
    title: 'Pure Beetroot Powder by Exotic Veda: Add Natural Color and Nutrients to Your Smoothies',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 8,
    link: '/products/shikhakhai-powder',
    img: img11,
    title: 'Pure Shikakai Powder by Exotic Veda: Promote Hair Growth and Scalp Health Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 9,
    link: '/products/lemongras-powder',
    img: img11,
    title: 'Lemongrass Powder by Exotic Veda: Boost Your Recipes with Fresh, Zesty Taste',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 10,
    link: '/products/triphala-powder',
    img: img11,
    title: 'Triphala Powder by Exotic Veda: Natural Detox and Wellness Support for Vibrant Health',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 11,
    link: '/products/jaamun-seed',
    img: img11,
    title: 'amun Seed Powder by Exotic Veda: Promote Wellness with Natural Antioxidants and Nutrients',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  
  {
    id: 12,
    link: '/products/alum-bar',
    img: img11,
    title: 'Alum Bar Powder by Exotic Veda: Minimize Pores and Soothe Skin Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 12,
    link: '/products/amla-powder',
    img: img11,
    title: 'Exotic Veda Amla Powder: Natural Solution for Healthy Hair, Scalp, and Skin',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipes to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
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
  