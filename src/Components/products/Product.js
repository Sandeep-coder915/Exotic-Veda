import React from 'react';
import { Link } from 'react-router-dom';
import { products } from './Product pages/Recepisdata.js'
import './producet.css';
import { FaArrowRight } from 'react-icons/fa'; 
import { assets } from './Assets/prodimg/assets';

// Array of product objects


const Product = () => {
  return (
    <div style={{ marginTop: '4.2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        <h1 className="text-center mb-4">Explore Our Products</h1>
        <img src={assets.collage} style={{ maxWidth: '100%', minWidth: '100%' }}></img>
        <div className="container2 mt-5">

          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <Link to={product.link}>
                    <img src={product.img} className="" alt={product.title} />
                  </Link>
                  <div className="card-body">

                    <Link to={product.link}>
                      <h5 className="card-title">{product.title}</h5
                      ></Link>
                    <Link to={product.link}>
                      <p className="card-text">
                        {product.description}

                      </p></Link>
                    <p className="card-text">
                      <small className="text-muted" style={{fontSize:'14px'}}>
                        <Link to={product.link}>{product.updateInfo }  <FaArrowRight size={10} marginTop='100px' color="blue" style={{ marginLeft: '8px' }} /></Link>
                      </small>
                    </p>
                    <Link to={product.buyLink}><button className='btn'>Buy Now</button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div></div>
  );
};



export default Product;
