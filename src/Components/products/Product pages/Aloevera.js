import React ,{useState} from 'react'
import { assets } from '../Assets/prodimg/assets'

import './Pages.css'
const Aloevera = () => {
  
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
        <div >
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
          <img src={assets.aloebanner1} alt='aloevera ' style={{ maxWidth: '100%' }} /></a>
        </div>
        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}>Pure Aloe Vera Powder - Helps Nourish Scalp, Boost Hair Growth, Aids in Skin Dryness, Cuts, Sunburns, Natural Herbal Supplement for Skin & Hair Care (100g)</h1>

          <div ><a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
              
              <div className='img-aloe'><img src={assets.aloe4} alt='hel' style={{ maxWidth: '50%' }}/>
              <img src={assets.aloe3} alt='hel' style={{ maxWidth: '50%' }}/></div> </a>
         
            </div>
            <ul>
            <li>
              Organic Aloe vera Powder : Say goodbye to chemical-filled beauty products and say yes to our Organic Aloe Vera Powder. Follow a beauty regimen that's pure, unadulterated, and rooted in nature's goodness. It is power-packed with antioxidants, vitamins, minerals, and anti-inflammatory compounds to help rejuvenate your skin and leave your hair silky.</li>
              </ul>
            
          <div style={{display:'flex',maxWidth:'100%'}}>
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
            <img src={assets.aloebanner2} alt='aloevera ' style={{ maxWidth: '100%' }} /></a>
            {/* <img src={assets.aloe2} alt='aloevera ' style={{ maxWidth: '100%' }} /> */}
            </div>

          <h2 style={{textAlign:'start'}}>About this item</h2>
          <ul>
                       <li> 100% Natural ,GMO Free: Our product is 100% natural, organic, GMO-free, and manufactured under GMP-compliant facilities. Sourced from the finest aloe vera plants from organic farms, you're receiving a package of unadulterated Aloe Vera Powder. It is delivered straight from the source, so you get the best.</li>
            <li> Promotoes Hair Growth: Aloe Vera is packed with a whole bunch of goodness—proteolytic enzymes, vitamins, minerals, polysaccharides, amino acids, antioxidants, and more! They work synergistically to help nourish the scalp, boost growth, strengthen the hair follicles, and condition them. The results? Your hair won't just grow; it'll be softer, silkier, and healthier!</li>
            <li> KEEPS SKIN SOFT & SUPPLE: Discover the dual action of our Natural Aloe Vera Powder. While its polysaccharides and amino acids lock in moisture to make your skin soft and supple, its anti-inflammatory compounds like gibberellins and auxins soothe irritation to fight skin dryness, sunburns, rashes, and cuts.</li>
            <li> DIY ALOE FACE MASK: Give your skin the glow it deserves with a soothing and cooling aloe vera face pack. Mix a small amount of the powder with either water or rose water to make a smooth paste. Clean your face with a good face wash, and then apply the pack evenly on all sides. Leave it for 15-20 minutes and rinse off with lukewarm water.</li>
            <li> DIY ALOE HAIR PACK: Mix the powder with fresh onion juice to make a smooth paste. Apply the paste to your hair and roots while gently massaging it. Make sure to cover every strand. Let it sit for 30 minutes for those powerful nutrients to soak in, then rinse it with water. With regular use, you will get silky, nourished locks.</li>

          </ul>
        </div>
        {/* <div className='Aloevera-btn'  style={{display:'flex',justifyContent:'center',gap:'10px'}} >
        <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'> <button className='btn2'  > Buy Now</button></a> 
        <a href='https://www.revaais.shop/'><button className='btn2'  > Vist Our Store</button></a> 
        </div> */}
   
      </div>
      
      <div className="tabs">

          <button
            className={setActiveTab& activeTab === 'skinCare' ? 'active' : ''}
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

export default Aloevera