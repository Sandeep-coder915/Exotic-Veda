 
import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
const Triphalapowder = () =>  {
 
const triphalaDietRecipes = [
      {
        id: 1,
        title: 'Triphala Water for Digestion and Detoxification',
        ingredients: [
          '1/2 to 1 teaspoon Triphala powder',
          '1 glass of warm water',
          '1 teaspoon honey or lemon juice (optional)'
        ],
        instructions: [
          'Mix 1/2 to 1 teaspoon of Triphala powder in a glass of warm water.',
          'Stir well and drink this mixture on an empty stomach in the morning or before bedtime.',
          'Optionally, add honey or lemon juice for taste.'
        ],
        benefits: 'Helps stimulate digestive enzymes, promotes regular bowel movements, and detoxifies the body.',
        image:assets.triphala2,  // Replace 'path_to_image' with the correct image path or import
      },
      {
        id: 2,
        title: 'Triphala for Weight Loss',
        ingredients: [
          '1 teaspoon Triphala powder',
          '1 glass of warm water',
          'A pinch of cinnamon (optional)'
        ],
        instructions: [
          'Mix 1 teaspoon of Triphala powder in a glass of warm water.',
          'Drink this mixture 30 minutes before meals, twice a day (morning and evening).',
          'Optionally, add a pinch of cinnamon for added metabolism-boosting effects.'
        ],
        benefits: 'Aids in reducing excess fat, supports healthy metabolism, and promotes overall weight management.',
        image:assets.triphala2, // Replace 'path_to_image' with the correct image path or import
      },
      {
        id: 3,
        title: 'Triphala for Immune Support',
        ingredients: [
          '1 teaspoon Triphala powder',
          '1 glass of water or herbal tea',
          '1 teaspoon honey (optional)'
        ],
        instructions: [
          'Add 1 teaspoon of Triphala powder to a glass of water or herbal tea.',
          'Drink it once a day, preferably in the morning, to boost immunity.',
          'Mix with honey for enhanced flavor and benefits if desired.'
        ],
        benefits: 'Supports the immune system, fights free radicals, and protects the body from infections.',
        image:assets.triphala2,  // Replace 'path_to_image' with the correct image path or import
      },
      {
        id: 4,
        title: 'Triphala for Healthy Skin and Hair',
        ingredients: [
          '1 teaspoon Triphala powder',
          '1 glass of warm water or coconut water',
          'A splash of aloe vera juice or amla juice (optional)'
        ],
        instructions: [
          'Mix 1 teaspoon of Triphala powder in a glass of warm water or coconut water.',
          'Drink it once a day, either in the morning or at night before bedtime.',
          'Optionally, combine with aloe vera juice or amla juice for additional skin and hair benefits.'
        ],
        benefits: 'Purifies the blood, supports healthy skin, reduces acne, and promotes hair growth.',
         image:assets.triphala2,  // Replace 'path_to_image' with the correct image path or import
      },
      {
        id: 5,
        title: 'Triphala for Blood Sugar Control',
        ingredients: [
          '1/2 teaspoon Triphala powder',
          '1 glass of warm water',
          '1 teaspoon fenugreek powder (optional)'
        ],
        instructions: [
          'Mix 1/2 teaspoon of Triphala powder in a glass of warm water.',
          'Drink it on an empty stomach in the morning and/or before bed.',
          'Optionally, add a teaspoon of fenugreek powder for enhanced blood sugar regulation.'
        ],
        benefits: 'Regulates blood sugar levels, beneficial for individuals with diabetes or those at risk of developing it.',
        image:assets.triphala2, // Replace 'path_to_image' with the correct image path or import
      },
      {
        id: 6,
        title: 'Triphala Mouth Rinse for Oral Health',
        ingredients: [
          '1 teaspoon Triphala powder',
          '1 glass of warm water'
        ],
        instructions: [
          'Mix 1 teaspoon of Triphala powder in a glass of warm water.',
          'Gargle with the mixture after brushing your teeth in the morning or evening.',
          'Rinse your mouth thoroughly after gargling.'
        ],
        benefits: 'Maintains oral hygiene, reduces gum inflammation, and prevents bad breath.',
        image:assets.triphala2, // Replace 'path_to_image' with the correct image path or import
      },
      {
        id: 7,
        title: 'Triphala for Sleep and Stress Relief',
        ingredients: [
          '1/2 teaspoon Triphala powder',
          '1 glass of warm water or warm milk'
        ],
        instructions: [
          'Mix 1/2 teaspoon of Triphala powder in a glass of warm water or warm milk.',
          'Drink this mixture 30 minutes before bed to promote relaxation and restful sleep.'
        ],
        benefits: 'Has calming properties, helps reduce stress, and promotes better sleep quality.',
        image:assets.triphala2,  // Replace 'path_to_image' with the correct image path or import
      },
      {
        id: 8,
        title: 'Triphala for Constipation Relief',
        ingredients: [
          '1 teaspoon Triphala powder',
          '1 glass of warm water',
          '1 teaspoon psyllium husk (optional)'
        ],
        instructions: [
          'Mix 1 teaspoon of Triphala powder in a glass of warm water.',
          'Drink it before bedtime to stimulate bowel movements the next morning.',
          'Optionally, add a teaspoon of psyllium husk to enhance its laxative effect.'
        ],
        benefits: 'Relieves constipation, promotes regular bowel movements, and improves gut health.',
        image:assets.triphala2, // Replace 'path_to_image' with the correct image path or import
      },
    ];
  
 
const RecipeCard = ({ recipe }) => (
    <div className="recipe-card" key={recipe.id} >
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
      </div>
      <div className="recipe-details">
        <h2>{recipe.title}</h2>
         
        <div className="ingredients1">
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions1">
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

<div style={{ marginTop: '4rem',backgroundColor:'rgba(249,225,199,255)'}} className='Tripahala-contanienr'>

  <div style={{ display: 'flex', flexDirection: 'column', }}>
    <img src={assets.triphalabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

    <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
      <img src={assets.triphala2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0' ,minWidth:'50%'}} />
     
      <img src={assets.triphala1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0',  minWidth:'50%'}} />
    </div>
    <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
           
    <img src={assets.triphala1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0',  minWidth:'50%'}} />
      <img src={assets.triphala2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0' ,minWidth:'50%'}} />

    </div>
    <h1 st> Natural hair cleanser that promotes healthy, shiny hair.</h1>
    <ul>
  <li>
    Made from a blend of three powerful fruits – Amla, Haritaki, and Bibhitaki, Triphala powder offers an all-natural solution for hair care and overall wellness.
  </li>
  <li>
    Known for its antioxidant properties, Triphala powder helps nourish the scalp, reduce dryness, and promote stronger, healthier hair growth.
  </li>
  <li>
    When used in hair care, Triphala can help cleanse the scalp, remove excess oil, and combat dandruff, leaving hair refreshed and rejuvenated.
  </li>
  <li>
    This versatile powder also enhances hair texture, improving softness and adding natural shine to dull, damaged hair.
  </li>
  <li>
    Derived from organic and chemical-free sources, Triphala powder is ideal for DIY hair masks and treatments, perfect for all hair types.
  </li>
  <li>
    With its natural detoxifying properties, Triphala also supports a healthy scalp, reducing inflammation and promoting balanced sebum production.
  </li>
  <li>
    Easy to mix with other Ayurvedic herbs like Shikakai and Amla powder for enhanced hair care benefits.
  </li>
  <li>
    100% pure and safe for regular use, making it a go-to ingredient in natural and Ayurvedic hair care routines.
  </li>
</ul>

     
  
  </div>

  {/* Content based on active tab */}
  <div className="tab-content" >
    <div className="hair-care-detail-page" style={{ minWidth:'50%'}}>
      <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
      <div className="recipes-container">
        {triphalaDietRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
    
    <img src={assets.triphalabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
    <p className='disclaimer ' style={{color:'black'}}><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
  </div>
</div>

    </>
  );
};

export default Triphalapowder
