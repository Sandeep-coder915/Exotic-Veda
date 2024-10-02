import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { hennahairCareRecipes, hennaproductDetails } from './Recepisdata'; // Importing the recipe data
import Reciepicard from './Reciepicard';

const Hennapowder = () => {
  const [activeTab, setActiveTab] = useState('hairCare'); // State to track the active tab
  const images = [
    assets.henna, 
    assets.hennaback,
    assets.hennause,
    assets.hennabowl,
    assets.hennadiy,
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
            Henna Powder For Body Art Work - Create Stunning Heena Body Tattoos, Mehndi Body Designs & Elegant Mehndi Art For Occasions - Perfect Tattoo Gun Alternative - Hair Dye Solution  </h1>

          <h2>About this item</h2>
          <ul style={{ textAlign: 'justify', fontSize: '14px' }}>

            <li>Versatile Body Art: Create Stunning Body Art With Our Premium Henna Powder. Perfect For Heena Body Art, Mehndi Body Designs, And Temporary Tattoos For Adults. Safe For All Skin Types And Easy To Use.
            </li>
            <li>
              Rich, Natural Color: Our Henna Powder Provides A Deep, Rich Color For Traditional Mehndi And Creative Body Art. Whether For Festivals Or Special Occasions, Achieve Long-Lasting, Elegant Body Mehndi Designs.

            </li>
            <li>
              Easy Application: Enjoy Hassle-Free Application With Our Finely Ground Henna Powder. Ideal For Intricate Mehndi Art On Body, Ensuring Smooth, Even Designs.
            </li>
            <li>
              Safe & Natural: Made From 100% Natural Ingredients, Our Henna Powder Is Free From Harmful Chemicals. Suitable For Sensitive Skin And Ideal For Temporary Tattoos, Eyebrow Tint, And Root Touch Up Hair Color.

            </li>
            <li>
              Perfect For Celebrations: Enhance Your Festivals, Weddings, And Celebrations With Our Henna Powder. Create Unique Mehndi Body Art, Heena Body Designs, And Temporary Tattoos For Adults. Includes Tattoo Supplies And Henna Stencils.
            </li>
            <li>Strengthens Hair Strands: Henna Powder Contains A Potent Compound Called Lawsone, Which Binds With The Natural Keratin Protein In Your Hair Strands To Form A Protective Layer. This Gives Your Hair A Natural Tint, Making It Strong And Less Prone To Breakage. So, While You're Rocking That Awesome Henna Color, Your Hair Is Getting A Strength Boost, Making It Healthier And More Resilient.</li>

          </ul>
        </div>

      </div >
      <button className='pppp'>Buy Now</button>




      <div style={{ marginTop: '1rem' }} className='Henna-Container'>

        {/* Product banner section */}
        <div style={{ display: 'flex', flexDirection: 'column' }} className='fo'>

          <img src={hennaproductDetails.bannerImg} alt='Henna Powder Banner' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <img src={assets.hennabanner}></img>
 
         

          {/* Product description */}
          <h1>Organic Henna Powder - Perfect for Hair Care & Natural Dye</h1>
        
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
