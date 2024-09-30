import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { moringaPowderUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';
const Moringaleafpowder = () => {
  const images = [
    assets.moringa2,
    assets.moringaback,
    assets.moringabowl,
    assets.moringause,
    assets.lemonbowl,
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
          Exotic Veda Moringa Leaf Powder Moringa Oleifera Vegan & Gluten Free Raw Sun Dried Oleifera Leaf Powder for Herbal Tea, Smoothies, Sauces, and Dips for Immune Health | 100% Natural, Non-GMO (100g) </h1>

          <h2>About this item</h2>

          <ul style={{textAlign:'justify'}}>
            <li>Rich in essential nutrients, Moringa Leaf Powder contains high levels of vitamins A, C, and E, as well as calcium, potassium, and iron.</li>
            <li>Moringa is a great plant-based source of protein, making it ideal for vegans and vegetarians seeking to enhance their protein intake.</li>
            <li>Known for its antioxidant properties, Moringa helps fight free radicals in the body, reducing oxidative stress and promoting overall well-being.</li>
            <li>Moringa supports healthy digestion by providing fiber that aids in detoxification and maintaining regular bowel movements.</li>
            <li>Helps in maintaining healthy blood sugar levels, making it a beneficial supplement for individuals looking to manage their glucose levels.</li>
            <li>Moringa is believed to support weight management by boosting metabolism and promoting fat breakdown.</li>
            <li>Acts as a natural energy booster, providing sustained energy throughout the day without the crash associated with caffeine.</li>
            <li>Supports immune function due to its rich content of vitamins and minerals, particularly vitamin C and antioxidants.</li>
            <li>Known for its anti-inflammatory properties, Moringa can help reduce inflammation in the body, supporting joint and bone health.</li>
            <li>Easy to incorporate into smoothies, teas, and other recipes, Moringa Leaf Powder is a convenient way to enhance your diet with essential nutrients.</li>
          </ul>

        </div>

      </div >
      <button className='pppp'>Buy Now</button>





      <div style={{ marginTop: '1rem', backgroundColor: ' rgba(162,179,138,255)' }} className='  Lemongrass-contanienr'>

        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src={assets.moringabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          {/* <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
      <img src={ assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />

      <img src={assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
    </div> */}
          <div style={{ marginBottom: '0', padding: '0' }}>
            {/* 
      <img src={assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
      <img src={assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} /> */}

            <img src={assets.moring1} alt='Moringa-leaf-powder' style={{ maxWidth: '100%', marginBottom: '0', minWidth: '100%' }} ></img>

          </div>





        </div>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Moringa Leaf Powder use for  Diet </h1>
            <div className="recipes-container">
              {moringaPowderUses.map((recipe) => (
                < Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <img src={assets.lemonstrexh} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Moringa Leaf Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>

    </>


  )
}

export default Moringaleafpowder
