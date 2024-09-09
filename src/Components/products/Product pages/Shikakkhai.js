import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { Link } from 'react-router-dom';

const Shikakkhai = () => {
  const [activeTab, setActiveTab] = useState('hairCare'); // State to track the active tab

  const hairCareRecipes = [
    {
      id: 1,
      title: 'Shikakai and Lemon Juice Hair Pack',
      hairType: 'Oily Hair and Scalp',
      ingredients: [
        '2 tablespoons shikakai powder',
        '1 tablespoon lemon juice',
        'Water to make a paste',
      ],
      instructions: [
        'Mix shikakai powder with lemon juice and enough water to create a smooth paste.',
        'Apply the paste to your scalp and hair, focusing on the roots where oil tends to accumulate.',
        'Massage gently into the scalp for a few minutes.',
        'Leave it on for 15-20 minutes.',
        'Rinse thoroughly with lukewarm water and follow with a mild shampoo if needed.',
      ],
      benefits:
        'Removes excess oil, cleanses the scalp, and adds volume and freshness to oily hair.',
      image: assets.shikhakhai,
    },
    {
      id: 2,
      title: 'Shikakai and Coconut Milk Hair Mask',
      hairType: 'Dry and Frizzy Hair',
      ingredients: [
        '2 tablespoons shikakai powder',
        '1/2 cup coconut milk',
        '1 tablespoon honey',
      ],
      instructions: [
        'Mix shikakai powder with coconut milk and honey to form a smooth, consistent paste.',
        'Apply the mixture to your scalp and hair, focusing on the ends where frizz is common.',
        'Leave it on for 30-45 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits:
        'Deeply conditions and nourishes dry, frizzy hair, making it softer and more manageable.',
      image: assets.shikakaiDryHair,
    },
    {
      id: 3,
      title: 'Shikakai and Neem Powder Hair Pack',
      hairType: 'Dandruff and Itchy Scalp',
      ingredients: [
        '2 tablespoons shikakai powder',
        '1 tablespoon neem powder',
        'Water to make a paste',
      ],
      instructions: [
        'Mix shikakai powder with neem powder and enough water to form a paste.',
        'Apply the paste to your scalp, focusing on areas with dandruff or itchiness.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and follow with a mild shampoo.',
      ],
      benefits:
        'Reduces dandruff, soothes the scalp, and helps maintain a healthy scalp environment.',
      image: assets.shikakaiDandruff,
    },
    {
      id: 4,
      title: 'Shikakai and Amla Hair Mask',
      hairType: 'Hair Growth and Strengthening',
      ingredients: [
        '2 tablespoons shikakai powder',
        '2 tablespoons amla (Indian gooseberry) powder',
        'Water to make a paste',
      ],
      instructions: [
        'Mix shikakai powder and amla powder with enough water to form a thick paste.',
        'Apply the mixture to your scalp, focusing on the roots to stimulate hair follicles.',
        'Massage gently for a few minutes to promote blood circulation.',
        'Leave it on for 30-40 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual if needed.',
      ],
      benefits:
        'Strengthens hair from the roots, promotes hair growth, and reduces hair fall.',
      image: assets.shikakaiHairGrowth,
    },
    {
      id: 5,
      title: 'Shikakai and Yogurt Hair Mask',
      hairType: 'Dull and Damaged Hair',
      ingredients: [
        '2 tablespoons shikakai powder',
        '2 tablespoons yogurt',
        '1 tablespoon olive oil',
      ],
      instructions: [
        'Mix shikakai powder with yogurt and olive oil to create a smooth paste.',
        'Apply the mixture to your scalp and hair, focusing on damaged areas.',
        'Leave it on for 30-40 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits:
        'Repairs damaged hair, restores moisture, and brings back shine and vitality to dull hair.',
      image: assets.shikakaiDamagedHair,
    },
    {
      id: 6,
      title: 'Shikakai and Aloe Vera Hair Pack',
      hairType: 'Normal Hair',
      ingredients: [
        '2 tablespoons shikakai powder',
        '2 tablespoons aloe vera gel',
        'Water to make a paste',
      ],
      instructions: [
        'Mix shikakai powder with aloe vera gel and enough water to create a smooth paste.',
        'Apply the mask evenly to your scalp and hair.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits:
        'Cleanses and nourishes the hair, maintaining shine and softness.',
      image: assets.shikakaiNormalHair,
    },
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
            <img src={assets.shikabannersttre } alt='Sandalwood' style={{ maxWidth: '100%', minWidth:'100%', marginTop:'4rem' }} />
        
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
                {hairCareRecipes.map((recipe) => (
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

export default Shikakkhai;
