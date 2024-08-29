import React ,{useState} from 'react'
import { assets } from '../Assets/prodimg/assets'
const Lemongrass = () => {
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
        img:assets.aloe4,},
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
        img:assets.aloe4,},
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
        'This mask nourishes the skin, reduces the appearance of fine lines, and promotes a youthful, radiant complexion.',img:assets.aloe4
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
        img:assets.aloe4, },
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
        img:assets.aloe4, },
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
      image: assets.roswater ,
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
      image:assets.roswater ,
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
      image: assets.roswater ,
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
      image: assets.roswater ,
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
      image:assets.roswater ,
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
      image:assets.roswater ,
    },
  ];
const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  return (
    <>
    <div className='Aloevera '>
      <div style={{ position: 'relative', maxWidth: '100%' }}>
        <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
          <img src={assets.aloebanner1} alt='aloevera ' style={{ maxWidth: '100%', maxHeight: '100%', minHeight: '200px' }} />
          <div className='right-container'>
            <h2>Dont miss Out </h2>
            <p style={{ textAlign: 'center' }}>grab the oppurtuniites</p>
            <button>Buy Now</button>
          </div>

        </a>
      </div>

      <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center' }}> Organic Amla Powder Herbal Supplement Indian Gooseberry or Emblica Officinalis Helps Detoxify, Boost Immunity, Hair Growth & Long Hairs, Promotes Eye Health, 100% Natural, Non-GMO (100g)</h1>

        <div >
          <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>

            <div className='img-aloe'>
              <img src={assets.Amla1} alt='hel' style={{ maxWidth: '50%' }} />
              <img src={assets.Amla2} alt='hel' style={{ maxWidth: '50%' }} />
            </div>
          </a>

        </div>
        <ul>
          <li>
          ORGANIC AMLA POWDER: We all want that one health ingredient that does it all. Well, our Amla Powder (or Indian Gooseberry) might be what you're looking for. This isn't just a supplement; it's a game-changer for your locks and overall well-being. Rich in antioxidants, it boosts immunity and hair growth and powers up your health like nothing else.    </li>
        </ul>

        <div style={{ display: 'flex', maxWidth: '100%' }}>
          <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
            <img src={assets.amlaposter} alt='aloevera ' style={{ maxWidth: '100%' }} /></a>

        </div>

        <h2 style={{ textAlign: 'center' }}>About this item</h2>
        <ul>
          <li> HELPS IN DETOXIFICATION, BOOSTS IMMUNITY: Looking for a natural boost that feels like a fresh start for your body? Then our Amla Powder is all. This isn’t just any supplement; it’s a Vitamin C powerhouse with ellagic acid, antioxidants, and flavonoids that help keep your immune system in top shape and your body detoxed.</li>

          <li> AIDS IN EYE HEALTH: Our product isn't just any fruit powder; it's a vision superhero. Loaded with Vitamin C and essential antioxidants like beta-carotene, Amla helps maintain eye moisture, protect against age-related conditions, and even improve your ability to see in the dark. These compounds also aid in combating oxidative stress and keeping one's vision crystal clear.</li>

          <li> SBOOSTS HAIR GROWTH: Amla berry, packed with antioxidants and polyphenols, helps boost scalp health and hair growth, while its natural oils coat each strand in shine. It’s like a spa treatment in a powder, targeting hair health at its source. So, if you’re looking for that glow-up, Amla’s got your back (and your hair)!</li>
          <li>EASY TO USE: To make a face mask, mix a little amla powder with honey or yogurt and apply it to your face and neck. Leave it for 15-20 minutes, then wash it off for glowing skin. To make a hair pack, mix the amla powder with yogurt. Apply it to your hair and rinse after 30 minutes. For dietary use, mix 1 tablespoon of amla powder in a glass of water and drink it once a day.</li>

        </ul>
      </div>
     

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
          <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder  Uses for Different Skin Types</h1>
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

     {activeTab === 'hairCare' &&  (
      <div className="hair-care-detail-page" >
        <div style={{marginLeft:'10px'}}>
          <img src={assets.Amla5} style={{maxWidth:'100%',minWidth:'100%'}} ></img>
        </div>
        
        <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Amla Powder  Uses for Different-Diffrent Hair</h1>
        <div className="haircare-recipes-container">
          {hairCareRecipes.map((recipe) => (
            <div className="haircare-recipe-card" key={recipe.id}>
              <div className="haircare-recipe-image">
                <img src={recipe.img} alt={recipe.title} />
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

      <p className='disclaimer'><span>Disclaimer:</span>Use Amla Powder  externally.Avoid contact with eyes, and discontinue use if irritation occurs</p>

      <div className='Aloevera-btn' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }} >
        <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'> <button className='btn2'  > Buy Now</button></a>
        <a href='https://www.revaais.shop/'><button className='btn2'>Vist Our Store</button></a>
      </div>

    </div>


  </>
  )
}

export default Lemongrass
