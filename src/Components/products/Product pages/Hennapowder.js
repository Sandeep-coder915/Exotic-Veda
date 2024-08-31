import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';

const Hennapowder = () => {
  const [activeTab, setActiveTab] = useState('hairCare'); // State to track the active tab

  const productDetails = {
    title: "Organic Henna Powder | 100% Natural Hair Dye from Rajasthan India Lawsonia Inermis Non-GMO Deep Brown (100g)",
    bannerImg: assets.Hennabanner1,
    buyNowLink: 'https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r',
    images: [assets.Henna3, assets.Henna4],
    descriptionPoints: [ "Natural Hair Dye: Exotic Veda Henna Powder Is A Natural Hair Dye That Offers A Chemical-Free Way To Color Your Hair. It Provides A Rich, Deep Shade Of Red-Brown That Enhances Your Hair's Natural Beauty. Suitable For All Hair Types, It Covers Grays Effectively And Leaves Hair Looking Vibrant And Healthy Without The Use Of Harmful Chemicals"
      ,"Nourishes And Conditions Hair: This Henna Powder Is Rich In Tannins And Essential Nutrients That Nourish And Condition Your Hair. Regular Use Helps To Improve Hair Texture, Making It Softer, Shinier, And More Manageable. It Also Helps Repair Damaged Hair By Providing Deep Conditioning."
      ,	"Promotes Scalp Health: The Antifungal And Antibacterial Properties Of Exotic Veda Henna Powder Help Maintain A Healthy Scalp. It Can Soothe Irritation, Reduce Dandruff, And Combat Other Scalp Issues, Leaving Your Scalp Feeling Refreshed And Balanced.",
    
      "Strengthens Hair Roots: Henna Is Known For Its Strengthening Properties, Which Can Help Reduce Hair Breakage And Split Ends. By Fortifying Hair Roots And Strands, This Powder Promotes Thicker, Stronger Hair Growth, Minimizing Hair Fall And Enhancing Overall Hair Health.","Versatile Use For Different Hair Types: Whether You Have Dry, Oily, Or Normal Hair, Exotic Veda Henna Powder Is Versatile Enough To Meet Your Hair Care Needs. It Can Be Mixed With Various Natural Ingredients Like Coconut Milk, Aloe Vera, Or Yogurt To Create Custom Hair Masks That Target Specific Hair Concerns.",
      

    ]
  };
  const hairCareRecipes = [
    {
        id: 1,
        title: 'Henna, Coconut Milk, and Olive Oil Hair Mask',
        hairType: 'Dry and Frizzy Hair',
        ingredients: [
            '2 tablespoons henna powder',
            '2 tablespoons coconut milk',
            '1 tablespoon olive oil',
            'Water to make a paste'
        ],
        instructions: [
            'Mix henna powder with coconut milk, olive oil, and enough water to form a smooth paste.',
            'Apply the mixture to your scalp and hair, focusing on the ends where frizz is most common.',
            'Leave it on for 1-2 hours.',
            'Rinse thoroughly with lukewarm water and shampoo as usual.'
        ],
        benefits: 'Deeply conditions and nourishes dry hair, reducing frizz and adding softness and shine.',
        image: assets.Henna5 // Replace with the correct image path or import
    },
    {
        id: 2,
        title: 'Henna and Lemon Juice Hair Mask',
        hairType: 'Oily Hair',
        ingredients: [
            '2 tablespoons henna powder',
            '2 tablespoons lemon juice',
            'Water to make a paste'
        ],
        instructions: [
            'Mix henna powder with lemon juice and enough water to form a smooth paste.',
            'Apply the paste to your scalp and hair, focusing on the roots where oil tends to accumulate.',
            'Leave it on for 1 hour.',
            'Rinse thoroughly with lukewarm water and follow with a mild shampoo.'
        ],
        benefits: 'Controls oil production, cleanses the scalp, and adds volume to oily hair.',
        image: assets.Henna5// Replace with the correct image path or import
    },
    {
        id: 3,
        title: 'Henna and Neem Powder Hair Mask',
        hairType: 'Dandruff and Itchy Scalp',
        ingredients: [
            '2 tablespoons henna powder',
            '1 tablespoon neem powder',
            'Water to make a paste'
        ],
        instructions: [
            'Mix henna powder with neem powder and enough water to form a thick paste.',
            'Apply the paste to your scalp, focusing on areas affected by dandruff and itchiness.',
            'Leave it on for 30-45 minutes.',
            'Rinse thoroughly with lukewarm water and shampoo as usual.'
        ],
        benefits: 'Reduces dandruff, soothes itchy scalp, and promotes a healthier scalp environment.',
        image: assets.Henna5// Replace with the correct image path or import
    },
    {
        id: 4,
        title: 'Henna and Amla Powder Hair Mask',
        hairType: 'Hair Growth and Strengthening',
        ingredients: [
            '2 tablespoons henna powder',
            '2 tablespoons amla powder (Indian gooseberry)',
            'Water to make a paste'
        ],
        instructions: [
            'Mix henna powder with amla powder and enough water to create a smooth mixture.',
            'Apply the mixture to your scalp, massaging gently to stimulate the hair follicles.',
            'Leave it on for 1-2 hours.',
            'Rinse thoroughly with lukewarm water and shampoo as usual.'
        ],
        benefits: 'Strengthens hair roots, promotes hair growth, and reduces hair fall.',
        image: assets.Henna5// Replace with the correct image path or import
    },
    {
        id: 5,
        title: 'Henna, Yogurt, and Honey Hair Mask',
        hairType: 'Dull and Damaged Hair',
        ingredients: [
            '2 tablespoons henna powder',
            '3 tablespoons yogurt',
            '1 tablespoon honey'
        ],
        instructions: [
            'Mix henna powder with yogurt and honey to create a smooth paste.',
            'Apply the mixture to your scalp and hair, focusing on damaged areas.',
            'Leave it on for 30-40 minutes.',
            'Rinse thoroughly with lukewarm water and shampoo as usual.'
        ],
        benefits: 'Repairs damage, restores moisture, and brings back shine and vitality to dull hair.',
        image: assets.Henna5 // Replace with the correct image path or import
    },
    {
        id: 6,
        title: 'Henna and Aloe Vera Gel Hair Mask',
        hairType: 'Normal Hair',
        ingredients: [
            '2 tablespoons henna powder',
            '2 tablespoons aloe vera gel',
            'Water to adjust consistency'
        ],
        instructions: [
            'Mix henna powder with aloe vera gel and a little water to form a smooth paste.',
            'Apply the mask to your scalp and hair, ensuring even coverage.',
            'Leave it on for 1 hour.',
            'Rinse thoroughly with lukewarm water and shampoo as usual.'
        ],
        benefits: 'Maintains overall hair health, adds shine, and keeps hair soft and manageable.',
        image: assets.Henna5 // Replace with the correct image path or import
    }
];

  return (
    <>
      <div className='Aloevera'>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href={productDetails.buyNowLink}>
            <img src={productDetails.bannerImg} alt='Henna Powder  Banner' style={{ maxWidth: '100%',minWidth:'100%', maxHeight: '100%', minHeight: '200px' }} />
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
                  <img src={imgSrc} alt={`Henna Powder  ${index + 1}`} style={{ maxWidth: '50%' }} key={index} />
                ))}
              </div>
            </a>
          </div>
          <ul>
          <li>
          ORGANIC BENTONITE CLAY POWDER: Imagine a clay so potent that it can pull impurities from your skin like a magnet. That's Organic Bentonite Clay Powder (Multani Mitti / Indian Healing Clay / Fullers Earth) for you—nature's very own detoxifier. From oil control to soothing inflamed skin and preventing acne, its rich composition of minerals helps bring out your skin's best glow.
          </li>
        </ul>

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href={productDetails.buyNowLink}>
              <img src={assets.Hennabanner2} alt='Henna Powder  Offer' style={{ maxWidth: '100%' }} />
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
          {/* <button
            className={activeTab === 'skinCare' ? 'active' : ''}
            onClick={() => setActiveTab('skinCare')}
          >
            Recipe For Skin Care
          </button> */}
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
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Henna Powder  Uses for Different Hair Types</h1>
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
          <p className='disclaimer'><span>Disclaimer:</span> Use Henna Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
    </>
  );
};

export default Hennapowder;
