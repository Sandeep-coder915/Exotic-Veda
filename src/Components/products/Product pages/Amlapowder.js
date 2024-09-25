import { assets } from '../Assets/prodimg/assets';
import { useState, useEffect, useCallback } from 'react';
import Loader from '../../loader/Loader';
import { Amlaskinrecipes, AmlaDietRecipes, AmlahairCareRecipes } from './Recepisdata';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card" key={recipe.id}>
    <div className="recipe-image">
      <img src={recipe.img} alt={recipe.title} style={{ maxWidth: '100%' }} />
    </div>
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <h4>{recipe.skinType || recipe.hairType}</h4>
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
);

const Amlapowder = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('skinCare');

  // Simulate content loading with useEffect
  const handleTabChange = useCallback((tab) => {
    setIsLoading(true); // Show loader
    setActiveTab(tab); // Set active tab

    // Simulate a delay (e.g., fetching content for the tab)
    setTimeout(() => {
      setIsLoading(false); // Hide loader after content is "loaded"
    }, 1000); // Adjust the delay as needed (1000ms = 1 second)
  }, []);

  return (
    <>
      <div className='Aloevera' style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <img src={assets.aloebanner1} alt='Aloe Vera Banner' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <img src={assets.amlaposter} alt='Amla Poster' style={{ maxWidth: '100%', minWidth: '100%' }} />
        </div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => handleTabChange('skinCare')}
          aria-label="Skin Care Tips"
        >
          Tips For Skin Care
        </button>
        <button
          className={activeTab === 'hairCare' ? 'active' : ''}
          onClick={() => handleTabChange('hairCare')}
          aria-label="Hair Care Tips"
        >
          Tips For Hair Care
        </button>
        <button
          className={activeTab === 'diet' ? 'active' : ''}
          onClick={() => handleTabChange('diet')}
          aria-label="Dietary Use Tips"
        >
          Tips For Dietary Use
        </button>
      </div>

      {/* Show Loader or Content */}
      
        <div className="tab-content">
          {activeTab === 'skinCare' && (
            <div className="product-detail-page">
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder Uses for Different Skin Types</h1>
              <div className="recipes-container">
                {Amlaskinrecipes.map(recipe => <RecipeCard recipe={recipe} />)}
              </div>
            </div>
          )}

          {activeTab === 'hairCare' && (
            <div className="hair-care-detail-page">
              {/* <div style={{ marginLeft: '10px' }}>
                <img src={assets.Amla5} style={{ maxWidth: '100%', minWidth: '100%' }} alt='Amla Hair Care' />
              </div> */}
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder Uses for Different Hair Types</h1>
              <div className="haircare-recipes-container">
                {AmlahairCareRecipes.map(recipe => <RecipeCard recipe={recipe} />)}
              </div>
            </div>
          )}
          {activeTab === 'diet' && (
            <div className="diet-detail-page">
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder Uses for Dietary Purposes</h1>
              <div className="haircare-recipes-container">
                {AmlaDietRecipes.map(recipe => <RecipeCard recipe={recipe} />)}
              </div>
            </div>
          )}

          <div>
            <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
              <div className='img-aloe'>
                <img src={assets.amlabann} style={{ minWidth: '100%', maxWidth: '100%' }} alt='Amla Buy Now' />
              </div>
            </a>
          </div>

          <p className='disclaimer' style={{ color: 'black' }}>
            <span>Disclaimer:</span> Use Amla Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
          </p>

          <div className='Aloevera-btn' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
              <button className='btn2'> Buy Now</button>
            </a>
            <a href='https://www.revaais.shop/'>
              <button className='btn2'>Visit Our Store</button>
            </a>
          </div>
        </div>
      
    </>
  );
};

export default Amlapowder;
