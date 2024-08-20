import React from 'react'
import Carousel from '../Carousel.js';
import Header from '../Header/Header.js'
import  img1 from  './rr.png'
 
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
const Home = () => {
    const images = [
        
         img1,
        'https://via.placeholder.com/800x400/33ff57/fff',
        'https://via.placeholder.com/800x400/5733ff/fff',
      ];
  return (
     <>
     <Header/>
     <Carousel images={images} />
     <Cateogry/>
     <Product/>
 

     
     </>
  )
}

export default Home
