import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import { AloeverahairCareRecipes, Aloeverarecipesskin } from './Recepisdata'
import './Pages.css'

const Aloevera = () => {
  const images = [
    assets.aloe3, // Main image
    assets.aloeback, // Main image
    assets.aloe33, // Main image
    assets.aloebene, // Main image
    assets.aloe3, // Main image

  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };


  const [activeTab, setActiveTab] = useState('skinCare')

  const renderRecipeCard = (recipe, isHairCare = false) => (
    <div className={`${isHairCare ? 'haircare-' : ''}recipe-card`} key={recipe.id}>
      <div className={`${isHairCare ? 'haircare-' : ''}recipe-image`}>
        <img src={recipe.img} alt={recipe.title} style={{ maxWidth: '100%' }} />
      </div>
      <div className={`${isHairCare ? 'haircare-' : ''}recipe-details`}>
        <h2>{recipe.title}</h2>
        <h4>{isHairCare ? recipe.hairType : recipe.skinType}</h4>
        <div className="ingredients">
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <h5>Instructions:</h5>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
        <p><strong>Benefits:</strong> {recipe.benefits}</p>
      </div>
    </div>
  )

  return (
    <>

      <div className="product-page1"   >


        <div className="image-gallery"  >
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
        <div className="product-details"  >
          <h1 style={{ textAlign: 'center', fontSize: '18px' }}>Pure Aloe Vera Powder - Helps Nourish Scalp, Boost Hair Growth, Aids in Skin Dryness, Cuts, Sunburns, Natural Herbal Supplement for Skin & Hair Care (100g)</h1>

 

          <h2>About this item</h2>
          <ul style={{ textAlign: 'justify', fontSize: '14px' }}>

          <li>100% Natural, GMO Free: Our Product Is 100% Natural, Organic, GMO-Free, And Manufactured Under GMP-Compliant Facilities. Sourced From The Finest Aloe Vera Plants From Organic Farms, You're Receiving A Package Of Unadulterated Aloe Vera Powder.</li>
           <li>Skin-Nourishing Aloe Vera : Drink Our Organic Aloe Vera To Nourish Your Skin From Within. It's A Great Addition To Your Skincare Set, Complementing Products Like Face Oil And Vitamin C Powder For A Holistic Approach To Skin Care.</li>
            <li>Nutrient-Rich Superfood That Supports Hair Growth, Improves Skin Health, And Enhances Immunity.</li>
            <li>Promotes Hair Growth: Aloe Vera Is Packed With A Whole Bunch Of Goodness—Proteolytic Enzymes, Vitamins, Minerals, Polysaccharides, Amino Acids, Antioxidants, And More! They Work Synergistically To Help Nourish The Scalp, Boost Growth, Strengthen The Hair Follicles, And Condition Them. The Results? Your Hair Won't Just Grow; It'll Be Softer, Silkier, And Healthier!</li>
            <li>DIY Aloe Hair Pack: Mix The Powder With Fresh Onion Juice To Make A Smooth Paste. Apply The Paste To Your Hair And Roots While Gently Massaging It. Make Sure To Cover Every Strand. Let It Sit For 30 Minutes For Those Powerful Nutrients To Soak In, Then Rinse It With Water. With Regular Use, You Will Get Silky, Nourished Locks.</li>
            <li>Rich In Antioxidants And Aids In Detoxification.</li>

          </ul>
        </div>


      </div >
      <button className='pppp  '>Buy Now</button>


      <div className='Product-Page-Contanier'>
     
        <div>
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
            <img src={assets.aloebanner1} alt='aloevera' style={{ width: '100%' }} />
          </a>
        </div>
        <div style={{ display: 'flex', width: '100%' }}>
            <img src={assets.aloebanner2} alt='aloevera' style={{ width: '100%' }} />

          </div>
        
        <div className='Aloevera-Description' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
{/* 
          <div>
            <a href='https://revaais.com/products/pure-aloe-vera-powder?_pos=1&_psq=aloe&_ss=e&_v=1.0'>
              <div className='img-aloe'>
                <img src={assets.aloe3} alt='Aloe Vera Product' style={{ width: '50%' }} />
                <img src={assets.aloe3} alt='Aloe Vera Product' style={{ width: '50%' }} />
              </div>
            </a>
          </div> */}

       



        </div>
      </div>

      <div className="tabs" style={{ marginTop: '20px' }}>
        <button
          className={activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => setActiveTab('skinCare')}
        >
          Tips For Skin Care
        </button>
        <button
          className={activeTab === 'hairCare' ? 'active' : ''}
          onClick={() => setActiveTab('hairCare')}
        >
          Tips For Hair Care
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1>Aloe Vera Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {Aloeverarecipesskin.map(recipe => renderRecipeCard(recipe))}
            </div>
          </div>
        )}

        {activeTab === 'hairCare' && (
          <div className="hair-care-detail-page">
            <h1>Aloe Vera Powder Uses for Different Hair Types</h1>
            <div className="haircare-recipes-container">
              {AloeverahairCareRecipes.map(recipe => renderRecipeCard(recipe, true))}
            </div>
          </div>
        )}
        <div className='Aloevera-btn' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'><button className='btn2'>Buy Now</button></a>
          <a href='https://www.revaais.shop/'><button className='btn2'>Visit Our Store</button></a>
        </div>
      </div>
    </>
  )
}

export default Aloevera