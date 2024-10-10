import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import { sandalwoodrecipes } from './Recepisdata';

const Sandalwood = () => {

  const images = [
    assets.sandalfront,
    assets.sandaluse2,
    assets.sandaluse,
    assets.sandaluse4,
    assets.sandaluse3,
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

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
            Organic Pure Sandalwood Powder For Face And Skin | Natural Skincare Sandalwood Scent | Anti-Inflammatory Chandan Powder | Aromatic Sandalwood Powder Organic | Scented Body Powder</h1>
          <h2>About this item</h2>
          <ul style={{ textAlign: 'justify', fontSize: '14px' }}>
            <li>Organic Pure Sandalwood Powder: Experience The Unparalleled Purity Of Our Organic Pure Sandalwood Powder, Sourced From The Finest Sandalwood. Ideal For Skincare Rituals, It Combines Seamlessly With Orange Peel Powder, Multani Mitti Powder, And Rose Powder For A Holistic Beauty Regimen.
            </li>
            <li>
              Detanning And Skincare Benefits: Our Sandalwood Powder For Face Offers Exceptional Detanning Properties, Making It A Must-Have For Natural Skincare. Blended With Multani Mitti Powder And Rose Powder, It Also Serves As A Powerful Anti-Inflammatory And Antiseptic Solution.
            </li>
            <li>
              Versatile Usage: Perfect For Both Face And Body, Our Sandalwood Powder Can Be Mixed With Sandalwood Oil For Skin And Wild Turmeric Powder For Skin. Its Aromatic Benefits Make It An Ideal Ingredient For Scented Body Powder And Powder Incense, Elevating Your Skincare Routine.
            </li>
            <li>
              Aromatic And Therapeutic: Infused With The Soothing Aroma Of Sandalwood, Our Powder Serves As An Excellent Incense Powder. It Can Be Combined With Rose Powder Organic And Vanilla Body Powder For Women, Providing A Calming And Scented Body Powder Experience.
            </li>

            <li>
              Natural Skincare: Harness The Natural Skincare Benefits Of Our Sandalwood Powder For Skin. It Pairs Wonderfully With Lemon Peel Powder, Chandan Powder For Face, Red Sandalwood Powder, And Vanilla Body Powder, Providing A Comprehensive And Luxurious Skincare Solution.
            </li>



          </ul>
        </div>

      </div >
      <button className='pppp'>Buy Now</button>






      <div className='Product-Page-Contanier'>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/exotic-veda-pure-organic-sandalwood-powder-for-men-women-100-natural-non-gmo-100g?_pos=1&_sid=3b47693c2&_ss=r'>
            <img src={assets.sandal1} alt='Organic Pure Sandalwood Powder for Face and Skin | Natural Skincare Sandalwood Scent | Anti-inflammatory Chandan Powder | Aromatic Sandalwood Powder Organic | Scented Body Powder  ' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <div className='right-container'>
              <h2>Dont miss Out </h2>
              <p style={{ textAlign: 'center' }}>Explor  the oppurtuniites</p>
              <button>Buy Now</button>
            </div>

          </a>
        </div>

        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          
         

          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://revaais.com/products/exotic-veda-pure-organic-sandalwood-powder-for-men-women-100-natural-non-gmo-100g?_pos=1&_sid=3b47693c2&_ss=r'>
              <img src={assets.sandalcertification} alt='Organic Pure Sandalwood Powder for Face and Skin | Natural Skincare Sandalwood Scent | Anti-inflammatory Chandan Powder | Aromatic Sandalwood Powder Organic | Scented Body Powder ' style={{ maxWidth: '100%' }} /></a>

          </div>

       
        
        </div>
      

      </div>

      <div className="tabs" style={{ display: 'flex', justifyContent: 'center', marginTop:'20px' }}>

        <button
          className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => setActiveTab('skinCare')}

        >
          Tips For Skin Care
        </button>

      </div>

      {/* Content based on active tab */}
      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Sandalwood  Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {sandalwoodrecipes.map((recipe) => (
                <div className="recipe-card" key={recipe.id}>
                  <div className="recipe-image">
                    <img src={recipe.img} alt='Organic Pure Sandalwood Powder for Face and Skin | Natural Skincare Sandalwood Scent | Anti-inflammatory Chandan Powder | Aromatic Sandalwood Powder Organic | Scented Body Powder' style={{ maxWidth: '100%' }} />
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



        <p className='disclaimer' style={{color:'black'}}><span>Disclaimer:</span>Use Sandalwood  Powder externally.Avoid contact with eyes, and discontinue use if irritation occurs</p>
      </div>


    </>
  )
}

export default Sandalwood
