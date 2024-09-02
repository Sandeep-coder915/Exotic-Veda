import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
const Curryleafpowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  const productDetails = {
    title: "Organic Curry Leaf Powder | 100% Natural Hair Dye from Rajasthan India Lawsonia Inermis Non-GMO Deep Brown (100g)",
    bannerImg: assets.Hennabanner1,
    buyNowLink: 'https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r',
    images: [assets.Curryfront, assets.Currback],
    descriptionPoints: [
      "100% NATURAL, NON-GMO: Say Hello To The Highest-Quality Curry Leaves Powder You Can Find. It Is 100% Natural, Non-GMO, And Produced In A GMP-Compliant Facility—We Tick All The Boxes. This Isn't Just About Adding Flavor To Your Food; It's About Adding Life To Your Years. Our Commitment To Purity And Quality Means You Get The Best In Every Spoonful."
      , "PROMOTES HAIR HEALTH, PREVENTS GRAYING: Curry Leaves Are A Rich Source Of Beta-Carotene, Antioxidants, And Proteins. These Essential Compounds Work Together To Prevent Premature Hair Graying, Strengthen Hair Follicles, And Ensure Your Tresses Stay Vibrant And Healthy. Plus, It's An All-Natural Remedy, Free From The Harsh Chemicals Found In Many Hair Care Products."
      , "HELPS LOWER CHOLESTEROL, BLOOD SUGAR: Battling With Cholesterol And Blood Sugar Levels Can Feel Like An Uphill Struggle, But Curry Leaves Powder Is Here To Help. Thanks To Its Fiber Content And Carbazole Alkaloids. These Compounds Work Their Magic By Lowering Cholesterol Levels And Regulating Blood Sugar, Helping You Maintain A Healthy, Happy Body"
      , "EASY TO USE: To Make A Hair Pack, Mix A Little Curry Leaves Powder With Yogurt And Apply It To Your Hair. Leave It For 30 Minutes, Then Rinse Off. To Make A Face Pack, Mix The Curry Powder With Lemon Juice And Raw Turmeric. Apply It To Your Face And Wash It After 15 Minutes. For Dietary Use, Mix 1 Tablespoon Of Curry Powder In A Glass Of Lukewarm Water And Drink It Once Daily In The Morning."




    ]
  };
  const hairCareRecipes = [
    {
      id: 1,
      title: 'Curry Leaves and Coconut Oil Mask',
      hairType: 'Dry and Frizzy Hair',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '3-4 tablespoons coconut oil'
      ],
      instructions: [
        'Heat the coconut oil until warm (not hot).',
        'Add the curry leaves powder to the warm oil and mix well.',
        'Apply the mixture to your scalp and hair, focusing on the ends where dryness is more prominent.',
        'Leave it on for 30-60 minutes or overnight for deep conditioning.',
        'Wash with a mild shampoo and condition as usual.'
      ],
      benefits: 'Nourishes dry hair, adds moisture, and reduces frizz.',
      image: assets.Curryfront // Replace with the correct image path or import
    },
    {
      id: 2,
      title: 'Curry Leaves and Lemon Juice Hair Pack',
      hairType: 'Oily Hair',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '1 tablespoon lemon juice',
        'Water to make a paste'
      ],
      instructions: [
        'Mix curry leaves powder with lemon juice and enough water to form a smooth paste.',
        'Apply the paste to your scalp and hair, focusing on the roots.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water, and follow with a mild shampoo.'
      ],
      benefits: 'Controls excess oil production, cleanses the scalp, and adds volume to oily hair.',
      image: assets.Curryfront// Replace with the correct image path or import
    },
    {
      id: 3,
      title: 'Curry Leaves and Yogurt Hair Mask',
      hairType: 'Dull and Damaged Hair',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '3 tablespoons plain yogurt',
        '1 teaspoon honey'
      ],
      instructions: [
        'Mix curry leaves powder with yogurt and honey to form a smooth paste.',
        'Apply the mixture to your scalp and hair, ensuring even coverage.',
        'Leave it on for 30-45 minutes.',
        'Rinse with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Revitalizes dull, damaged hair by nourishing the scalp, repairing damage, and adding shine.',
      image: assets.Curryfront // Replace with the correct image path or import
    },
    {
      id: 4,
      title: 'Curry Leaves and Amla Hair Pack',
      hairType: 'Hair Growth and Thickening',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '2 tablespoons amla (Indian gooseberry) powder',
        'Water to make a paste'
      ],
      instructions: [
        'Combine curry leaves powder and amla powder with enough water to form a thick paste.',
        'Apply the paste to your scalp, massaging gently to promote absorption.',
        'Leave it on for 30-40 minutes.',
        'Rinse with lukewarm water and follow with a mild shampoo.'
      ],
      benefits: 'Promotes hair growth, strengthens hair follicles, and thickens hair over time.',
      image: assets.Curryfront // Replace with the correct image path or import
    },
    {
      id: 5,
      title: 'Curry Leaves and Neem Powder Mask',
      hairType: 'Dandruff and Itchy Scalp',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '2 tablespoons neem powder',
        'Water to make a paste'
      ],
      instructions: [
        'Mix curry leaves powder and neem powder with water to create a smooth paste.',
        'Apply the paste to your scalp, focusing on areas affected by dandruff.',
        'Leave it on for 20-30 minutes.',
        'Rinse with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Combats dandruff, soothes an itchy scalp, and prevents fungal infections.',
      image: assets.Curryfront // Replace with the correct image path or import
    },
    {
      id: 6,
      title: 'Curry Leaves and Aloe Vera Hair Mask',
      hairType: 'Normal Hair',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '2 tablespoons fresh aloe vera gel',
        'Water to adjust consistency'
      ],
      instructions: [
        'Mix curry leaves powder with aloe vera gel to form a smooth, consistent paste.',
        'Apply the mixture to your scalp and hair.',
        'Leave it on for 30-45 minutes.',
        'Rinse thoroughly with water and shampoo as usual.'
      ],
      benefits: 'Maintains overall hair health, adds shine, and keeps hair soft and manageable.',
      image: assets.Curryfront// Replace with the correct image path or import
    }
  ];
  const SkinCareRecipes = [
    {
      id: 1,
      title: 'Curry Leaves and Coconut Oil Mask',
      hairType: 'Dry and Frizzy Hair',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '3-4 tablespoons coconut oil'
      ],
      instructions: [
        'Heat the coconut oil until warm (not hot).',
        'Add the curry leaves powder to the warm oil and mix well.',
        'Apply the mixture to your scalp and hair, focusing on the ends where dryness is more prominent.',
        'Leave it on for 30-60 minutes or overnight for deep conditioning.',
        'Wash with a mild shampoo and condition as usual.'
      ],
      benefits: 'Nourishes dry hair, adds moisture, and reduces frizz.',
      image: assets.Curryfront // Replace with the correct image path or import
    },
    {
      id: 2,
      title: 'Curry Leaves and Lemon Juice Hair Pack',
      hairType: 'Oily Hair',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '1 tablespoon lemon juice',
        'Water to make a paste'
      ],
      instructions: [
        'Mix curry leaves powder with lemon juice and enough water to form a smooth paste.',
        'Apply the paste to your scalp and hair, focusing on the roots.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water, and follow with a mild shampoo.'
      ],
      benefits: 'Controls excess oil production, cleanses the scalp, and adds volume to oily hair.',
      image: assets.Curryfront// Replace with the correct image path or import
    },
    {
      id: 3,
      title: 'Curry Leaves and Yogurt Hair Mask',
      hairType: 'Dull and Damaged Hair',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '3 tablespoons plain yogurt',
        '1 teaspoon honey'
      ],
      instructions: [
        'Mix curry leaves powder with yogurt and honey to form a smooth paste.',
        'Apply the mixture to your scalp and hair, ensuring even coverage.',
        'Leave it on for 30-45 minutes.',
        'Rinse with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Revitalizes dull, damaged hair by nourishing the scalp, repairing damage, and adding shine.',
      image: assets.Curryfront// Replace with the correct image path or import
    },
    {
      id: 4,
      title: 'Curry Leaves and Amla Hair Pack',
      hairType: 'Hair Growth and Thickening',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '2 tablespoons amla (Indian gooseberry) powder',
        'Water to make a paste'
      ],
      instructions: [
        'Combine curry leaves powder and amla powder with enough water to form a thick paste.',
        'Apply the paste to your scalp, massaging gently to promote absorption.',
        'Leave it on for 30-40 minutes.',
        'Rinse with lukewarm water and follow with a mild shampoo.'
      ],
      benefits: 'Promotes hair growth, strengthens hair follicles, and thickens hair over time.',
      image: assets.Curryfront// Replace with the correct image path or import
    },
    {
      id: 5,
      title: 'Curry Leaves and Neem Powder Mask',
      hairType: 'Dandruff and Itchy Scalp',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '2 tablespoons neem powder',
        'Water to make a paste'
      ],
      instructions: [
        'Mix curry leaves powder and neem powder with water to create a smooth paste.',
        'Apply the paste to your scalp, focusing on areas affected by dandruff.',
        'Leave it on for 20-30 minutes.',
        'Rinse with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Combats dandruff, soothes an itchy scalp, and prevents fungal infections.',
      image: assets.Curryfront// Replace with the correct image path or import
    },
    {
      id: 6,
      title: 'Curry Leaves and Aloe Vera Hair Mask',
      hairType: 'Normal Hair',
      ingredients: [
        '2 tablespoons curry leaves powder',
        '2 tablespoons fresh aloe vera gel',
        'Water to adjust consistency'
      ],
      instructions: [
        'Mix curry leaves powder with aloe vera gel to form a smooth, consistent paste.',
        'Apply the mixture to your scalp and hair.',
        'Leave it on for 30-45 minutes.',
        'Rinse thoroughly with water and shampoo as usual.'
      ],
      benefits: 'Maintains overall hair health, adds shine, and keeps hair soft and manageable.',
      image: assets.Curryfront // Replace with the correct image path or import
    }
  ];

  return (
    <>
      <div className='Product-Page-Contanier '>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href={productDetails.buyNowLink}>
            <img src={productDetails.bannerImg} alt='Curry Leaf Powder   Banner' style={{ maxWidth: '100%', minWidth: '100%', maxHeight: '100%', minHeight: '200px' }} />
            <div className='right-container'>
              <h2>Don't Miss Out</h2>
              <p style={{ textAlign: 'center' }}>Explore the opportunities</p>
              <button>Buy Now</button>
            </div>
          </a>
        </div>

        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}>{productDetails.title}</h1>
          <div>
            <a href={productDetails.buyNowLink}>
              <div className='img-aloe'>
                {productDetails.images.map((imgSrc, index) => (
                  <img src={imgSrc} alt={`Curry Leaf Powder  ${index + 1}`} style={{ maxWidth: '50%' }} key={index} />
                ))}

              </div>

            </a>
          </div>

          <ul>
            <li>
              ORGANIC CURRY LEAVES POWDER: Revitalize Your Health Naturally With Our Curry Leaves Powder! This Green Superfood Helps Protect Your Heart And Liver, Boosts Your Immune System, And Combat Stress. It's Your Daily Dose Of Wellness, Hidden In A Flavorful Powder That's Easy To Incorporate Into Any Meal
            </li>
          </ul>

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href={productDetails.buyNowLink}>
              <img src={assets.Currleaf1} alt='Curry Leaf Powder   Offer' style={{ maxWidth: '100%' }} />
            </a>
          </div>

          <h2 style={{ textAlign: 'start' }}>About this item</h2>
          <ul>
            {productDetails.descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="tabs" style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
          <button
            className={activeTab === 'skinCare' ? 'active' : ''}
            onClick={() => setActiveTab('skinCare')}
          >
            Tips For Skin Care
          </button>
          <button
            className={activeTab === 'hairCare' ? 'active' : ''}
            onClick={() => setActiveTab('hairCare')}
            style={{ backgroundColor: "#0056b3", color: 'white' }}
          >
            Tips For Hair Care
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          {activeTab === 'hairCare' && (
            <div className="hair-care-detail-page">
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Curry Leaf Powder   Uses for Different Hair Types</h1>
              <div className="haircare-recipes-container">
                {hairCareRecipes.map((recipe) => (
                  <div className="haircare-recipe-card" key={recipe.id}>
                    <div className="haircare-recipe-image">
                      <img src={recipe.image} alt={recipe.title} />
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
          {activeTab === 'skinCare' && (
            <div className="hair-care-detail-page">
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Curry Leaf Powder   Uses for Different Hair Types</h1>
              <div className="haircare-recipes-container">
                {SkinCareRecipes.map((recipe) => (
                  <div className="haircare-recipe-card" key={recipe.id}>
                    <div className="haircare-recipe-image">
                      <img src={recipe.image} alt={recipe.title} />
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
          <p className='disclaimer'><span>Disclaimer:</span> Use Curry Leaf Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
    </>
  )
}

export default Curryleafpowder