import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
 

const Lemongrass = () => {
 
  const triphalaDietRecipes =  [
  {
    id: 1,
    title: 'Lemongrass Powder in Soups and Curries',
    ingredients: [
      '1-2 teaspoons lemongrass powder',
      'Soup or curry base',
      'Coconut milk (optional)'
    ],
    instructions: [
      'Add 1-2 teaspoons of lemongrass powder while preparing soups, curries, or stews.',
      'Stir well to incorporate the powder.',
      'Simmer as usual, and adjust seasoning to taste.',
      'Serve hot.'
    ],
    benefits: 'Enhances the flavor with a lemony zest and provides a subtle hint of freshness, especially in coconut milk-based dishes.',
   image:assets.lemonimg1,  // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
  {
    id: 2,
    title: 'Lemongrass Powder Marinade and Rub',
    ingredients: [
      '1 teaspoon lemongrass powder',
      'Other spices and herbs (as desired)',
      'Meats, tofu, or vegetables'
    ],
    instructions: [
      'Mix 1 teaspoon of lemongrass powder with other spices and herbs to create a marinade or rub.',
      'Apply the mixture to meats, tofu, or vegetables.',
      'Let it marinate for at least 30 minutes before cooking.',
      'Cook as desired.'
    ],
    benefits: 'Adds a fragrant, citrusy flavor that complements grilled or roasted dishes.',
    image:assets.lemonimg1,  // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
  {
    id: 3,
    title: 'Lemongrass Powder in Rice and Noodle Dishes',
    ingredients: [
      '1 teaspoon lemongrass powder',
      'Rice or noodles',
      'Other vegetables or proteins (optional)'
    ],
    instructions: [
      'Sprinkle 1 teaspoon of lemongrass powder into rice or noodle dishes during cooking.',
      'Stir well to distribute the powder evenly.',
      'Add to fried rice or stir-fry recipes for additional flavor.',
      'Cook as usual.'
    ],
    benefits: 'Adds a refreshing taste that brightens up the overall flavor profile of the dish.',
    image:assets.lemonimg1,  // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
  {
    id: 4,
    title: 'Lemongrass Tea',
    ingredients: [
      '1 teaspoon lemongrass powder',
      '1 cup boiling water',
      'Honey or lemon (optional)'
    ],
    instructions: [
      'Boil 1 cup of water.',
      'Add 1 teaspoon of lemongrass powder to the boiling water.',
      'Let it steep for 5-10 minutes.',
      'Strain and serve hot.',
      'Add honey or lemon for additional flavor if desired.'
    ],
    benefits: 'Lemongrass tea is a natural detoxifier, aids digestion, reduces bloating, and has calming properties.',
    image:assets.lemonimg1,   // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
  {
    id: 5,
    title: 'Lemongrass Powder in Flavored Water and Smoothies',
    ingredients: [
      'A pinch of lemongrass powder',
      'Water or smoothie base',
      'Citrus fruits (optional)'
    ],
    instructions: [
      'Add a pinch of lemongrass powder to your water, smoothies, or juices.',
      'Stir or blend well.',
      'Serve chilled or as desired.'
    ],
    benefits: 'Provides a mild, aromatic flavor and can help enhance the health benefits of your beverages.',
    image:assets.lemonimg1,   // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
  {
    id: 6,
    title: 'Lemongrass Face Mask',
    ingredients: [
      '1 teaspoon lemongrass powder',
      '2 tablespoons yogurt or honey'
    ],
    instructions: [
      'Mix lemongrass powder with yogurt or honey to form a smooth paste.',
      'Apply the mixture to your face, avoiding the eyes.',
      'Leave it on for 10-15 minutes.',
      'Rinse off with lukewarm water and pat dry.'
    ],
    benefits: 'Helps cleanse the skin, reduce acne, and provides a natural glow.',
    image:assets.lemonimg1,   // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
  {
    id: 7,
    title: 'Lemongrass Body Scrub',
    ingredients: [
      '1 tablespoon lemongrass powder',
      '1/2 cup sugar',
      '1/4 cup coconut oil'
    ],
    instructions: [
      'Mix lemongrass powder with sugar and coconut oil to create a scrub.',
      'Use it in the shower to exfoliate your skin, gently massaging in circular motions.',
      'Rinse thoroughly with water.'
    ],
    benefits: 'Exfoliates dead skin cells, leaving the skin smooth and refreshed. The antibacterial properties help cleanse the skin.',
    image:assets.lemonimg1,   // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
  {
    id: 8,
    title: 'Aromatherapy Sachets with Lemongrass Powder',
    ingredients: [
      'A small amount of lemongrass powder',
      'Sachet or cloth bag'
    ],
    instructions: [
      'Place a small amount of lemongrass powder in a sachet or cloth bag.',
      'Hang it in closets, drawers, or bathrooms to impart a refreshing scent.'
    ],
    benefits: 'Naturally freshens the air, creating a calming and uplifting environment.',
    image:assets.lemonimg1,   // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
  {
    id: 9,
    title: 'Natural Insect Repellent with Lemongrass Powder',
    ingredients: [
      'Lemongrass powder',
      'Sprinkling tool'
    ],
    instructions: [
      'Sprinkle lemongrass powder around windowsills, doorways, and other entry points.',
      'Reapply as needed to maintain effectiveness.'
    ],
    benefits: 'Acts as a natural insect repellent due to its strong citrus scent, which insects dislike.',
    image:assets.lemonimg1,   // Replace 'path_to_image' with the correct image path or import
    buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
  },
];
 
const RecipeCard = ({ recipe }) => (
    <div className="recipe-card" key={recipe.id} >
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
      </div>
      <div className="recipe-details">
        <h2>{recipe.title}</h2>
         
        <div className="ingredients2">
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions2">
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

<div style={{ marginTop: '4rem',backgroundColor:'rgba(181,207,116,255)'}} className='  Lemongrass-contanienr'>

  <div style={{ display: 'flex', flexDirection: 'column', }}>
    <img src={assets.lemonstrexh} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

    <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
      <img src={assets. lemonimg1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0' ,minWidth:'50%'}} />
     
      <img src={assets.lemonimg } alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0',  minWidth:'50%'}} />
    </div>
    <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
           
    <img src={assets.lemonimg } alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0',  minWidth:'50%'}} />
      <img src={assets.lemonimg1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0' ,minWidth:'50%'}} />

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
      <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Lemongrass Powder use for  Diet </h1>
      <div className="recipes-container">
        {triphalaDietRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
    
    <img src={assets.lemonstrexh} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
    <p className='disclaimer ' style={{color:'black'}}><span>Disclaimer:</span> Use Lemongrass Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
  </div>
</div>

    </>
  );
};


export default Lemongrass;
