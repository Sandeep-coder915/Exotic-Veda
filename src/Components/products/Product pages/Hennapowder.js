import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
const Hennapowder = () => {
  const recipes = [
    {
      id: 1,
      title: 'Multani Mitti and Lemon Oil-Control Face Pack',
      skinType: 'Oily and Acne-Prone Skin',
      ingredients: [
        '2 tablespoons Multani Mitti',
        '1 tablespoon lemon juice',
        '1 tablespoon rose water',
      ],
      instructions: [
        'Mix Multani Mitti with lemon juice and rose water to form a smooth paste.',
        'Apply the paste evenly to your face, focusing on oily and acne-prone areas.',
        'Leave it on for 15-20 minutes until it dries completely.',
        'Rinse off with lukewarm water and pat your skin dry.',
      ],
      benefits: 'Controls excess oil, reduces acne, tightens pores, and deeply cleanses the skin.',
      img: assets.indheal,
    },
    {
      id: 2,
      title: 'Multani Mitti and Milk Hydrating Face Mask',
      skinType: 'Dry and Sensitive Skin',
      ingredients: [
        '2 tablespoons Multani Mitti',
        '2-3 tablespoons milk',
        '1 teaspoon honey (optional)',
      ],
      instructions: [
        'Mix Multani Mitti with milk (and honey if desired) to create a smooth, creamy paste.',
        'Apply the mixture to your face, avoiding the eye area.',
        'Leave it on for 10-15 minutes, ensuring it doesn’t dry completely.',
        'Rinse off with lukewarm water and gently pat dry.',
      ],
      benefits: 'Hydrates and nourishes dry skin, providing moisture and soothing irritation without over-drying.',
      img: assets.indheal,
    },
    {
      id: 3,
      title: 'Multani Mitti and Aloe Vera Balancing Face Mask',
      skinType: 'Combination Skin',
      ingredients: [
        '2 tablespoons Multani Mitti',
        '1 tablespoon aloe vera gel',
        '1 tablespoon rose water',
      ],
      instructions: [
        'Mix Multani Mitti with aloe vera gel and rose water to form a smooth paste.',
        'Apply the mask to your face, focusing on oily areas like the T-zone and avoiding drier areas.',
        'Leave it on for 15-20 minutes until it starts to dry.',
        'Rinse off with lukewarm water and pat dry.',
      ],
      benefits: 'Balances oil production, hydrates dry areas, and maintains an even complexion.',
      img: assets.indheal,
    },
    {
      id: 4,
      title: 'Multani Mitti and Papaya Anti-Aging Mask',
      skinType: 'Aging Skin',
      ingredients: [
        '2 tablespoons Multani Mitti',
        '2 tablespoons mashed ripe papaya',
        '1 teaspoon honey',
      ],
      instructions: [
        'Mash the ripe papaya and mix it with Multani Mitti and honey to create a smooth paste.',
        'Apply the mask to your face, focusing on areas with fine lines and wrinkles.',
        'Leave it on for 15-20 minutes until it begins to tighten.',
        'Rinse off with lukewarm water and pat dry.',
      ],
      benefits: 'Reduces fine lines, tightens the skin, and improves elasticity for a youthful appearance.',
      img: assets.indheal,
    },
    {
      id: 5,
      title: 'Multani Mitti and Turmeric Brightening Mask',
      skinType: 'Dull and Uneven Skin Tone',
      ingredients: [
        '2 tablespoons Multani Mitti',
        '1/2 teaspoon turmeric powder',
        '2-3 tablespoons yogurt',
      ],
      instructions: [
        'Mix Multani Mitti with turmeric powder and yogurt to form a smooth paste.',
        'Apply the mask to your face, focusing on areas that appear dull or have uneven skin tone.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and gently pat dry.',
      ],
      benefits: 'Brightens the skin, reduces dark spots, and revitalizes dull, tired-looking skin.',
      img: assets.indheal,
    },
    {
      id: 6,
      title: 'Multani Mitti and Sandalwood Refreshing Face Mask',
      skinType: 'Normal Skin',
      ingredients: [
        '2 tablespoons Multani Mitti',
        '1 tablespoon sandalwood powder',
        '2-3 tablespoons rose water or plain water',
      ],
      instructions: [
        'Mix Multani Mitti with sandalwood powder and rose water to form a smooth paste.',
        'Apply the mask evenly to your face.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and gently pat dry.',
      ],
      benefits: 'Cleanses and refreshes the skin, maintaining a natural balance and smooth texture.',
      img: assets.indheal,
    },
  ];
  
  const hairCareRecipes = [
    {
      id: 1,
      title: 'Multani Mitti and Lemon Juice Hair Mask',
      hairType: 'Oily Scalp and Hair',
      ingredients: [
        '3 tablespoons Multani Mitti',
        '2 tablespoons lemon juice',
        'Water or rose water to make a paste',
      ],
      instructions: [
        'Mix Multani Mitti with lemon juice and enough water or rose water to create a smooth paste.',
        'Apply the mixture to your scalp and hair, focusing on the roots where oil tends to build up.',
        'Leave it on for 20-30 minutes until it dries.',
        'Rinse thoroughly with lukewarm water and follow with a mild shampoo.',
      ],
      benefits: 'Absorbs excess oil, cleanses the scalp, and leaves hair feeling fresh and light.',
      image:assets.indheal,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 2,
      title: 'Multani Mitti, Aloe Vera Gel, and Honey Hair Mask',
      hairType: 'Dry and Frizzy Hair',
      ingredients: [
        '3 tablespoons Multani Mitti',
        '2 tablespoons aloe vera gel',
        '1 tablespoon honey',
        'Water to make a paste',
      ],
      instructions: [
        'Mix Multani Mitti with aloe vera gel, honey, and enough water to form a smooth paste.',
        'Apply the mixture to your scalp and hair, focusing on the ends where frizz is most common.',
        'Leave it on for 30 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits: 'Hydrates and nourishes dry hair, making it softer, smoother, and more manageable.',
      image: assets.indheal,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 3,
      title: 'Multani Mitti and Neem Powder Mask',
      hairType: 'Dandruff and Itchy Scalp',
      ingredients: [
        '3 tablespoons Multani Mitti',
        '2 tablespoons neem powder',
        'Water to make a paste',
      ],
      instructions: [
        'Mix Multani Mitti with neem powder and enough water to create a thick paste.',
        'Apply the paste to your scalp, focusing on areas with dandruff and itchiness.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits: 'Reduces dandruff, soothes the scalp, and promotes a healthier scalp environment.',
      image: assets.indheal,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 4,
      title: 'Multani Mitti, Egg, and Olive Oil Hair Mask',
      hairType: 'Hair Growth and Strengthening',
      ingredients: [
        '3 tablespoons Multani Mitti',
        '1 egg (beaten)',
        '1 tablespoon olive oil',
        'Water to make a paste',
      ],
      instructions: [
        'Beat the egg and mix it with Multani Mitti and olive oil to form a smooth paste.',
        'Apply the mask to your scalp and hair, massaging it in to stimulate the hair follicles.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with cold or lukewarm water (not hot, to avoid cooking the egg) and shampoo as usual.',
      ],
      benefits: 'Strengthens hair roots, promotes hair growth, and adds volume and shine to your hair.',
      image: assets.indheal,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 5,
      title: 'Multani Mitti, Yogurt, and Olive Oil Hair Mask',
      hairType: 'Dull and Damaged Hair',
      ingredients: [
        '3 tablespoons Multani Mitti',
        '2 tablespoons yogurt',
        '1 tablespoon olive oil',
        'Water to make a paste',
      ],
      instructions: [
        'Mix Multani Mitti with yogurt and olive oil to create a smooth paste.',
        'Apply the mixture to your scalp and hair, focusing on damaged areas.',
        'Leave it on for 30-40 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits: 'Repairs damaged hair, restores moisture, and brings back shine and vitality to dull hair.',
      image: assets.indheal,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 6,
      title: 'Multani Mitti and Rose Water Hair Mask',
      hairType: 'Normal Hair',
      ingredients: [
        '3 tablespoons Multani Mitti',
        '2 tablespoons rose water',
        '1 tablespoon honey (optional)',
      ],
      instructions: [
        'Mix Multani Mitti with rose water (and honey, if desired) to create a smooth paste.',
        'Apply the mask evenly to your scalp and hair.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.',
      ],
      benefits: 'Cleanses the scalp, balances oil production, and keeps hair soft and manageable.',
      image: assets.indheal,  // Replace 'roswater' with the correct image path or import
    },
  ];
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  return (
    <>
    <div className='Aloevera '>
      <div style={{position:'relative' ,maxWidth:'100%'}}>
        <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r'>
          <img src={assets.multanibanner1} alt='aloevera ' style={{ maxWidth: '100%' ,maxHeight:'100%',minHeight:'200px'}} />
          <div className='right-container'>
            <h2>Dont miss Out </h2>
      <p style={{textAlign:'center'}}>Explor  the oppurtuniites</p>
            <button>Buy Now</button>
          </div>
          
          </a>
      </div>
      <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center' }}> 
          Multani Mitti Powder Fullers Earth Clay - 100% Pure Natural Indian Clay for Skin Cleansing - Suitable for All Skin Ideal for Face Masks and Body Scrubs | 100% Natural, Non-GMO (100g)</h1>

        <div >
          <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r'>

          <div className='img-aloe'>
            <img src={assets.multanipic} alt='hel' style={{ maxWidth: '50%' }} />
            <img src={assets.multanipic2} alt='hel' style={{ maxWidth: '50%' }} />
            </div> 
            </a>

        </div>
        <ul>
          <li>
          ORGANIC BENTONITE CLAY POWDER: Imagine a clay so potent that it can pull impurities from your skin like a magnet. That's Organic Bentonite Clay Powder (Multani Mitti / Indian Healing Clay / Fullers Earth) for you—nature's very own detoxifier. From oil control to soothing inflamed skin and preventing acne, its rich composition of minerals helps bring out your skin's best glow.
          </li>
        </ul>

        <div style={{ display: 'flex', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r'>
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
          <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Multani Mitti Powder Uses for Different Skin Types</h1>
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
        <div className="hair-care-detail-page" >
          <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Multani Mitti Powder Uses for Different-Diffrent Hair</h1>
          <div className="haircare-recipes-container">
            {hairCareRecipes.map((recipe) => (
              <div className="haircare-recipe-card" key={recipe.id}>
                <div className="haircare-recipe-image">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="haircare-recipe-details">
                  <h2 >{recipe.title}</h2>
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

      <p className='disclaimer'><span>Disclaimer:</span>Use enna Powder externally.Avoid contact with eyes, and discontinue use if irritation occurs</p>
    </div>


  </>
  )
}

export default Hennapowder
