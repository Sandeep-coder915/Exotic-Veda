import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { ShikaahairCareRecipes } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard'
const Shikakkhai = () => {
  const images = [
    assets.shika1,
    assets.shika2,
    assets.shika3,
    assets.shika5,
    assets.shika4,
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
            Organic Shikakai Powder Natural Hair Cleanser and Conditioner, Non-GMO, Herbal Formula for Strong, Shiny Hair, 100g</h1>
          <h2>About this item</h2>
          <ul style={{ textAlign: 'justify', }} >
            <li>
              Crafted from pure and organic shikakai pods, our shikakai powder offers a natural and gentle solution for hair care.
              Known for its rich nutrients, shikakai has been used in Ayurveda for centuries to promote hair growth, reduce dandruff,
              and strengthen the hair from root to tip.
            </li>
            <li>
              Shikakai powder, when combined with amla powder, creates a nourishing hair mask that works wonders on dry, damaged hair.
              This Ayurvedic blend, enhanced by reetha powder, bhringraj powder, and fenugreek oil, provides deep nourishment for hair growth,
              making it a preferred choice for women seeking natural hair care solutions.
            </li>
            <li>
              The inclusion of neem powder in this mix helps combat dandruff, while hibiscus powder and amla oil work together
              to improve hair texture, add volume, and strengthen the hair.
            </li>
            <li>
              This versatile hair care powder can be used to create effective masks that target damaged hair, promoting healthy growth
              and scalp health.
            </li>
            <li>Derived from natural Shikakai pods, rich in essential nutrients for nourishing and strengthening hair.</li>
            <li>Acts as a gentle cleanser that enhances hair texture, leaving it soft and manageable.</li>
            <li>Known for its ability to reduce dandruff, soothe the scalp, and promote healthier hair growth.</li>
            <li>100% pure and chemical-free, ideal for DIY hair care routines and suitable for all hair types.</li>

          </ul>
        </div>

      </div >
      <button className='pppp'>Buy Now</button>




      <div style={{ marginTop: '4rem', }} className='shikakai-contanienr'>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src={assets.shikabannersttre} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
        </div>
        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
            <div className="recipes-container">
              {ShikaahairCareRecipes.map((recipe) => (
                <Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>
          <p className='disclaimer'><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>

    </>
  );
};

export default Shikakkhai;
