import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { Link } from 'react-router-dom';

const Lemongrass = () => {
  const [activeTab, setActiveTab] = useState('Diet'); // State to track the active tab

  const recipes =[
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
        img: assets.lemonimg,  // Replace 'path_to_image' with the correct image path or import
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
        img: assets.Lemongrass2,  // Replace 'path_to_image' with the correct image path or import
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
        img: assets.Lemongrass3,  // Replace 'path_to_image' with the correct image path or import
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
        img: assets.Lemongrass4,  // Replace 'path_to_image' with the correct image path or import
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
        img: assets.Lemongrass5,  // Replace 'path_to_image' with the correct image path or import
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
        img: assets.Lemongrass6,  // Replace 'path_to_image' with the correct image path or import
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
        img: assets.Lemongrass7,  // Replace 'path_to_image' with the correct image path or import
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
        img: assets.Lemongrass8,  // Replace 'path_to_image' with the correct image path or import
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
        img: assets.Lemongrass9,  // Replace 'path_to_image' with the correct image path or import
        buylink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r',
    },
];

 
  const TabButton = ({ label, tabKey }) => (
    <button
      className={activeTab === tabKey ? 'active' : ''}
      onClick={() => setActiveTab(tabKey)}
    >
      {label}
    </button>
  );

  const RecipeCard = ({ recipe, type }) => (
    <div className={`recipe-card ${type}-recipe-card`} key={recipe.id}>
      <div className="recipe-image">
        <Link to={recipe.buylink}>
          <img src={recipe.img} alt={recipe.title} style={{ maxWidth: '100%' }} />
        </Link>
      </div>
      <div className="recipe-details">
        <h2>{recipe.title}</h2>
        <h4>{type === 'Diet' ? recipe.skinType : recipe.hairType}</h4>
        <div className="ingredients">
          <h5>Ingredients:</h5>
          <ul>{recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
        </div>
        <div className="instructions">
          <h5>Instructions:</h5>
          <ul>{recipe.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}</ul>
        </div>
        <p><strong>Benefits:</strong> {recipe.benefits}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className='Product-Page-Contanier'>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r'>
            <img src={assets.lemonstrexh} alt='aloevera ' style={{ maxWidth: '100%', minWidth: '100%', maxHeight: '100%', minHeight: '200px' }} />
            <div className='right-container'>
              <h2>Don't Miss Out</h2>
              <p style={{ textAlign: 'center' }}>Grab the opportunities</p>
              <button>Buy Now</button>
            </div>
          </a>
        </div>

        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}>Organic Amla Powder Herbal Supplement</h1>

          <div>
            <a href='https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r'>
              <div className='img-aloe'>
                <img src={assets.Amla1} alt='Amla' style={{ maxWidth: '50%' }} />
                <img src={assets.Amla2} alt='Amla' style={{ maxWidth: '50%' }} />
              </div>
            </a>
          </div>
          <ul>
            <li>ORGANIC AMLA POWDER: We all want that one health ingredient that does it all. Well, our Amla Powder (or Indian Gooseberry) might be what you're looking for. This isn't just a supplement; it's a game-changer for your locks and overall well-being. Rich in antioxidants, it boosts immunity and hair growth and powers up your health like nothing else.</li>
          </ul>

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r'>
              <img src={assets.lemonbanner1} alt='Amla Banner' style={{ maxWidth: '100%' }} />
            </a>
          </div>

          <h2 style={{ textAlign: 'center' }}>About this item</h2>
          <ul>
            <li>HELPS IN DETOXIFICATION, BOOSTS IMMUNITY: Looking for a natural boost that feels like a fresh start for your body? Then our Amla Powder is all. This isn’t just any supplement; it’s a Vitamin C powerhouse with ellagic acid, antioxidants, and flavonoids that help keep your immune system in top shape and your body detoxed.</li>
            <li>AIDS IN EYE HEALTH: Our product isn't just any fruit powder; it's a vision superhero. Loaded with Vitamin C and essential antioxidants like beta-carotene, Amla helps maintain eye moisture, protect against age-related conditions, and even improve your ability to see in the dark.</li>
            <li>BOOSTS HAIR GROWTH: Amla berry, packed with antioxidants and polyphenols, helps boost scalp health and hair growth, while its natural oils coat each strand in shine. It’s like a spa treatment in a powder, targeting hair health at its source.</li>
            <li>EASY TO USE: To make a face mask, mix a little amla powder with honey or yogurt and apply it to your face and neck. Leave it for 15-20 minutes, then wash it off for glowing skin. To make a hair pack, mix the amla powder with yogurt. Apply it to your hair and rinse after 30 minutes. For dietary use, mix 1 tablespoon of amla powder in a glass of water and drink it once a day.</li>
          </ul>
        </div>

        <div className="tabs" style={{justifyContent:'center',display:'flex'}}>
          <TabButton label="Tips For Diet" tabKey="Diet"   />
          {/* <TabButton label="Tips For Hair Care" tabKey="hairCare" /> */}
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          {activeTab === 'Diet' && (
            <div className="product-detail-page">
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder Uses for Different Skin Types</h1>
              <div className="recipes-container">
                {recipes.map((recipe) => (
                  <RecipeCard recipe={recipe} type="Diet" key={recipe.id} />
                ))}
              </div>
            </div>
          )}

         
        </div>
      </div>
    </>
  );
};

export default Lemongrass;
