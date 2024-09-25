import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import ee from  './dd (1).png'
import {AloeverahairCareRecipes,Aloeverarecipesskin } from './Recepisdata'; // Import the recipe data
// import RecipeCard from './Reciepicard';

import './Pages.css'
const Aloevera = () => {


  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab


  return (
    <>
      <div className='Product-Page-Contanier '>
        <div >
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
            <img src={assets.aloebanner1} alt='aloevera ' style={{ maxWidth: '100%', minWidth: '100%' }} /></a>
        </div>
        <div className='Aloevera-Description' style={{maxWidth: '100%', minWidth: '100%' ,display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}>Pure Aloe Vera Powder - Helps Nourish Scalp, Boost Hair Growth, Aids in Skin Dryness, Cuts, Sunburns, Natural Herbal Supplement for Skin & Hair Care (100g)</h1>
        

          <div >
            <a href='https://revaais.com/products/pure-aloe-vera-powder?_pos=1&_psq=aloe&_ss=e&_v=1.0'>

              <div className='img-aloe'>
                <img src={assets.aloe3} alt='hel' style={{ maxWidth: '50%' }} />
                <img src={assets.aloe3} alt='hel' style={{ maxWidth: '50%' }} />
              </div>
            </a>

          </div>
          <ul>
            <li>
              Organic Aloe vera Powder : Say goodbye to chemical-filled beauty products and say yes to our Organic Aloe Vera Powder. Follow a beauty regimen that's pure, unadulterated, and rooted in nature's goodness. It is power-packed with antioxidants, vitamins, minerals, and anti-inflammatory compounds to help rejuvenate your skin and leave your hair silky.</li>
          </ul>

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
              <img src={assets.aloebanner2} alt='aloevera '   style={{ maxWidth: '100%', minWidth: '100%' }} /></a>
            {/* <img src={assets.aloe2} alt='aloevera ' style={{ maxWidth: '100%' }} /> */}
          </div>

          <h2 style={{ textAlign: 'start' }}>About this item</h2>
          <ul>
            <li>100% Natural ,GMO Free: Our Product Is 100% Natural, Organic, GMO-Free, And Manufactured Under GMP-Compliant Facilities. Sourced From The Finest Aloe Vera Plants From Organic Farms, You're Receiving A Package Of Unadulterated Aloe Vera Powder. It Is Delivered Straight From The Source, So You Get The Best.</li>
            <li> Promotoes Hair Growth: Aloe Vera is packed with a whole bunch of goodness—proteolytic enzymes, vitamins, minerals, polysaccharides, amino acids, antioxidants, and more! They work synergistically to help nourish the scalp, boost growth, strengthen the hair follicles, and condition them. The results? Your hair won't just grow; it'll be softer, silkier, and healthier!</li>
            <li> KEEPS SKIN SOFT & SUPPLE: Discover the dual action of our Natural Aloe Vera Powder. While its polysaccharides and amino acids lock in moisture to make your skin soft and supple, its anti-inflammatory compounds like gibberellins and auxins soothe irritation to fight skin dryness, sunburns, rashes, and cuts.</li>
            <li> DIY ALOE FACE MASK: Give your skin the glow it deserves with a soothing and cooling aloe vera face pack. Mix a small amount of the powder with either water or rose water to make a smooth paste. Clean your face with a good face wash, and then apply the pack evenly on all sides. Leave it for 15-20 minutes and rinse off with lukewarm water.</li>
            <li> DIY ALOE HAIR PACK: Mix the powder with fresh onion juice to make a smooth paste. Apply the paste to your hair and roots while gently massaging it. Make sure to cover every strand. Let it sit for 30 minutes for those powerful nutrients to soak in, then rinse it with water. With regular use, you will get silky, nourished locks.</li>

          </ul>
        </div>


      </div>

      <div className="tabs">

        <button
          className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => setActiveTab('skinCare')}
        >
        Tips  For Skin Care
        </button>
        <button
          className={setActiveTab & activeTab === 'hairCare' ? 'active' : ''}
          onClick={() => setActiveTab('hairCare')}
        >
          Tips For Hair Care
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1>Aloe Vera Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {Aloeverarecipesskin.map((recipe) => (
                <div className="recipe-card" key={recipe.id}>
                  <div className="recipe-image">
                    <img src={recipe.img} alt={recipe.title} style={{ maxWidth: '100%' }} />
                  </div>
                  <div className="recipe-details">
                    <h2>{recipe.title}</h2>
                    <h4>{recipe.skinType}</h4>
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
              ))}
            </div>
          </div>
        )}

        {activeTab === 'hairCare' && (
          <div className="hair-care-detail-page">
            <h1>Aloe Vera Powder Uses for Different Hair Types</h1>
            <div className="haircare-recipes-container">
              {AloeverahairCareRecipes.map((recipe) => (
                <div className="haircare-recipe-card" key={recipe.id}>
                  <div className="haircare-recipe-image">
                    <img src={recipe.img} alt={recipe.title} />
                  </div>
                  <div className="haircare-recipe-details">
                    <h2>{recipe.title}</h2>
                    <h4>{recipe.hairType}</h4>
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
              ))}
            </div>
          </div>
        )}
        <div className='Aloevera-btn' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }} >
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'> <button className='btn2'  > Buy Now</button></a>
          <a href='https://www.revaais.shop/'><button className='btn2'> Vist Our Store</button></a>
        </div>
      </div>


    </>
  )
}

export default Aloevera