import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { hennahairCareRecipes, hennaproductDetails } from './Recepisdata'; // Importing the recipe data
import Reciepicard from './Reciepicard';

const Hennapowder = () => {
  const [activeTab, setActiveTab] = useState('hairCare'); // State to track the active tab

  return (
    <>
      {/* Main container for Henna Powder product page */}
      <div style={{ marginTop: '4rem' }} className='Henna-Container'>

        {/* Product banner section */}
        <div style={{ display: 'flex', flexDirection: 'column' }} className='fo'>
          <a href={hennaproductDetails.buyNowLink}>
            <img src={hennaproductDetails.bannerImg} alt='Henna Powder Banner' style={{ maxWidth: '100%', minWidth: '100%' }} />
          </a>

          {/* Product images */}
          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
            {hennaproductDetails.images.slice(0, 2).map((imgSrc, index) => (
              <img src={imgSrc} alt={`Henna Powder ${index + 1}`} style={{ maxWidth: '50%', minWidth: '50%' }} key={index} />
            ))}
          </div>

          <div style={{ display: 'flex' }}>
            {hennaproductDetails.images.slice(2, 4).map((imgSrc, index) => (
              <img src={imgSrc} alt={`Henna Powder ${index + 1}`} style={{ maxWidth: '50%', minWidth: '50%' }} key={index} />
            ))}
          </div>

          {/* Product description */}
          <h1>Organic Henna Powder - Perfect for Hair Care & Natural Dye</h1>
          <ul>
            <li>ORGANIC HENNA POWDER: Experience the natural benefits of Henna with our 100% pure Henna Powder, perfect for strengthening hair and natural hair dyeing.</li>
            {hennaproductDetails.descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Henna Powder Uses for Different Hair Types</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="tabs">

                <button
                  className={setActiveTab && activeTab === 'hairCare' ? 'active' : ''}
                  onClick={() => setActiveTab('hairCare')}
                >
                  Tips For Hair Care
                </button>
                <button
                  className={setActiveTab && activeTab === 'skinCare' ? 'active' : ''}
                  onClick={() => setActiveTab('skinCare')}
                >
                  Tips For Skin Care
                </button>
              </div>
              <div className="recipes-container">
                {activeTab === 'hairCare' ? (
                  hennahairCareRecipes.map((recipe) => (
                    <Reciepicard recipe={recipe} key={recipe.id} />
                  ))
                ) : (
                  hennahairCareRecipes.map((recipe) => (
                    <Reciepicard recipe={recipe} key={recipe.id} />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <img src={hennaproductDetails.bannerImg} alt='Henna Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer' style={{ color: 'black' }}>
            <span>Disclaimer:</span> Use Henna Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hennapowder;
