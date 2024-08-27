import React from 'react';
import { Link } from 'react-router-dom';
import './producet.css';
import img1 from './Assets/exe.png';
import img11 from './Assets/sandalwood front 1 300.png';
import img111 from './Assets/Aloe Vera  1 img  .png';
import img12 from './Assets/sandalwood front 2 300.png';
import img2 from './Assets/Untitled design (66).png';
import triphala2 from './Assets/Triphala  2nd img  .png';
import triphala1 from './Assets/Untitled design (70).png';

const products = [
  {
    id: 1,
    link: '/products/thriphala',
    img: img111,
    title: 'Aloevera Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Learn Our Recipeies to Use For diffrent diffrent Purpose ',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/thriphala'
  },
  {
    id: 2,
    link: '/products/thriphala',
    img: img111,
    title: 'Aloevera Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Click me to See Receipes',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products'
  },
  {
    id: 3,
    link: '/products/thriphala',
    img: img111,
    title: 'Aloevera Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Last updated 3 mins ago',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/recipe-aloe-vera'
  },
  {
    id: 4,
    link: '/products/thriphala',
    img: img111,
    title: 'Aloevera Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Last updated 3 mins ago',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/recipe-aloe-vera'
  },
  {
    id: 5,
    link: '/products/triphala',
    img: img11,
    title: 'Triphala Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Last updated 3 mins ago',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 6,
    link: '/products/triphala',
    img: img11,
    title: 'Triphala Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Last updated 3 mins ago',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 7,
    link: '/products/triphala',
    img: img11,
    title: 'Triphala Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Last updated 3 mins ago',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 8,
    link: '/products/triphala',
    img: img11,
    title: 'Organic Triphala Powder for Men & Women',
    description: 'Welcome To Exotic Veda',
    updateInfo: 'Last updated 3 mins ago ',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera' 
  }
];

const Product = () => {
  return (
    <div className="product-container">
      <h1>Explore Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={product.link}>
              <img src={product.img} alt={product.title} />
            </Link>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-text">{product.description}</p>
              <p className="card-text" style={{textAlign:'center'}}>
                <small className="text-muted">
                  {/* Link to the dynamic route for each product */}
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
 






