import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';

const Cowgheediya = () => {
  const images = [
    assets.diya1,
    assets.cowghee1,
    assets.cowghee2,
    assets.cowghee3,
    assets.cowghee4,
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
            Cow Ghee Batti Cotton Wick - Organic, Handcrafted, Non-Toxic, Puja Items | Ghee Wicks For Pooja | Long-Lasting, Aromatic Ghee Diya Wicks For Pooja | Eco-Conscious, Clean-Burning Pack Of 50
       </h1>
          <h2>About this item</h2>

          <ul style={{textAlign:'justify'}}>
            <li>100% Cotton Wick: Our Wicks Are Made From High-Quality Cotton, Ensuring Longevity And A Smoke-Free Flame.</li>

            <li>Eco-Friendly & Sustainable: Our Wicks Are Completely Natural, Biodegradable, And Eco-Friendly, Making Them Safe For You And The Environment.</li>

            <li>Aromatic And Safe: Experience The Aromatic Burning Of Our Ghee Cotton Wicks, Which Maintain Flame Consistency And High Absorbency. These Cotton Wick For Diya Are Safe For Indoor Use, Providing A Fragrance-Friendly And Positive Energy Atmosphere.</li>

            <li>Traditional And Cultural Significance: Our Traditional Cow Ghee Wick Holds Cultural Significance And Is Perfect For Ritualistic Use. These Cotton Wick Batti Are Designed To Be Used In Ghee Diya, Enhancing The Spiritual Benefits And Traditional Aesthetics Of Your Puja Kit.</li>
            <li>Religious Rituals: Commonly Used In Hindu Pujas (Prayer Rituals) For Lighting Lamps (Diyas).</li>
             
          </ul>

        </div>

      </div >
      <button className='pppp'>Buy Now</button>



 
 </>
  )
}

export default Cowgheediya
