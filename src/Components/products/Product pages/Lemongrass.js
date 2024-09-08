import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { Link } from 'react-router-dom';

const Lemongrass = () => {
  const [activeTab, setActiveTab] = useState('Diet'); // State to track the active tab

  const recipes = [
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
      img: assets.lemonimg, // Replace 'path_to_image' with the correct image path or import
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
      img: assets.lemonimg, // Replace 'path_to_image' with the correct image path or import
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
      img: assets.lemonimg,  // Replace 'path_to_image' with the correct image path or import
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
      img: assets.lemonimg,  // Replace 'path_to_image' with the correct image path or import
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
      img: assets.lemonimg,  // Replace 'path_to_image' with the correct image path or import
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
      img: assets.lemonimg,  // Replace 'path_to_image' with the correct image path or import
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
      img: assets.lemonimg,  // Replace 'path_to_image' with the correct image path or import
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
      img: assets.lemonimg,  // Replace 'path_to_image' with the correct image path or import
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
              <p style={{ textAlign: 'center' }}>Grab the Opportunities</p>
              <button>Buy Now</button>
            </div>
          </a>
        </div>

        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}>Lemongrass Powder | Dried Cymbopogon citratus | 100% Natural, Non-GMO (100g)</h1>

          <div>
            <a href='https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r'>
              <div className='img-aloe'>
                <img src={assets.lemonimg1} alt='Amla' style={{ maxWidth: '50%' }} />
                <img src={assets.lemonimg} alt='Amla' style={{ maxWidth: '50%' }} />

              </div>
            </a>
          </div>
          <ul>
            <li>Organic Lemongrass Powder: Get Healthy, Naturally, With Our Pure Lemongrass Powder! From Soothing Your Stomach To Giving Your Immune System A Boost, This Powder Is A Little Powerhouse. The Best Part? It Adds A Delicious Twist To Whatever You're Cooking. Who Knew Getting Healthy Could Taste So Good?.</li>
          </ul>

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_sid=8817af824&_ss=r'>
              <img src={assets.lemonbanner1} alt='Amla Banner' style={{ maxWidth: '100%' }} />
            </a>
          </div>

          <h2 style={{ textAlign: 'center' }}>About this item</h2>
          <ul>
            <li> 100% Natural, Non-GMO: Our Lemongrass Powder Is 100% Natural And Free From Gmos. Plus, It’s Made In A GMP-Compliant Facility, Ensuring The Highest Quality. Add A Zesty Twist To Your Meals And Feel Good About What You're Putting Into Your Body.</li>

            <li>Helps Control Obesity, Reduce Fever: Struggling With Extra Pounds Or Fighting A Fever? Lemongrass Powder Is Here To Help. Packed With Citral, A Compound Known For Boosting Metabolism And Aiding Weight Loss, It Also Has Antipyretic Properties To Help Reduce Fever.</li>
            
            <li>Boosts Immunity, Promotes Healthy Appetite: Lemongrass Contains Antioxidants Like Chlorogenic Acid, Isoorientin, And Swertiajaponin, Which Neutralize Free Radicals, Reduce Oxidative Stress, And Boost Immunity. Citral In The Powder Also Improves Digestion And Maintains A Healthy Appetite..</li>

            <li>Helps Increase Urinary Output & Detoxify: More Than Just Flavor, Lemongrass Powder Acts As A Natural Detoxifier. Citral Increases Urinary Output, Helping Flush Out Toxins And Maintain A Healthy Balance In The Body.</li>

            <li>DIY Lemongrass Drink: Elevate Your Health Routine With A Refreshing Lemongrass Powder Drink. Dissolve One Tablespoon Of The Powder In Warm Water, Add A Touch Of Honey For Sweetness, Stir Well, And Enjoy Once Or Twice Daily For A Natural Wellness Boost.</li>
          </ul>
        </div>

        <div className="tabs" style={{ justifyContent: 'center', display: 'flex' }}>
          <TabButton label="Tips For Diet" tabKey="Diet" />
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
