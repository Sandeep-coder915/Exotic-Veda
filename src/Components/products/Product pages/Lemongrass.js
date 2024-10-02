import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { lemongrassDietRecipes } from './Recepisdata'; // Import the recipe data
import RecipeCard from './Reciepicard';
const Lemongrass = () => {

  const images = [
    assets.lemonimg1,
    assets.lemonimg,
    assets.lemonfeatures,
    assets.lemonwarnig ,
    assets.lemonbowl,
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };


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
        <div className="product-details">
          <h1 style={{ textAlign: 'justify', fontSize: '18px' }}>
            Organic Lemongrass Powder | Dried Lemon Powder | Vitamin C Rich | Perfect For Cooking | Dandelion Tea Enhancer | Lemon Juice Substitute | Real Lemon Zest | Micro Ingredients | 100gm </h1>

          <h2>About this item</h2>
          <ul style={{ textAlign: 'justify', fontSize: '14px' }}>
           <li>Organic Lemongrass Powder: Delight In The Gluten Free, Organic Lemongrass Powder For Cooking. Ideal For Adding Flavor To Thai Dishes, Soups, And Marinades.</li> 
            <li>Natural Detoxifier: Helps cleanse the body by removing toxins, promoting overall health and vitality.</li>
            <li>Versatile Use: Ideal for culinary use in soups, teas, and marinades, as well as for natural skincare and wellness applications.</li>
            <li>Aromatic and Refreshing: Offers a citrusy, fresh aroma, perfect for enhancing the flavor of dishes and teas.</li>
            <li>Dehydrated Lemon Powder: Enhance Your Recipes With Our Organic, Gluten Free Dehydrated Lemon Powder. Perfect For Desserts, Beverages, And Seasoning.</li>
            <li>Lemongrass Paste For Cooking: Experience The Convenience Of Our Gluten Free, Organic Lemongrass Paste. Ideal For Adding Authentic Flavor To Thai Dishes And More.</li>
            <li>Freeze Dried Lemon Powder: Our Gluten Free, Organic Freeze Dried Lemon Powder Is Perfect For Enhancing Drinks, Desserts, And Baked Goods With True Lemon Flavor.</li>



          </ul>
        </div>

      </div >
      <button className='pppp'>Buy Now</button>





      <div style={{ marginTop: '1rem', backgroundColor: 'rgba(181,207,116,255)' }} className='  Lemongrass-contanienr'>
     
        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Lemongrass Powder use for  Diet </h1>
            <div className="recipes-container">
              {lemongrassDietRecipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <img src={assets.lemonstrexh} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Lemongrass Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>

    </>
  );
};


export default Lemongrass;
