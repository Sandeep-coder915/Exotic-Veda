import React, { useState } from 'react';
import { curryproductDetails, curryhairCareRecipes, currySkinCareRecipes } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard'
const Curryleafpowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab



  return (
    <>
      {/* backgroundColor: 'rgba(83,110,79,255)'  */}

      <div style={{ marginTop: '4rem', }} className='CurryLeaf-Container'>

        <div style={{ display: 'flex', flexDirection: 'column' }} className='fo'>
          <a href={curryproductDetails.buyNowLink}>
            <img src={curryproductDetails.bannerImg} alt='Curry Leaf Powder Banner' style={{ maxWidth: '100%', minWidth: '100%' }} />
          </a>

          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
            {curryproductDetails.images.slice(0, 2).map((imgSrc, index) => (
              <img src={imgSrc} alt={`Curry Leaf Powder ${index + 1}`} style={{ maxWidth: '50%', minWidth: '50%' }} key={index} />
            ))}
          </div>

          <div style={{ display: 'flex', }}>
            {curryproductDetails.images.slice(2, 4).map((imgSrc, index) => (
              <img src={imgSrc} alt={`Curry Leaf Powder ${index + 1}`} style={{ maxWidth: '50%', minWidth: '50%' }} key={index} />
            ))}
          </div>

          <h1>Natural hair cleanser that promotes healthy, shiny hair.</h1>
          <ul>
            <li>ORGANIC CURRY LEAVES POWDER: Revitalize Your Health Naturally With Our Curry Leaves Powder! This Green Superfood Helps Protect Your Heart And Liver, Boosts Your Immune System, And Combats Stress.</li>
            {curryproductDetails.descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="tabs">

          <button
            className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
            onClick={() => setActiveTab('skinCare')}
          >
            Tips For Hair Care
          </button>
          <button
            className={setActiveTab & activeTab === 'hairCare' ? 'active' : ''}
            onClick={() => setActiveTab('hairCare')}
          >
            Tips For Skin Care
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Curry Leaf Powder Uses for Hair Types</h1>
            <div className="recipes-container">
              {activeTab === 'skinCare' ? (
                curryhairCareRecipes.map((recipe) => (
                  <Reciepicard recipe={recipe} key={recipe.id} />
                ))
              ) : (
                currySkinCareRecipes.map((recipe) => (
                  <Reciepicard recipe={recipe} key={recipe.id} />
                ))
              )}

            </div>
          </div>


          <img src={curryproductDetails.bannerImg} alt='Curry Leaf Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer' style={{ color: 'black' }}><span>Disclaimer:</span> Use Curry Leaf Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>


    </>

  )
}

export default Curryleafpowder