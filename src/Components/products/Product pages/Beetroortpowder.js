import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { beetrootProductDetails, beetrootDietaryRecipes, beetrootSkinCareRecipes } from './Recepisdata'; // Import the 
import Reciepicard from './Reciepicard';

const Beetroortpowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab
  const images = [
    assets.betroot,
    assets.beetrrotuse1,
    assets.beetrootbenefits,
    assets. beetrrotuse2,
    assets.beetrootuse3,
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

          <ul style={{ textAlign: 'justify' }}>
            <li>    100% Natural & Non-Gmo: Discover The Powerful Benefits Of Beetroot With Our 100% Natural, Non-GMO Beetroot Powder. Packed With Essential Nutrients, This Powder Is Made From Premium-Quality Beets To Ensure That You Receive The Maximum Health Benefits In Every Serving. No Additives, Preservatives, Or Artificial Colors—Just Pure Beetroot Goodness.</li>
            <li>    Rich In Antioxidants & Nitrates: Beetroot Is Known For Being High In Antioxidants And Nitrates, Which Can Help Improve Blood Circulation, Support Healthy Blood Pressure Levels, And Enhance Athletic Performance. Whether You're Looking To Boost Your Workout Recovery Or Improve Overall Wellness, Beetroot Powder Is A Nutrient Powerhouse..</li>
            <li>Known for its antioxidant properties, Moringa helps fight free radicals in the body, reducing oxidative stress and promoting overall well-being.</li>
            <li>    Easy To Use: Add A Tablespoon Of Beetroot Powder To Smoothies, Juices, Or Baked Goods For A Nutritious Boost. You Can Also Mix It With Yogurt For A Face Mask To Brighten The Skin, Or With Water And Apply It To Your Scalp To Promote Healthy Hair Growth. Its Versatility Makes It A Must-Have In Your Kitchen And Beauty Routine.</li>
            <li>    Boosts Immunity & Detoxifies: With Its High Levels Of Vitamin C, Beetroot Powder Aids In Strengthening The Immune System And Promoting Detoxification. Regular Consumption Helps In Flushing Out Toxins, Improving Skin Health, And Providing A Natural Glow. It's A Great Addition To Your Daily Health And Beauty Routine.    </li>
            <li>Acts As A Natural Energy Booster, Providing Sustained Energy Throughout The Day Without The Crash Associated With Caffeine.</li>
            <li>Supports Immune Function Due To Its Rich Content Of Vitamins And Minerals, Particularly Vitamin C And Antioxidants.</li>
            <li>Known For Its Anti-Inflammatory Properties, Moringa Can Help Reduce Inflammation In The Body, Supporting Joint And Bone Health.</li>


          </ul>
        </div>

      </div >
      <button className='pppp'>Buy Now</button>






      <div style={{ marginTop: '1rem' }} className='Beetroot-Container'>

        <div  > {/* Product banner section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }} className='fo'>
            <a href={beetrootProductDetails.buyNowLink}>
              <img src={beetrootProductDetails.bannerImg} alt='Beetroot Powder Banner' style={{ maxWidth: '100%', minWidth: '100%' }} />
            </a>
            <img src={assets.beetbann} alt='beetroot  powder ' style={{ maxWidth: '100%', minWidth: '100%' }}></img>
          </div>

          <h1>Organic Beetroot Powder - Perfect for Skin & Dietary Uses</h1>

        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Beetroot Powder Uses for Different Skin Types</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="tabs">

                <button
                  className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
                  onClick={() => setActiveTab('skinCare')}
                >
                  Tips For Skin Care
                </button>
                <button
                  className={setActiveTab & activeTab === 'hairCare' ? 'active' : ''}
                  onClick={() => setActiveTab('hairCare')}
                >
                  Tips For The Dietcare
                </button>
              </div>
              <div className="recipes-container">
                {activeTab === 'skinCare' ? (
                  beetrootSkinCareRecipes.map((recipe) => (
                    <Reciepicard recipe={recipe} key={recipe.id} />
                  ))
                ) : (
                  beetrootDietaryRecipes.map((recipe) => (
                    <Reciepicard recipe={recipe} key={recipe.id} />
                  ))
                )}
              </div></div>
          </div>

          {/* Disclaimer */}
          <img src={beetrootProductDetails.bannerImg} alt='Beetroot Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer' style={{ color: 'black' }}>
            <span>Disclaimer:</span> Use Beetroot Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Beetroortpowder;
