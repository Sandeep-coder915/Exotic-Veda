import React from 'react'
import Carousel from '../Carousel.js';
import Header from '../Header/Header.js'
import  img1 from  './Untitled design (61).png'
import img2 from './Sandalwood 2 banner.png'
import  img3 from  './Exotic Veda (1).png'
import  img4 from  './Collage 2-01.png'
import Contactus from '../Contactus/Contactus.js'
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
import Aboutus from '../AboutUs/Aboutus.js';

const Home = () => {
    const images = [img2, 
  img4,img3,img1,
       
      ];
  return (
     <>
    
     <Carousel images={images} />
     <Cateogry/>
     <Product/>
 
 <Aboutus/>

     <Contactus/>

     
     </>
  )
}

export default Home
