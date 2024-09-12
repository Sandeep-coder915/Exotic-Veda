import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';

const Shikakkhai = () => {


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
      image: assets.shika1,
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
      image: assets.shika1,
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
      image: assets.shika1,
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
      image: assets.shika1,
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
      image: assets.shika1,
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
      image: assets.shika1,
    },
  ];


  const RecipeCard = ({ recipe }) => (
    <div className="recipe-card" key={recipe.id} >
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

<div style={{ marginTop: '4rem',backgroundColor:'rgba(244,120,171,255)'}} className='shikakai-contanienr'>

  <div style={{ display: 'flex', flexDirection: 'column', }}>
    <img src={assets.shikabannersttre} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

    <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
      <img src={assets.shika2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0' ,minWidth:'50%'}} />
     
      <img src={assets.shika1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0',  minWidth:'50%'}} />
    </div>
    <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
    <img src={assets.shika1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0',  minWidth:'50%'}} />  
    <img src={assets.shika2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0' ,minWidth:'50%' }} />
    
  
    </div>
    <h1 st> Natural hair cleanser that promotes healthy, shiny hair.</h1>
    
          <ul  >
        <li>
          Crafted from pure and organic shikakai pods, our shikakai powder offers a natural and gentle solution for hair care. 
          Known for its rich nutrients, shikakai has been used in Ayurveda for centuries to promote hair growth, reduce dandruff, 
          and strengthen the hair from root to tip.
        </li>
        <li>
          Shikakai powder, when combined with amla powder, creates a nourishing hair mask that works wonders on dry, damaged hair. 
          This Ayurvedic blend, enhanced by reetha powder, bhringraj powder, and fenugreek oil, provides deep nourishment for hair growth, 
          making it a preferred choice for women seeking natural hair care solutions.
        </li>
        <li>
          The inclusion of neem powder in this mix helps combat dandruff, while hibiscus powder and amla oil work together 
          to improve hair texture, add volume, and strengthen the hair.
        </li>
        <li>
          This versatile hair care powder can be used to create effective masks that target damaged hair, promoting healthy growth 
          and scalp health.
        </li>
          <li>Derived from natural Shikakai pods, rich in essential nutrients for nourishing and strengthening hair.</li>
      <li>Acts as a gentle cleanser that enhances hair texture, leaving it soft and manageable.</li>
      <li>Known for its ability to reduce dandruff, soothe the scalp, and promote healthier hair growth.</li>
      <li>100% pure and chemical-free, ideal for DIY hair care routines and suitable for all hair types.</li>

      </ul>
     
    


    
  </div>

  {/* Content based on active tab */}
  <div className="tab-content" >
    <div className="hair-care-detail-page" style={{ minWidth:'50%'}}>
      <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
      <div className="recipes-container">
        {hairCareRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>

    <p className='disclaimer'><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
  </div>
</div>

    </>
  );
};

export default Shikakkhai;
