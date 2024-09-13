import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import {multanihairCareRecipes , multanirecipes } from './Recepisdata'; // Import the recipe data
const Multanimitti = () => {

  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  return (
    <>
      <div className='Product-Page-Contanier  '>
        <div style={{position:'relative' ,maxWidth:'100%'}}>
          <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r'>
            <img src={assets.multanibanner1} alt='aloevera ' style={{ maxWidth: '100%' ,maxHeight:'100%',minHeight:'200px'}} />
            <div className='right-container'>
              <h2>Dont miss Out </h2>
        <p style={{textAlign:'center'}}>Explor  the oppurtuniites</p>
              <button>Buy Now</button>
            </div>
            
            </a>
        </div>
        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}> 
            Multani Mitti Powder Fullers Earth Clay - 100% Pure Natural Indian Clay for Skin Cleansing - Suitable for All Skin Ideal for Face Masks and Body Scrubs | 100% Natural, Non-GMO (100g)</h1>

          <div >
            <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r'>

            <div className='img-aloe'>
              <img src={assets.multanipic} alt='hel' style={{ maxWidth: '50%' }} />
              <img src={assets.multanipic2} alt='hel' style={{ maxWidth: '50%' }} />
              </div> 
              </a>

          </div>
          <ul>
            <li>
            ORGANIC BENTONITE CLAY POWDER: Imagine a clay so potent that it can pull impurities from your skin like a magnet. That's Organic Bentonite Clay Powder (Multani Mitti / Indian Healing Clay / Fullers Earth) for you—nature's very own detoxifier. From oil control to soothing inflamed skin and preventing acne, its rich composition of minerals helps bring out your skin's best glow.
            </li>
          </ul>

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r'>
              <img src={assets.multaniposter } alt='aloevera ' style={{ maxWidth: '100%' }} /></a>
         
          </div>

          <h2 style={{ textAlign: 'start' }}>About this item</h2>
          <ul>
            <li> 100% NATURAL, GMO-FREE: Sourced directly from the fertile lands, our Multani Mitti (or Fuller's Earth), is a testament to what true organic skincare should be. Completely natural and steadfastly GMO-Free, our product isn't just good for your skin; it's a commitment to ethical, sustainable beauty practices that honor the earth and its bounty.</li>
            <li> HELPS EXFOLIATE, TIGHTEN SKIN PORES: Bentonite clay is rich in montmorillonite, a mineral that gently exfoliates, removes impurities, and minimizes enlarged pores. On the other hand, silica boosts collagen production to improve skin elasticity and firmness. Calcium steps up next to help maintain your skin's moisture balance while tightening pores for a refined, youthful appearance</li>
            <li> KEEPS SKIN SOFT & SUPPLE: Discover the dual action of our Natural Aloe Vera Powder. While its polysaccharides and amino acids lock in moisture to make your skin soft and supple, its anti-inflammatory compounds like gibberellins and auxins soothe irritation to fight skin dryness, sunburns, rashes, and cuts.</li>
            <li> CONTROLS SEBUM, EXCESS OIL: When applying our Multani Mitti Powder topically, the silica in it helps absorb excess sebum from the skin's surface, leaving it looking matte and less oily. Additionally, its calcium ions help regulate the skin's oil production and prevent it from becoming overactive.</li>
            <li> DIY BENTONITE CLAY FACE MASK: For a refreshing glow, create a face pack by mixing our Bentonite Clay Powder with either water or milk to make a smooth paste. Apply this mixture evenly across your cleansed face, allowing it to sit and work its magic for 15-20 minutes. Rinse it off with cold or lukewarm water</li>

          </ul>
        </div>
        {
        
        /* <div className='Aloevera-btn'  style={{display:'flex',justifyContent:'center',gap:'10px'}} >
        <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'> <button className='btn2'  > Buy Now</button></a> 
        <a href='https://www.revaais.shop/'><button className='btn2'  > Vist Our Store</button></a> 
        </div> */
        
        }

      </div>

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
        Tips For Hair Care
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Multani Mitti Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {multanirecipes.map((recipe) => (
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
          <div className="hair-care-detail-page" >
            <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Multani Mitti Powder Uses for Different-Diffrent Hair</h1>
            <div className="haircare-recipes-container">
              {multanihairCareRecipes.map((recipe) => (
                <div className="haircare-recipe-card" key={recipe.id}>
                  <div className="haircare-recipe-image">
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
                  <div className="haircare-recipe-details">
                    <h2 >{recipe.title}</h2>
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

        <p className='disclaimer'><span>Disclaimer:</span>Use Multani Mitti Powder externally.Avoid contact with eyes, and discontinue use if irritation occurs</p>
         <div className='Aloevera-btn'  style={{display:'flex',justifyContent:'center',gap:'10px'}} >
        <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=f298fe79f&_ss=r?variant=48956872098113'> <button className='btn2'  > Buy Now</button></a> 
        <a href='https://www.revaais.shop/'><button className='btn2'  > Vist Our Store</button></a> 
        </div>
      </div>


    </>
  )
}

export default Multanimitti
