import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
const Multanimitti = () => {
  const recipes = [
    {
      id: 1,
      title: 'Aloe Vera and Tea Tree Oil Face Pack',
      skinType: 'Oily and Acne-Prone Skin',
      ingredients: [
        '1 tablespoon aloe vera powder',
        '2-3 drops tea tree oil',
        'Water or rose water',
      ],
      instructions: [
        'Mix aloe vera powder with enough water or rose water to form a smooth paste.',
        'Add 2-3 drops of tea tree oil and mix well.',
        'Apply the paste evenly to your face, focusing on acne-prone areas.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and pat dry.',
      ],
      benefits:
        'This face pack helps control excess oil, reduce acne, and soothe inflammation, thanks to the anti-inflammatory and antibacterial properties of aloe vera and tea tree oil.',
      img: assets.roswater,
    },
    {
      id: 2,
      title: 'Aloe Vera and Honey Hydrating Mask',
      skinType: 'Dry and Sensitive Skin',
      ingredients: [
        '1 tablespoon aloe vera powder',
        '1 tablespoon honey',
        '1 tablespoon yogurt',
      ],
      instructions: [
        'Mix aloe vera powder with honey and yogurt to create a smooth paste.',
        'Apply the mask to your face, focusing on dry and sensitive areas.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and gently pat dry.',
      ],
      benefits:
        'This mask deeply hydrates and soothes dry, sensitive skin, leaving it soft and moisturized.',
      img: assets.aloe4,
    },
    {
      id: 3,
      title: 'Aloe Vera and Cucumber Cooling Mask',
      skinType: 'Combination Skin',
      ingredients: [
        '1 tablespoon aloe vera powder',
        '2 tablespoons cucumber juice',
        '1 teaspoon yogurt',
      ],
      instructions: [
        'Mix aloe vera powder with cucumber juice and yogurt to form a smooth paste.',
        'Apply the mask to your face, focusing on both oily and dry areas.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and pat dry.',
      ],
      benefits:
        'This mask helps balance the skin, providing hydration to dry areas while cooling and soothing oily parts.',
      img: assets.aloe4,
    },
    {
      id: 4,
      title: 'Aloe Vera and Vitamin E Anti-Aging Mask',
      skinType: 'Aging Skin',
      ingredients: [
        '1 tablespoon aloe vera powder',
        '1 capsule of vitamin E (or 1 teaspoon vitamin E oil)',
        'Water',
      ],
      instructions: [
        'Mix aloe vera powder with water to create a smooth paste.',
        'Add the contents of a vitamin E capsule or vitamin E oil to the paste and mix well.',
        'Apply the mask to your face, focusing on areas prone to fine lines and wrinkles.',
        'Leave it on for 20-30 minutes.',
        'Rinse off with lukewarm water and pat dry.',
      ],
      benefits:
        'This mask nourishes the skin, reduces the appearance of fine lines, and promotes a youthful, radiant complexion.', img: assets.aloe4
    },
    {
      id: 5,
      title: 'Aloe Vera and Lemon Brightening Mask',
      skinType: 'Dull and Tired Skin',
      ingredients: [
        '1 tablespoon aloe vera powder',
        '1 teaspoon lemon juice',
        'Water or rose water',
      ],
      instructions: [
        'Mix aloe vera powder with lemon juice and enough water or rose water to form a smooth paste.',
        'Apply the mask to your face, focusing on areas that appear dull or tired.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and gently pat dry.',
      ],
      benefits:
        'This mask brightens the skin, reduces the appearance of dark spots, and revitalizes tired-looking skin.',
      img: assets.aloe4,
    },
    {
      id: 6,
      title: 'Aloe Vera and Rosewater Refreshing Mask',
      skinType: 'Normal Skin',
      ingredients: [
        '1 tablespoon aloe vera powder',
        '1 tablespoon rosewater',
        '1 teaspoon honey (optional)',
      ],
      instructions: [
        'Mix aloe vera powder with rosewater (and honey, if desired) to create a smooth paste.',
        'Apply the mask to your face, covering all areas evenly.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and gently pat dry.',
      ],
      benefits:
        'This mask refreshes and maintains the skin’s natural balance, leaving it soft, smooth, and glowing.',
      img: assets.aloe4,
    },
  ];
  const hairCareRecipes = [
    {
      id: 1,
      title: 'Aloe Vera and Coconut Oil Hair Mask',
      hairType: 'Dry and Frizzy Hair',
      ingredients: [
        '2 tablespoons aloe vera powder',
        '3-4 tablespoons coconut oil',
        '1 tablespoon honey',
      ],
      instructions: [
        'Mix aloe vera powder with coconut oil and honey to form a smooth paste.',
        'Apply the mixture to your scalp and hair, focusing on the ends where dryness is most apparent.',
        'Leave it on for 30-60 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits:
        'This mask deeply moisturizes and nourishes dry, frizzy hair, leaving it soft, smooth, and manageable.',
      image: assets.roswater,
    },
    {
      id: 2,
      title: 'Aloe Vera and Lemon Juice Hair Pack',
      hairType: 'Oily Hair',
      ingredients: [
        '2 tablespoons aloe vera powder',
        '1 tablespoon lemon juice',
        'Water or yogurt to make a paste',
      ],
      instructions: [
        'Mix aloe vera powder with lemon juice and enough water or yogurt to create a smooth paste.',
        'Apply the paste to your scalp, focusing on the roots where oil tends to build up.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and follow with a mild shampoo.',
      ],
      benefits:
        'This hair pack helps control excess oil, cleanses the scalp, and adds volume to oily hair.',
      image: assets.roswater,
    },
    {
      id: 3,
      title: 'Aloe Vera and Neem Powder Mask',
      hairType: 'Dandruff and Itchy Scalp',
      ingredients: [
        '2 tablespoons aloe vera powder',
        '2 tablespoons neem powder',
        'Water to make a paste',
      ],
      instructions: [
        'Mix aloe vera powder with neem powder and water to form a thick paste.',
        'Apply the paste to your scalp, focusing on areas affected by dandruff and itchiness.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits:
        'This mask helps reduce dandruff, soothes an itchy scalp, and promotes a healthier scalp environment.',
      image: assets.roswater,
    },
    {
      id: 4,
      title: 'Aloe Vera and Fenugreek (Methi) Hair Mask',
      hairType: 'Hair Growth and Strengthening',
      ingredients: [
        '2 tablespoons aloe vera powder',
        '2 tablespoons fenugreek powder',
        'Water to make a paste',
      ],
      instructions: [
        'Soak fenugreek powder in water overnight to create a paste.',
        'Mix the fenugreek paste with aloe vera powder.',
        'Apply the mixture to your scalp, massaging gently to stimulate the hair follicles.',
        'Leave it on for 30-45 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits:
        'This mask strengthens hair roots, reduces hair fall, and promotes healthy hair growth.',
      image: assets.roswater,
    },
    {
      id: 5,
      title: 'Aloe Vera and Hibiscus Hair Mask',
      hairType: 'Normal Hair',
      ingredients: [
        '2 tablespoons aloe vera powder',
        '2 tablespoons hibiscus powder',
        'Water or yogurt to make a paste',
      ],
      instructions: [
        'Mix aloe vera powder with hibiscus powder and water or yogurt to form a smooth paste.',
        'Apply the mask to your scalp and hair, ensuring even coverage.',
        'Leave it on for 30-45 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits:
        'This mask maintains overall hair health, adds shine, and keeps hair soft and manageable.',
      image: assets.roswater,
    },
    {
      id: 6,
      title: 'Aloe Vera and Olive Oil Repair Mask',
      hairType: 'Dull and Damaged Hair',
      ingredients: [
        '2 tablespoons aloe vera powder',
        '2 tablespoons olive oil',
        '1 tablespoon honey',
      ],
      instructions: [
        'Mix aloe vera powder with olive oil and honey to create a nourishing paste.',
        'Apply the mixture to your scalp and hair, focusing on damaged areas.',
        'Leave it on for 30-60 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits:
        'This mask repairs damaged hair, restores moisture, and brings back shine and vitality to dull hair.',
      image: assets.roswater,
    },
  ];
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  return (
    <>
      <div className='Aloevera '>
        <div >
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
            <img src={assets.multanibanner1} alt='aloevera ' style={{ maxWidth: '100%' }} /></a>
        </div>
        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}> 
            Multani Mitti Powder Fullers Earth Clay - 100% Pure Natural Indian Clay for Skin Cleansing - Suitable for All Skin Ideal for Face Masks and Body Scrubs | 100% Natural, Non-GMO (100g)</h1>

          <div ><a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>

            <div className='img-aloe'><img src={assets.multanipic} alt='hel' style={{ maxWidth: '50%' }} />
              <img src={assets.multanipic2} alt='hel' style={{ maxWidth: '50%' }} /></div> </a>

          </div>
          <ul>
            <li>
            ORGANIC BENTONITE CLAY POWDER: Imagine a clay so potent that it can pull impurities from your skin like a magnet. That's Organic Bentonite Clay Powder (Multani Mitti / Indian Healing Clay / Fullers Earth) for you—nature's very own detoxifier. From oil control to soothing inflamed skin and preventing acne, its rich composition of minerals helps bring out your skin's best glow.
            </li>
          </ul>

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
              <img src={assets.multaniposter } alt='aloevera ' style={{ maxWidth: '100%' }} /></a>
         
          </div>

          <h2 style={{ textAlign: 'start' }}>About this item</h2>
          <ul>
            <li> 100% NATURAL, GMO-FREE: Sourced directly from the fertile lands, our Multani Mitti (or Fuller's Earth), is a testament to what true organic skincare should be. Completely natural and steadfastly GMO-Free, our product isn't just good for your skin; it's a commitment to ethical, sustainable beauty practices that honor the earth and its bounty.</li>
            <li> HELPS EXFOLIATE, TIGHTEN SKIN PORES: Bentonite clay is rich in montmorillonite, a mineral that gently exfoliates, removes impurities, and minimizes enlarged pores. On the other hand, silica boosts collagen production to improve skin elasticity and firmness. Calcium steps up next to help maintain your skin's moisture balance while tightening pores for a refined, youthful appearance</li>
            <li> KEEPS SKIN SOFT & SUPPLE: Discover the dual action of our Natural Aloe Vera Powder. While its polysaccharides and amino acids lock in moisture to make your skin soft and supple, its anti-inflammatory compounds like gibberellins and auxins soothe irritation to fight skin dryness, sunburns, rashes, and cuts.</li>
            <li> CONTROLS SEBUM, EXCESS OIL: When applying our Multani Mitti Powder topically, the silica in it helps absorb excess sebum from the skin's surface, leaving it looking matte and less oily. Additionally, its calcium ions help regulate the skin's oil production and prevent it from becoming overactive.</li>
            <li> DIY BENTONITE CLAY FACE MASK: For a refreshing glow, create a face pack by mixing our Bentonite Clay Powder with either water or milk to make a smooth paste. Apply this mixture evenly across your cleansed face, allowing it to sit and work its magic for 15-20 minutes. Rinse it off with cold or lukewarm water</li>

          </ul>
        </div>
        {
        
        /* <div className='Aloevera-btn'  style={{display:'flex',justifyContent:'center',gap:'10px'}} >
        <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'> <button className='btn2'  > Buy Now</button></a> 
        <a href='https://www.revaais.shop/'><button className='btn2'  > Vist Our Store</button></a> 
        </div> */
        
        }

      </div>

      <div className="tabs">

        <button
          className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => setActiveTab('skinCare')}
        >
          Receipe For Skin Care
        </button>
        <button
          className={setActiveTab & activeTab === 'hairCare' ? 'active' : ''}
          onClick={() => setActiveTab('hairCare')}
        >
          Receipe For Hair Care
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1>Aloe Vera Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {recipes.map((recipe) => (
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

        {activeTab === 'hairCare' && (
          <div className="hair-care-detail-page">
            <h1>Aloe Vera Powder Uses for Different Hair Types</h1>
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
      </div>


    </>
  )
}

export default Multanimitti
