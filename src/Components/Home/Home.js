import React from "react";
import Carousel from '../Carousel.js';
 
import img1 from './Home-Assets/Untitled design (61).png'
import img2 from './Home-Assets/Sandalwood 2 banner.png'
import img3 from './Home-Assets/Exotic Veda (1).png'
import img4 from './Home-Assets/Collage 2-01.png'
import Contactus from '../Contactus/Contactus.js'
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
import Aboutus from '../AboutUs/Aboutus.js';
import Container from '../container/Container.js'
import Treatment from "../Product treatments/Treatment.js";
import  img from './Home-Assets/banner for amzon store.png'
import  img5 from './Home-Assets/BANNER FOR MENU BEST SELLERS EXOTIC VEDA.png'
import NewsletterSignup from "./NewsLetter.js";

const Home = () => {
    const images = [img,img5,img2,
        img4, img3, img1,

    ];
 
    return (
        <>
            {/* <Header /> */}
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
