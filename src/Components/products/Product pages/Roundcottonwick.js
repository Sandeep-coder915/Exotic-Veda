import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
const Roundcottonwick = () => {
  const images = [
    assets.wick,
    assets.wick2,
    assets.wick3,
    assets.wick3,
    assets.wick4,
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
            Round Cotton Wick With Brass Wick Holder - Traditional Brass Diya Wick Holder With Cotton Wick - Perfect Cotton Wick With Brass Holder For Oil Lamps & Diyas (Pack Of 500) </h1>

          <h2>About this item</h2>

          <ul style={{ textAlign: 'justify' }}>
            <li>Elegant Brass Oil Lamp Wick Holder: Elevate Your Spiritual Rituals With This Brass Oil Lamp Wick Holder With Cotton Wick. Crafted For Elegance, It Ensures A Steady And Serene Flame, Perfect For Meditation And Prayer Sessions.</li>

            <li>Traditional Cotton Wicks With Brass Holder: Experience The Charm Of Tradition With Round Cotton Wicks For Brass Holder. Ideal For Festive And Religious Occasions, These Wicks Offer A Clean, Long-Lasting Burn, Enhancing Your Spiritual Ambiance.</li>

            <li>
              Superior Brass Lamp Wick Holder: Embrace The Blend Of Durability And Purity With This Brass Lamp Wick Holder With Cotton Batti. Handcrafted For Quality, It's Perfect For Daily Pooja, Ensuring A Bright And Consistent Flame.
            </li>

            <li>Traditional Brass Wick Holder Set: Embrace Tradition With Our Set Of Traditional Cotton Wicks With Brass Wick Holder. This Combination Is Perfect For Creating A Serene And Spiritual Atmosphere During Pujas And Festivals, Offering A Timeless Aesthetic And Reliable Performance.</li>

            <li>Elegant Brass Diya Wick Holder: Illuminate Your Home With Our Elegant Brass Wick Holder With Round Cotton Wicks. Designed For Both Functionality And Beauty, This Holder Provides A Steady Flame And Adds A Touch Of Sophistication To Any Setting, Making It Ideal For Festive Occasions.</li>

          </ul>

        </div>

      </div >
      <button className='pppp'>Buy Now</button>




    </>
  )
}

export default Roundcottonwick
