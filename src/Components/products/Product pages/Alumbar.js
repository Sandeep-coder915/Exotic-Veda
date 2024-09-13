import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
 
const Alumbar = () =>{
  const [activeTab, setActiveTab] = useState('hairCare'); // State to track the active tab

  const alumBarUses = [
    {
      id: 1,
      title: 'Using Alum Bar for Aftershave',
      steps: [
        'Wet the Alum Bar with cold water.',
        'After shaving, rinse your face with cold water to close pores.',
        'Gently rub the wet alum bar over the shaved areas of your face.',
        'Leave it on for 1-2 minutes to allow the alum to soothe and disinfect the skin.',
        'Rinse your face with cold water again and pat dry with a clean towel.',
        'Apply a moisturizer or aftershave balm to keep your skin hydrated.'
      ],
      benefits: 'The alum bar acts as an antiseptic and helps to prevent razor burn, nicks, and cuts from getting infected.',
      image: assets.alumAftershave,  // Replace 'path_to_image' with the correct image path or import
    },
    {
      id: 2,
      title: 'Using Alum Bar as a Deodorant',
      steps: [
        'Wet the Alum Bar under cold water.',
        'After showering, rub the wet alum bar gently on your underarms.',
        'Let the alum air dry on your skin—no need to rinse off.',
        'Store the alum bar in a dry place after use.'
      ],
      benefits: 'Alum helps to eliminate bacteria, which are the main cause of body odor, and provides natural deodorizing without harmful chemicals.',
      image: assets.alumDeodorant,  // Replace 'path_to_image' with the correct image path or import
    }
  ];
  
  const TabButton = ({ label, tabKey }) => (
    <button
      className={activeTab === tabKey ? 'active' : ''}
      onClick={() => setActiveTab(tabKey)}
    >
      {label}
    </button>
  );

  const RecipeCard = ({ recipe }) => (
    <div className="recipe-card" key={recipe.id}>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
      </div>
      <div className="recipe-details">
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
  );

  return (
    <>
      <div className='Product-Page-Container'>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/organic-shikakai-powder?_pos=1&_psq=shika&_ss=e&_v=1.0'>
            <img src={assets.alum3} alt='Sandalwood' style={{ maxWidth: '100%', minWidth:'100%', marginTop:'4rem' }} />
        
          </a>
        </div>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/organic-shikakai-powder?_pos=1&_psq=shika&_ss=e&_v=1.0'>
            <img src={assets.alum1 } alt='Sandalwood' style={{ maxWidth: '100%', minWidth:'100%' }} />
        
          </a>
        </div>

        <div className='Shikakai-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}>Pure Organic Shikakai Powder Natural Hair Cleanser and Conditioner, Non-GMO, Herbal Formula for Strong, Shiny Hair, 100g</h1>

          <div>
            <a href='https://revaais.com/products/organic-shikakai-powder?_pos=1&_psq=shika&_ss=e&_v=1.0'>
              <div className='img-shikakai'>
                <img src={assets.aloe4} alt='Shikakai' style={{ maxWidth: '50%' }} />
                <img src={assets.aloe4} alt='Shikakai' style={{ maxWidth: '50%' }} />
            
              </div>
            </a>
          </div>
         
        </div>

        <div className="tabs">
          <TabButton label="Tips For Hair Care" tabKey="hairCare" />
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          {activeTab === 'hairCare' && (
            <div className="hair-care-detail-page">
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
              <div className="recipes-container">
                {alumBarUses.map((recipe) => (
                  <RecipeCard recipe={recipe} key={recipe.id} />
                ))}
              </div>
            </div>
          )}
          <p className='disclaimer'><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
    </>
  );
};

export default Alumbar