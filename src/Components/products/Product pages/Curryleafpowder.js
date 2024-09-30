import React, { useState } from 'react';
import {   curryhairCareRecipes, currySkinCareRecipes } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard'
import { assets } from '../Assets/prodimg/assets';
const Curryleafpowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  const images = [
    assets.Curryfront , // Main image
    // Main image
   assets. curryback,
    assets. Curryfetures, // Main image
    assets.Currybenefits,
   
    assets.curryuse,
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
            Organic Curry Leaf Powder - Kadi Patta, Rich Nutrients, Culinary & Medicinal Uses, Promotes Hair Growth, Reduces Hair Fall & Graying, Skin Care, Regulates Blood Quality, Boosts Immunity
          </h1>

          <h2>About this item</h2>
          <ul style={{ textAlign: 'justify', fontSize: '14px' }}>

            <li>Organic And Nutrient-Rich: Our Curry Leaf Powder, Also Known As Kadi Patta, Is Organic And Packed With Essential Nutrients. Complement Your Dishes With The Goodness Of Cinnamon Powder, Arrowroot Powder, Turmeric Powder, Curry Powder, And Cumin Powder For A Wholesome Meal.
            </li>
            <li>Promotes Hair Growth: Harness The Power Of This Curry Leaf Powder To Promote Hair Growth And Reduce Hair Fall. Blend It With Garam Masala, Turmeric Powder Organic, And Ginger Powder For An Effective Herbal Remedy That Benefits Your Scalp And Hair Health.
            </li>
            <li>Boosts Immunity: Keep Your Immune System Strong With Our Curry Leaf Powder. Pair It With Garlic Powder, Onion Powder, And Chili Powder For A Potent Blend. Ideal For Making Golden Milk, Curry Paste, And Other Immunity-Boosting Concoctions.</li>
            <li>Supports Skin Health: Improve Your Skin Health Naturally With Our Curry Leaf Powder. Combine It With Organic Garlic Powder, Japanese Curry, And Curry Leaves For A Rejuvenating Skin Care Regimen. Known For Its Anti-Aging Properties And Ability To Reduce Blemishes.
            </li>
            <li>Promotes Hair Health, Prevents Graying: Curry Leaves Are A Rich Source Of Beta-Carotene, Antioxidants, And Proteins. These Essential Compounds Work Together To Prevent Premature Hair Graying, Strengthen Hair Follicles, And Ensure Your Tresses Stay Vibrant And Healthy. Plus, It's An All-Natural Remedy, Free From The Harsh Chemicals Found In Many Hair Care Products.</li>
            <li>Various Health Benefits: Thanks To Its Fiber Content And Carbazole Alkaloids. These Compounds Work Their Magic By Improvising Cholesterol Levels And Regulating Blood Quality, Helping You Maintain A Healthy, Happy Body.</li>

          </ul>
        </div>

      </div >
      <button className='pppp'>Buy Now</button>



      <div style={{ marginTop: '1rem', }} className='CurryLeaf-Container'>
        <div style={{ display: 'flex', flexDirection: 'column' }} className='fo'>
  
             <img src={assets.curryleafposter} style={{maxWidth:'100%',minWidth:'100%' }}></img>
        
 
        

 

          <h1>Natural hair cleanser that promotes healthy, shiny hair.</h1>
            
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


          
          <p className='disclaimer' style={{ color: 'black' }}><span>Disclaimer:</span> Use Curry Leaf Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>


    </>

  )
}

export default Curryleafpowder