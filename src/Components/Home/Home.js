import React, { useState } from "react";
import Carousel from '../Carousel.js';
import Header from '../Header/Header.js'
import img1 from './Untitled design (61).png'
import img2 from './Sandalwood 2 banner.png'
import img3 from './Exotic Veda (1).png'
import img4 from './Collage 2-01.png'
import Contactus from '../Contactus/Contactus.js'
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
import Aboutus from '../AboutUs/Aboutus.js';
import Container from '../container/Container.js'
import FAQ from '../FAQ/FAQ.js'
const Home = () => {
    const images = [img2,
        img4, img3, img1,

    ];
    const [faqs, setFaqs] = useState([
        {
            question: "How many programmers does it take to screw a lightbulb?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
            open: true
        },
        {
            question: "Who is the most awesome person?",
            answer: "You! The viewer!",
            open: false
        },
        {
            question:
                "How many questions does it take to makes a succesful FAQ Page?",
            answer: "This many!",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <>

            <Carousel images={images} />
            <Cateogry />
            <Container />
            <Product />
            <Aboutus />
            {/* <div className="faqs">
                {faqs.map((faq, index) => (
                    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
            </div> */}


            <Contactus />


        </>
    )
}

export default Home
