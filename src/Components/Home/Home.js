import React from "react";
 
import Carousel from '../Carousel.js';
 
import banner1  from './Home-Assets/caro2.png'
 
import img33 from './Home-Assets/Skincare Beauty Product Features Banner Facebook Cover (2).png'
import img34 from './Home-Assets/Skincare Beauty Product Features Banner Facebook Cover (1).png'
 
import Contactus from '../Contactus/Contactus.js'
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
import Aboutus from '../AboutUs/Aboutus.js';
import Container from '../container/Container.js'
import Treatment from "../Product treatments/Treatment.js";
import  img from './Home-Assets/banner for amzon store.png'
import  img5 from './Home-Assets/BANNER FOR MENU BEST SELLERS EXOTIC VEDA.png'
import { assets } from "../products/Assets/prodimg/assets.js";
// import NewsletterSignup from "./NewsLetter.js";

const Home = () => {
    const images = [
        
        img34,
        img33 ,
        img,
        img5, 
        banner1,

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
