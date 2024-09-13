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
          {/* <ul>
            <li>Organic Shikakai Powder For Hair: Step Up Your Hair Care Game With The Age-Old Remedy Of Shikakai. Our 100% Natural Shikakai Powder (Or Acacia Concinna) Strengthens Roots, Fights Dandruff, And Leaves Your Hair Smooth And Shiny. Follow A Hair Care Routine That's Not Only Sustainable But Transformative, Giving Your Hair The Nourishment It Craves And The Shine It Deserves.</li>
          </ul> */}

          {/* <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://revaais.com/products/organic-shikakai-powder?_pos=1&_psq=shika&_ss=e&_v=1.0'>
              <img src={assets.shikabanner} alt='Certification' style={{ maxWidth: '100%' }} />
            </a>
          </div> */}

          {/* <h2 style={{ textAlign: 'start' }}>About this item</h2>
          <ul>
            <li>100% Natural, GMO-Free: We're All About Keeping Things Natural, Clean, And Super Effective. Our Product Is Sourced Directly From The Acacia Concinna Tree, Completely Non-GMO, And Crafted In A GMP-Compliant Facility. This Means You're Getting The Best, With No Nasty Surprises.</li>
            <li>Helps Prevent Hair Graying: Our Acacia Powder Is Here To Help Preserve Your Natural Hair Color And Fend Off Those Early Grays. The Saponins, Tannins, And Antioxidants In Shikakai Work To Protect And Nourish Your Hair From Root To Tip. It's Gentle, Effective, And All About Keeping Those Premature Grays At Bay.</li>
            <li>Prevents Split Ends, Dandruff: Don't Let Split Ends And Dandruff Dull Your Hair's Natural Shine! Shikakai Has Natural Compounds Like Antioxidants And Saponins, Which Help Target The Root Causes Of Hair Damage And Scalp Issues. It Helps Restore Your Hair's Vitality While Leaving The Scalp Flake-Free.</li>
            <li>SOOTHES, HEALS YOUR SKIN: Skin irritations, rashes, prickly heat – whatever your skin woe, our pure sandalwood powder is here to soothe, heal, and calm your skin. Think of it as your personal skin rescuer, always ready to comfort you when your skin feels irritated or just needs a little TLC.</li>
            <li>EASY TO USE: To make a nice face pack that de-tans, lightens, and brightens, mix 2 tablespoons of our Sandalwood Powder with 1 teaspoon of multani mitti powder and a little water to create a smooth paste. Apply evenly over your face and neck, leave for 15-20 minutes, then wash off to reveal glowing, spot-free skin.</li>
          </ul> */}
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