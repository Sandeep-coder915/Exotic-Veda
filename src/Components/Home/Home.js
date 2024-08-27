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

const Home = () => {
    const images = [img,img5,img2,
        img4, img3, img1,

    ];
    // const [faqs, setFaqs] = useState([
    //     {
    //         question: "How many programmers does it take to screw a lightbulb?",
    //         answer:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    //         open: true
    //     },
    //     {
    //         question: "Who is the most awesome person?",
    //         answer: "You! The viewer!",
    //         open: false
    //     },
    //     {
    //         question:
    //             "How many questions does it take to makes a succesful FAQ Page?",
    //         answer: "This many!",
    //         open: false
    //     }
    // ]);

    // const toggleFAQ = index => {
    //     setFaqs(
    //         faqs.map((faq, i) => {
    //             if (i === index) {
    //                 faq.open = !faq.open;
    //             } else {
    //                 faq.open = false;
    //             }

    //             return faq;
    //         })
    //     );
    // };

    return (
        <>
            {/* <Header /> */}
            <Carousel images={images} />
            <Cateogry />

            <Product />
            <Container />
            <Treatment/>
            <Aboutus />
            <Contactus />


        </>
    )
}

export default Home
