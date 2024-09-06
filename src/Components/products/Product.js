import React from 'react';
import { Link } from 'react-router-dom';
import SkincareSection from './Transitiontext';  
import './producet.css';

import { assets } from './Assets/prodimg/assets';

// Array of product objects
const products = [
  {
    id: 1,
    link: '/products/aloevera-powder',
    img: assets.aloe,
    title: 'Pure Aloe Vera Powder  : Your Natural Solution for Skin and Hair Care',
    description: 'Refresh your skin and hair with our pure Aloe Vera Powder, known for its cooling and moisturizing benefits. Ideal for face masks and hair care!',
    updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/aloevera-powder',
  },
  {
    id: 2,
    link: '/products/sandalwood-powder',
    img: assets.ee,
    title: 'Pure Sandalwood Powder  Refresh,  Nourish Your Skin Naturally',
    description: ' Elevate your skincare with our pure Sandalwood Powder, known for its soothing properties, reducing blemishes, and enhancing your skin’s natural radiance.',
          updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/sandalwood-powder',
  },
  {
    id: 3,
    link: '/products/multani-mitti',
    img: assets.multani,
    title: 'Pure Multani Mitti   Detoxify, Purify, and Brighten Oily Skin',
    description: 'Naturally cleanse and refresh your skin with our Multani Mitti Powder. It helps absorb excess oil, reduce acne, and brighten your complexion.',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/multani-mitti',
  },
  {
    id: 4,
    link: '/products/henna-powder',
    img: assets.henna,
    title: 'Pure Henna Powder   Nourish, Strengthen, and Color Your Hair Naturally',
    description: 'Enhance your hair’s health and color with our pure Henna Powder. It provides a natural tint, conditions hair, and promotes a healthy scalp',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/henna-powder',
  },
  {
    id: 5,
    link: '/products/curry-leaf-powder',
    img: assets.curryleaf,
    title: 'Curry Leaf Powder   Strengthen Roots and Reduce Hair Loss Naturally',
    description: 'Boost your hair health with our natural Curry Leaf Powder. It helps reduce hair fall, promotes growth, and adds shine to your hair.',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/curry-leaf-powder'
  },
  {
    id: 6,
    link: '/products/moringa-leaf-powder',
    img: assets.moringa,
    title: 'Moringa Leaf Powder   Natural Detox and Wellness Support for Vibrant Health',
    description: 'Supercharge your health with our Moringa Leaf Powder. Packed with vitamins and minerals, it boosts energy, supports immunity, and enhances overall wellness.',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/moringa-leaf-powder'
  },
  {
    id: 7,
    link: '/products/beetroot-powder',
    img: assets.beetroot,
    title: 'Pure Beetroot Powder   Add Natural Color and Nutrients to Your Smoothies',
    description: 'nergize your body with our Beetroot Powder. Rich in nutrients, it supports stamina, enhances circulation, and adds a natural, vibrant color to your smoothies and dishes.',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route:'/products/beetroot-powder'
  },
  {
    id: 8,
    link: '/products/shikhakhai-powder',
    img: assets.shikhakhai,
    title: 'Pure Shikakai Powder   Promote Hair Growth and Scalp Health Naturally',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 9,
    link: '/products/lemongras-powder',
    img: assets.lemongrass,
    title: 'Lemongrass Powder   Boost Your Recipes with Fresh, Zesty Taste',
    description: 'Refresh your senses with our pure Lemongrass Powder. Perfect for tea, skincare, and aromatherapy, it offers a zesty, calming experience.',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/lemongras-powder'
  },
  {
    id: 10,
    link: '/products/triphala-powder',
    img: assets.triphala,
    title: 'Triphala Powder   Natural Detox and Wellness Support for Vibrant Health',
    description: 'Revitalize your health with our Triphala Powder, a traditional blend of three powerful fruits. It supports digestion, detoxifies the body, and promotes overall wellness.',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/triphala-powder'
  },
  {
    id: 11,
    link: '/products/jaamun-seed',
    img: assets.jamuseed,
    title: 'jamun Seed Powder   Promote Wellness with Natural Antioxidants and Nutrients',
    description: 'Support your health with our Jamun Seed Powder. Known for its antioxidant properties, it helps manage blood sugar levels and boosts digestion',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/jaamun-seed',
  },


  {
    id: 12,
    link: '/products/amla-powder',
    img: assets.amla,
    title: 'Exotic Veda Amla Powder: Natural Solution for Healthy Hair, Scalp, and Skin',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/amla-powder',
  },
  {
    id: 3,
    link: '/products/alum-bar',
    img: assets.alum ,
    title: 'Alum Bar Powder   Minimize Pores and Soothe Skin Naturally',
    description: 'Experience natural freshness with our Alum Bar, perfect for tightening pores, soothing skin, and acting as a gentle, chemical-free deodorant.',
          updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/alum-bar',
  },

];

const Product = ( ) => {
  return (
    <div style={{ marginTop: '4.2rem' }}>
    {/* <img src={assets.} style={{ maxWidth: '100%' }} /> */}

    <h1 className="text-center mb-4">Explore Our Products</h1>
 {/* <div>
  <SkincareSection/>
 </div> */}
    <div className="container2 mt-5">

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
                <Link to={product.buyLink}><button className='btn'>Buy Now</button></Link> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};



export default Product;
