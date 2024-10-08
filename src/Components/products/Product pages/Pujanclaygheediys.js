import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';

const Pujanclaygheediys = () => {
  const images = [
    assets.poojancaly,
    assets.pojjaclay2,
    assets.pojjaclay3,
    assets.pojjaclay4,
    assets.pojjaclay5,
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  
  return (
    <>
      <div className="product-page1"   >
        <div className="image-gallery">
          {/* Side images */}
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                // style={{maxWidth:'50%',minWidth:'50%'}}
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)

                }
              />
            ))}
          </div>

          {/* Main image with hover effect */}
          <div className="main-image-container">
            <img
              src={currentImage}
              alt="Main product"
              className="main-image"
            />
          </div>
        </div>

        {/* Product details */}
        <div className="product-details">
          <h1 style={{ textAlign: 'justify', fontSize: '18px' }}>
            Handcrafted Pujan Clay Diya Set Of 15 - Eco-Friendly Homemade Diya With Premium Cow Ghee Wick For Spiritual Rituals, And Religious Ceremonies, Meditation.</h1>

          <h2>About this item</h2>

          <ul style={{ textAlign: 'justify' }}>
            <li>  Handcrafted Elegance: Elevate Your Home Decoration With Our PUJAN Clay Diya Set. These Handcrafted Clay Diyas Are Perfect For Indian Home Decor And Offering A Touch Of Tradition.</li>
            <li>Versatile Lighting: Ideal For Diwali Diyas, Pooja Diya, And Set Includes Premium Ghee Wicks. These Ghee Lamps Serve As Excellent Diwali Diya Craft Items, Enhancing The Festival Of Lights Atmosphere. </li>
            <li>
              Ideal For Diwali Lighting: Celebrate The Festival Of Lights With Our Premium Clay Diya Set. These Diwali Diyas Are Crafted To Perfection, Providing A Serene And Aesthetic Meditation Lamp Glow. Perfect For Diwali Lighting And Enhancing Your Festive Decorations.
            </li>
            <li>Cultural Heritage: Celebrate Indian Festivals With Our Traditional Clay Diya Set. ,Making Them An Essential Part Of Your Diwali Pooja Items And Festive Decorations.</li>
            <li>Spiritual And Meditation Lamp: Our Clay Diyas Are Not Just For Festivals; They Make Excellent Meditation Lamps Too. The Ghee Diya Provides A Calming Light, Perfect For Meditation And Yoga Sessions. Embrace The Ghee Batti Benefits And Elevate Your Spiritual Practices.</li>

          </ul>

        </div>

      </div >
      <button className='pppp'>Buy Now</button>




    </>
  )
}

export default Pujanclaygheediys
