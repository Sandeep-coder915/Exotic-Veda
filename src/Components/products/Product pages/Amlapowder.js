 
import { assets } from '../Assets/prodimg/assets'
import { useState,useEffect } from 'react';
import Loader from '../../loader/Loader';
import {Amlaskinrecipes, AmlaDietRecipes,AmlahairCareRecipes } from './Recepisdata'; 

const Amlapowder = () => {

    // State to manage loading
    const [isLoading, setIsLoading] = useState(true);

    // Simulate content loading with useEffect
    const handleTabChange = (tab) => {
      setIsLoading(true); // Show loader
      setActiveTab(tab); // Set active tab

      // Simulate a delay (e.g., fetching content for the tab)
      setTimeout(() => {
          setIsLoading(false); // Hide loader after content is "loaded"
      }, 1000); // Adjust the delay as needed (1000ms = 1 second)
  };
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab
 
  
  return (
    <>
      <div className='Aloevera '>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
            <img src={assets.aloebanner1} alt='aloevera 'style={{ maxWidth: '100%',minWidth:'100%', maxHeight: '100%', minHeight: '200px' }} />
            <div className='right-container'>
              <h2>Dont miss Out </h2>
              <p style={{ textAlign: 'center' }}>grab the oppurtuniites</p>
              <button>Buy Now</button>
            </div>

          </a>
        </div>

        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}> Organic Amla Powder Herbal Supplement Indian Gooseberry or Emblica Officinalis Helps Detoxify, Boost Immunity, Hair Growth & Long Hairs, Promotes Eye Health, 100% Natural, Non-GMO (100g)</h1>

          <div >
            <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>

              <div className='img-aloe'>
                <img src={assets.Amla1} alt='hel' style={{ maxWidth: '50%' }} />
                <img src={assets.amlback} alt='hel' style={{ maxWidth: '50%' }} />
              </div>
            </a>

          </div>
          <ul>
            <li>
            ORGANIC AMLA POWDER: We all want that one health ingredient that does it all. Well, our Amla Powder (or Indian Gooseberry) might be what you're looking for. This isn't just a supplement; it's a game-changer for your locks and overall well-being. Rich in antioxidants, it boosts immunity and hair growth and powers up your health like nothing else.    </li>
          </ul>

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
              <img src={assets.amlaposter} alt='aloevera ' style={{ maxWidth: '100%',minWidth:'100%', }} /></a>

          </div>

          <h2 style={{ textAlign: 'center' }}>About this item</h2>
          <ul>
            <li> HELPS IN DETOXIFICATION, BOOSTS IMMUNITY: Looking for a natural boost that feels like a fresh start for your body? Then our Amla Powder is all. This isn’t just any supplement; it’s a Vitamin C powerhouse with ellagic acid, antioxidants, and flavonoids that help keep your immune system in top shape and your body detoxed.</li>

            <li> AIDS IN EYE HEALTH: Our product isn't just any fruit powder; it's a vision superhero. Loaded with Vitamin C and essential antioxidants like beta-carotene, Amla helps maintain eye moisture, protect against age-related conditions, and even improve your ability to see in the dark. These compounds also aid in combating oxidative stress and keeping one's vision crystal clear.</li>

            <li> SBOOSTS HAIR GROWTH: Amla berry, packed with antioxidants and polyphenols, helps boost scalp health and hair growth, while its natural oils coat each strand in shine. It’s like a spa treatment in a powder, targeting hair health at its source. So, if you’re looking for that glow-up, Amla’s got your back (and your hair)!</li>
            <li>EASY TO USE: To make a face mask, mix a little amla powder with honey or yogurt and apply it to your face and neck. Leave it for 15-20 minutes, then wash it off for glowing skin. To make a hair pack, mix the amla powder with yogurt. Apply it to your hair and rinse after 30 minutes. For dietary use, mix 1 tablespoon of amla powder in a glass of water and drink it once a day.</li>

          </ul>
        </div>
       

      </div>

      <div className="tabs">
                <button
                    className={activeTab === 'skinCare' ? 'active' : ''}
                    onClick={() => handleTabChange('skinCare')}
                >
                    Tips For Skin Care
                </button>
                <button
                    className={activeTab === 'hairCare' ? 'active' : ''}
                    onClick={() => handleTabChange('hairCare')}
                >
                    Tips For Hair Care
                </button>
                <button
                    className={activeTab === 'diet' ? 'active' : ''}
                    onClick={() => handleTabChange('diet')}
                >
                    Tips For Dietary Use
                </button>
            </div>

            {/* Show Loader or Content */}
            {isLoading ? (
                <Loader />
            ) : (
              <div className="tab-content">
              {activeTab === 'skinCare' && (
                <div className="product-detail-page">
                  <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder  Uses for Different Skin Types</h1>
                  <div className="recipes-container">
                    {Amlaskinrecipes.map((recipe) => (
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
      
             {activeTab === 'hairCare' &&  (
              <div className="hair-care-detail-page" >
                <div style={{marginLeft:'10px'}}>
                  <img src={assets.Amla5} style={{maxWidth:'100%',minWidth:'100%'}} ></img>
                </div>
                
                <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Amla Powder  Uses for Different-Diffrent Hair</h1>
                <div className="haircare-recipes-container">
                  { AmlahairCareRecipes.map((recipe) => (
                    <div className="haircare-recipe-card" key={recipe.id}>
                      <div className="haircare-recipe-image">
                        <img src={recipe.img} alt={recipe.title} />
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
             {activeTab === 'diet' &&  (
              <div className="hair-care-detail-page" >
                {/* <div style={{marginLeft:'10px'}}>
                  <img src={assets.Amla5} style={{maxWidth:'100%',minWidth:'100%'}} ></img>
                </div> */}
                
                <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Amla Powder  Uses for Dieatary Purpose</h1>
                <div className="haircare-recipes-container">
                  {AmlaDietRecipes.map((recipe) => (
                    <div className="haircare-recipe-card" key={recipe.id}>
                      <div className="haircare-recipe-image">
                        <img src={recipe.img} alt={recipe.title} />
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
      
              <p className='disclaimer'><span>Disclaimer:</span>Use Amla Powder  externally.Avoid contact with eyes, and discontinue use if irritation occurs</p>
      
              <div className='Aloevera-btn' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }} >
                <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'> <button className='btn2'  > Buy Now</button></a>
                <a href='https://www.revaais.shop/'><button className='btn2'>Vist Our Store</button></a>
              </div>
      
            </div>
            )}
 

      {/* Content based on active tab */}
     


    </>
  )
}

export default Amlapowder
