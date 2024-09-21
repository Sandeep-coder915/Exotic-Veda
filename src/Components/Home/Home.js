import React from "react";
 
import Carousel from '../Carousel.js';
 
 
 
 
 
import Contactus from '../Contactus/Contactus.js'
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
import Aboutus from '../AboutUs/Aboutus.js';
import Container from '../container/Container.js'
import Treatment from "../Product treatments/Treatment.js";
 
 
import { assets } from "../products/Assets/prodimg/assets.js";

// import NewsletterSignup from "./NewsLetter.js";

const Home = () => {
    const images = [
      assets.homebanner1,
      assets.homebanner2,
        assets.homebanner3 ,
     assets.homebanner4,
       
    ];
 
    return (
        <>
            {/* <Header /> */}
            {/* <img src={imglogo} style={{ maxWidth: '100%', minWidth: '100%', marginTop:'4.3rem'}} alt="Logo" /> */}
    
            <Carousel images={images} />
            <Cateogry />
            {/* <div style={{display:'flex',flexDirection:'column',gap:'0'}}> */}
<img src={assets.collage} style={{maxWidth:'100%',minWidth:'100%'}}></img>
{/* <img src={assets.collage } style={{maxWidth:'100%',minWidth:'100%'}}></img></div> */}
            <Product />
            <Container />
            <Treatment/>
            {/* <NewsletterSignup/> */}
            <Aboutus />
            <Contactus />


        </>
    )
}

export default Home
