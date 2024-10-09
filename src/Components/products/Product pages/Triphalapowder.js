import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import { triphalaDietRecipes } from './Recepisdata';
const Triphalapowder = () => {


  const images = [
    assets.triphala2,
    assets.triphala1,
    assets.triphala3,
    assets.triphala4,
    assets.triphala5,
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };
  const RecipeCard = ({ recipe }) => (
    <div className="recipe-card" key={recipe.id} >
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
      </div>
      <div className="recipe-details">
        <h2>{recipe.title}</h2>

        <div className="ingredients1">
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions1">
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

      <div className="product-page1"   >
        <div className="image-gallery">
          {/* Side images */}
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                // style={{maxWidth:'50%',minWidth:'50%'}}
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)

                }
              />
            ))}
          </div>

          {/* Main image with hover effect */}
          <div className="main-image-container">
            <img
              src={currentImage}
              alt="Main product"
              className="main-image"
            />
          </div>
        </div>

        {/* Product details */}
        <div className="product-details" style={{textAlign:'justify'}}>
          <h2 style={{textAlign:'justify'}} > Organic Triphala Powder - Detox Cleanse for Lung, Liver, Colon, and Gut Health - Herbal Skin Care and Fiber Powder - Detox Cleanse with Triphala Ghrita and Triphala Organic India - 100g</h2>
          <ul >
            <li>
              Made from a blend of three powerful fruits – Amla, Haritaki, and Bibhitaki, Triphala powder offers an all-natural solution for hair care and overall wellness.
            </li>
            <li>
              Known for its antioxidant properties, Triphala powder helps nourish the scalp, reduce dryness, and promote stronger, healthier hair growth.
            </li>
            <li>
              When used in hair care, Triphala can help cleanse the scalp, remove excess oil, and combat dandruff, leaving hair refreshed and rejuvenated.
            </li>
            <li>
              This versatile powder also enhances hair texture, improving softness and adding natural shine to dull, damaged hair.
            </li>
            <li>
              Derived from organic and chemical-free sources, Triphala powder is ideal for DIY hair masks and treatments, perfect for all hair types.
            </li>
            <li>
              With its natural detoxifying properties, Triphala also supports a healthy scalp, reducing inflammation and promoting balanced sebum production.
            </li>
            <li>
              Easy to mix with other Ayurvedic herbs like Shikakai and Amla powder for enhanced hair care benefits.
            </li>
            <li>
              100% pure and safe for regular use, making it a go-to ingredient in natural and Ayurvedic hair care routines.
            </li>
          </ul>



        </div>

      </div >
      <button className='pppp'>Buy Now</button>





      <div style={{ marginTop: '4rem', backgroundColor: 'rgba(249,225,199,255)' }} className='Tripahala-contanienr'>

        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src={assets.triphalabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
         


        </div>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
            <div className="recipes-container">
              {triphalaDietRecipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <img src={assets.triphalabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>

    </>
  );
};

export default Triphalapowder
