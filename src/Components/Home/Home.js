import React from 'react'
import Carousel from '../Carousel.js';
import Header from '../Header/Header.js'
import  img1 from  './Untitled design (61).png'
import  img3 from  './Exotic Veda (1).png'
import Contactus from '../Contactus/Contactus.js'
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
import Aboutus from '../AboutUs/Aboutus.js';
const Home = () => {
    const images = [
      img1,
        'data:image/jpeg;base64,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',
       img3,
        'https://img.freepik.com/free-vector/green-tropical-leaves-copy-space-background_23-2148546193.jpg?size=626&ext=jpg',
        'https://via.placeholder.com/800x400/5733ff/fff',
      ];
  return (
     <>
    
     <Carousel images={images} />
     <Cateogry/>
     <Product/>
 {/* <Aboutus/> */}
     <Contactus/>

     
     </>
  )
}

export default Home
