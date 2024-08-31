 
import { assets } from '../Assets/prodimg/assets'
import { useState,useEffect } from 'react';
import Loader from '../../loader/Loader';
   


const Amlapowder = () => {

    // State to manage loading
    const [isLoading, setIsLoading] = useState(true);

    // Simulate content loading with useEffect
    const handleTabChange = (tab) => {
      setIsLoading(true); // Show loader
      setActiveTab(tab); // Set active tab

      // Simulate a delay (e.g., fetching content for the tab)
      setTimeout(() => {
          setIsLoading(false); // Hide loader after content is "loaded"
      }, 1000); // Adjust the delay as needed (1000ms = 1 second)
  };
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab
  const recipes = [
    {
      id: 1,
      title: 'Amla and Multani Mitti Face Pack',
      skinType: 'Oily and Acne-Prone Skin',
      ingredients: [
        '1 tablespoon amla powder',
        '1 tablespoon Multani Mitti',
        'Rose water or plain water to make a paste'
      ],
      instructions: [
        'Mix amla powder and Multani Mitti with enough rose water or plain water to form a smooth paste.',
        'Apply the paste evenly to your face, avoiding the eyes.',
        'Leave it on for 15-20 minutes until it dries.',
        'Rinse off with lukewarm water and pat your skin dry.'
      ],
      benefits: 'Helps control excess oil, reduces acne, and tightens pores, leaving the skin feeling fresh and rejuvenated.',
      img: assets.Amla3,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 2,
      title: 'Amla and Honey Hydrating Mask',
      skinType: 'Dry and Sensitive Skin',
      ingredients: [
        '1 tablespoon amla powder',
        '1 tablespoon honey',
        '1 tablespoon yogurt or aloe vera gel'
      ],
      instructions: [
        'Mix amla powder with honey and yogurt or aloe vera gel to create a smooth paste.',
        'Apply the mixture to your face, focusing on dry and sensitive areas.',
        'Leave it on for 10-15 minutes.',
        'Rinse off with lukewarm water and gently pat dry.'
      ],
      benefits: 'Hydrates and soothes dry, sensitive skin, providing deep moisture and calming inflammation.',
      img: assets.Amla3,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 3,
      title: 'Amla and Turmeric Balancing Face Pack',
      skinType: 'Combination Skin',
      ingredients: [
        '1 tablespoon amla powder',
        '1/2 teaspoon turmeric powder',
        '1 tablespoon yogurt or aloe vera gel'
      ],
      instructions: [
        'Mix amla powder with turmeric powder and yogurt or aloe vera gel to form a smooth paste.',
        'Apply the mask to your face, covering both oily and dry areas.',
        'Leave it on for 15-20 minutes.',
        'Rinse with lukewarm water and pat dry.'
      ],
      benefits: 'Balances the skin, providing hydration to dry areas while controlling oil in the T-zone, and brightening the complexion.',
      img: assets.Amla3,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 4,
      title: 'Amla and Papaya Anti-Aging Mask',
      skinType: 'Aging Skin',
      ingredients: [
        '1 tablespoon amla powder',
        '2 tablespoons mashed ripe papaya',
        '1 teaspoon honey'
      ],
      instructions: [
        'Mash the ripe papaya and mix it with amla powder and honey to create a smooth paste.',
        'Apply the mask to your face, focusing on areas with fine lines and wrinkles.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and pat dry.'
      ],
      benefits: 'Reduces the appearance of fine lines, improves skin elasticity, and promotes a youthful glow due to the antioxidant properties of amla.',
      img: assets.Amla3,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 5,
      title: 'Amla and Lemon Brightening Mask',
      skinType: 'Dull and Tired Skin',
      ingredients: [
        '1 tablespoon amla powder',
        '1 teaspoon lemon juice',
        '1 tablespoon yogurt or milk'
      ],
      instructions: [
        'Mix amla powder with lemon juice and yogurt or milk to form a smooth paste.',
        'Apply the mask to your face, focusing on areas that appear dull or tired.',
        'Leave it on for 10-15 minutes.',
        'Rinse off with lukewarm water and gently pat dry.'
      ],
      benefits: 'Brightens the skin, reduces the appearance of dark spots, and revitalizes tired-looking skin, giving it a natural glow.',
      img: assets.Amla3,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 6,
      title: 'Amla and Rosewater Refreshing Mask',
      skinType: 'Normal Skin',
      ingredients: [
        '1 tablespoon amla powder',
        '2 tablespoons rosewater',
        '1 teaspoon honey (optional)'
      ],
      instructions: [
        'Mix amla powder with rosewater (and honey, if desired) to create a smooth paste.',
        'Apply the mask to your face, covering all areas evenly.',
        'Leave it on for 15-20 minutes.',
        'Rinse off with lukewarm water and gently pat dry.'
      ],
      benefits: 'Refreshes and maintains the skin’s natural balance, leaving it smooth, soft, and glowing.',
      img: assets.Amla3,  // Replace 'assets.indheal' with the correct image path or import
    },


  ]
  const hairCareRecipes = [
    {
      id: 1,
      title: 'Amla and Coconut Oil Hair Mask',
      hairType: 'Dry and Frizzy Hair',
      ingredients: [
        '2 tablespoons amla powder',
        '3-4 tablespoons coconut oil',
        '1 tablespoon honey'
      ],
      instructions: [
        'Heat the coconut oil until it is warm (not hot).',
        'Mix the amla powder with warm coconut oil and honey to create a smooth paste.',
        'Apply the mixture to your scalp and hair, focusing on the ends where frizz is most common.',
        'Leave it on for 30-60 minutes or overnight for deeper conditioning.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Deeply moisturizes and nourishes dry, frizzy hair, making it softer, more manageable, and adding natural shine.',
    img: assets.Amla4,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 2,
      title: 'Amla and Lemon Juice Hair Pack',
      hairType: 'Oily Hair',
      ingredients: [
        '2 tablespoons amla powder',
        '2 tablespoons lemon juice',
        'Water to make a paste'
      ],
      instructions: [
        'Mix amla powder with lemon juice and enough water to form a smooth paste.',
        'Apply the paste to your scalp and hair, focusing on the roots where oil tends to build up.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and follow with a mild shampoo.'
      ],
      benefits: 'Helps control excess oil production, cleanses the scalp, and adds volume to oily hair.',
    img: assets.Amla4,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 3,
      title: 'Amla and Neem Powder Hair Mask',
      hairType: 'Dandruff and Itchy Scalp',
      ingredients: [
        '2 tablespoons amla powder',
        '1 tablespoon neem powder',
        'Water to make a paste'
      ],
      instructions: [
        'Mix amla powder with neem powder and enough water to form a thick paste.',
        'Apply the paste to your scalp, focusing on areas affected by dandruff and itchiness.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Reduces dandruff, soothes an itchy scalp, and promotes a healthier scalp environment.',
    img: assets.Amla4,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 4,
      title: 'Amla and Fenugreek Hair Mask',
      hairType: 'Hair Growth and Strengthening',
      ingredients: [
        '2 tablespoons amla powder',
        '2 tablespoons fenugreek powder (or soaked fenugreek seeds blended into a paste)',
        'Water to make a paste'
      ],
      instructions: [
        'Mix amla powder with fenugreek powder or fenugreek paste and enough water to create a smooth mixture.',
        'Apply the mixture to your scalp, massaging gently to stimulate the hair follicles.',
        'Leave it on for 30-45 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Strengthens hair roots, promotes hair growth, and reduces hair fall.',
    img: assets.Amla4,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 5,
      title: 'Amla and Yogurt Repair Mask',
      hairType: 'Dull and Damaged Hair',
      ingredients: [
        '2 tablespoons amla powder',
        '3 tablespoons plain yogurt',
        '1 tablespoon honey'
      ],
      instructions: [
        'Mix amla powder with yogurt and honey to create a smooth paste.',
        'Apply the mixture to your scalp and hair, focusing on damaged areas.',
        'Leave it on for 30-40 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Repairs damaged hair, restores moisture, and brings back shine and vitality to dull hair.',
    img: assets.Amla4,  // Replace 'assets.indheal' with the correct image path or import
    },
    {
      id: 6,
      title: 'Amla and Aloe Vera Hair Pack',
      hairType: 'Normal Hair',
      ingredients: [
        '2 tablespoons amla powder',
        '2 tablespoons fresh aloe vera gel',
        'Water to adjust consistency'
      ],
      instructions: [
        'Mix amla powder with aloe vera gel and a little water to form a smooth paste.',
        'Apply the mask to your scalp and hair, ensuring even coverage.',
        'Leave it on for 20-30 minutes.',
        'Rinse thoroughly with lukewarm water and shampoo as usual.'
      ],
      benefits: 'Maintains overall hair health, adds shine, and keeps hair soft and manageable.',
    img: assets.Amla4,  // Replace 'assets.indheal' with the correct image path or import
    },
  ];
  const amlaDietRecipes = [
    {
      id: 1,
      title: 'Amla Powder with Warm Water (Morning Detox Drink)',
      ingredients: [
        '1 teaspoon amla powder',
        '1 glass of warm water',
        '1 teaspoon honey (optional)'
      ],
      instructions: [
        'Mix 1 teaspoon of amla powder with a glass of warm water.',
        'Stir well until the powder is completely dissolved.',
        'Add 1 teaspoon of honey if desired for taste.',
        'Drink it on an empty stomach in the morning for best results.'
      ],
      benefits: 'This drink helps detoxify the body, boosts immunity, improves metabolism, and aids in weight management.',
     img: assets.Amla3,  // Replace 'path_to_image' with the correct image path or import
    },
    {
      id: 2,
      title: 'Amla Powder Smoothie',
      ingredients: [
        '1 teaspoon amla powder',
        '1 banana',
        '1/2 cup yogurt or plant-based yogurt',
        '1/2 cup water or almond milk',
        '1 tablespoon honey or maple syrup (optional)',
        'Ice cubes (optional)'
      ],
      instructions: [
        'Combine the banana, yogurt, water or almond milk, and amla powder in a blender.',
        'Blend until smooth and creamy.',
        'Add honey or maple syrup for sweetness if desired.',
        'Add ice cubes if you prefer a chilled smoothie.',
        'Pour into a glass and serve immediately.'
      ],
      benefits: 'This smoothie enhances digestive health, boosts energy levels, and provides essential nutrients for overall wellness.',
     img: assets.Amla3,  // Replace 'path_to_image' with the correct image path or import
    },
    {
      id: 3,
      title: 'Amla Powder and Honey Mixture',
      ingredients: [
        '1 teaspoon amla powder',
        '1 teaspoon honey'
      ],
      instructions: [
        'Mix 1 teaspoon of amla powder with 1 teaspoon of honey to form a thick paste.',
        'Consume this mixture directly or add it to a glass of lukewarm water.',
        'Take it once daily, preferably in the morning.'
      ],
      benefits: 'This combination helps boost immunity, improves digestion, and is beneficial for sore throat and cough relief.',
     img: assets.Amla3,  // Replace 'path_to_image' with the correct image path or import
    },
    {
      id: 4,
      title: 'Amla Powder in Herbal Tea',
      ingredients: [
        '1 teaspoon amla powder',
        '1 cup hot water',
        '1 teaspoon lemon juice (optional)',
        '1 teaspoon honey (optional)'
      ],
      instructions: [
        'Boil a cup of water and pour it into a cup.',
        'Add 1 teaspoon of amla powder and stir well.',
        'Add lemon juice and honey for added flavor and health benefits.',
        'Let it steep for a few minutes before drinking.'
      ],
      benefits: 'This herbal tea is soothing, rich in antioxidants, and helps in detoxifying the body. It also supports respiratory health and promotes better digestion.',
     img: assets.Amla3,  // Replace 'path_to_image' with the correct image path or import
    },
    {
      id: 5,
      title: 'Amla Powder with Juices',
      ingredients: [
        '1 teaspoon amla powder',
        '1 glass of fresh fruit juice (orange, apple, or carrot juice)'
      ],
      instructions: [
        'Add 1 teaspoon of amla powder to your preferred fruit juice.',
        'Stir well until the amla powder is completely dissolved.',
        'Drink it immediately for a refreshing and nutritious beverage.'
      ],
      benefits: 'This method allows you to enjoy the health benefits of amla while adding a tangy flavor to your favorite juice. It enhances the nutrient profile and boosts the vitamin C content.',
     img: assets.Amla3,  // Replace 'path_to_image' with the correct image path or import
    },
    {
      id: 6,
      title: 'Amla Powder in Yogurt',
      ingredients: [
        '1 teaspoon amla powder',
        '1 cup plain yogurt',
        '1 tablespoon honey or jaggery (optional)'
      ],
      instructions: [
        'Mix 1 teaspoon of amla powder into a cup of plain yogurt.',
        'Stir well to combine evenly.',
        'Add honey or jaggery for sweetness if desired.',
        'Consume as a snack or part of your meal.'
      ],
      benefits: 'This combination is beneficial for gut health, as it promotes good digestion and supports a healthy immune system. It also adds a boost of vitamin C and probiotics.',
     img: assets.Amla3,  // Replace 'path_to_image' with the correct image path or import
    },
    {
      id: 7,
      title: 'Amla Powder Chutney',
      ingredients: [
        '2 teaspoons amla powder',
        '1/2 cup fresh coriander leaves',
        '2 green chilies (adjust as per taste)',
        '1/2 teaspoon cumin seeds',
        '1/2 teaspoon salt',
        '1 tablespoon lemon juice',
        'Water as needed'
      ],
      instructions: [
        'Blend coriander leaves, green chilies, cumin seeds, salt, and amla powder in a blender.',
        'Add lemon juice and a little water to achieve the desired consistency.',
        'Blend until smooth and serve as a dip with meals.'
      ],
      benefits: 'This chutney is a tasty way to incorporate amla into your diet, providing digestive benefits and adding a flavorful punch to your meals.',
     img: assets.Amla3,  // Replace 'path_to_image' with the correct image path or import
    },
  ];
  
  
  return (
    <>
      <div className='Aloevera '>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
            <img src={assets.aloebanner1} alt='aloevera 'style={{ maxWidth: '100%',minWidth:'100%', maxHeight: '100%', minHeight: '200px' }} />
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
                <img src={assets.amlback} alt='hel' style={{ maxWidth: '50%' }} />
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
                    className={activeTab === 'skinCare' ? 'active' : ''}
                    onClick={() => handleTabChange('skinCare')}
                >
                    Tips For Skin Care
                </button>
                <button
                    className={activeTab === 'hairCare' ? 'active' : ''}
                    onClick={() => handleTabChange('hairCare')}
                >
                    Tips For Hair Care
                </button>
                <button
                    className={activeTab === 'diet' ? 'active' : ''}
                    onClick={() => handleTabChange('diet')}
                >
                    Tips For Dietary Use
                </button>
            </div>

            {/* Show Loader or Content */}
            {isLoading ? (
                <Loader />
            ) : (
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
             {activeTab === 'diet' &&  (
              <div className="hair-care-detail-page" >
                {/* <div style={{marginLeft:'10px'}}>
                  <img src={assets.Amla5} style={{maxWidth:'100%',minWidth:'100%'}} ></img>
                </div> */}
                
                <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Amla Powder  Uses for Dieatary Purpose</h1>
                <div className="haircare-recipes-container">
                  {amlaDietRecipes.map((recipe) => (
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
            )}
 

      {/* Content based on active tab */}
     


    </>
  )
}

export default Amlapowder
