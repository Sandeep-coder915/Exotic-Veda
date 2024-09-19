import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { beetrootProductDetails, beetrootDietaryRecipes, beetrootSkinCareRecipes } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';

const Beetroortpowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  return (
    <>
      {/* Main container for Beetroot Powder product page */}
      <div style={{ marginTop: '4rem' }} className='Beetroot-Container'>

        {/* Product banner section */}
        <div style={{ display: 'flex', flexDirection: 'column' }} className='fo'>
          <a href={beetrootProductDetails.buyNowLink}>
            <img src={beetrootProductDetails.bannerImg} alt='Beetroot Powder Banner' style={{ maxWidth: '100%', minWidth: '100%' }} />
          </a>

          {/* Product images */}
          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
            {beetrootProductDetails.images.slice(0, 2).map((imgSrc, index) => (
              <img src={imgSrc} alt={`Beetroot Powder ${index + 1}`} style={{ maxWidth: '50%', minWidth: '50%' }} key={index} />
            ))}
          </div>

          <div style={{ display: 'flex' }}>
            {beetrootProductDetails.images.slice(2, 4).map((imgSrc, index) => (
              <img src={imgSrc} alt={`Beetroot Powder ${index + 1}`} style={{ maxWidth: '50%', minWidth: '50%' }} key={index} />
            ))}
          </div>

          {/* Product description */}
          <h1>Organic Beetroot Powder - Perfect for Skin & Dietary Uses</h1>
          <ul>
            <li>ORGANIC BEETROOT POWDER: Boost your health and skincare routine with our 100% natural Beetroot Powder, rich in antioxidants and vitamins!</li>
            {beetrootProductDetails.descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
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
