import React from "react";
 
import Carousel from '../Carousel.js';
 
import banner1  from './Home-Assets/caro2.png'
import img2 from './Home-Assets/Sandalwood 2 banner.png'
 
import img4 from './Home-Assets/Collage 2-01.png'
import Contactus from '../Contactus/Contactus.js'
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
import Aboutus from '../AboutUs/Aboutus.js';
import Container from '../container/Container.js'
import Treatment from "../Product treatments/Treatment.js";
import  img from './Home-Assets/banner for amzon store.png'
import  img5 from './Home-Assets/BANNER FOR MENU BEST SELLERS EXOTIC VEDA.png'
// import NewsletterSignup from "./NewsLetter.js";

const Home = () => {
    const images = [banner1,img,img5,img2,
        img4,   

    ];
 
    return (
        <>
            {/* <Header /> */}
            {/* <img src={imglogo} style={{ maxWidth: '100%', minWidth: '100%', marginTop:'4.3rem'}} alt="Logo" /> */}
    
            <Carousel images={images} />
            <Cateogry />

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
