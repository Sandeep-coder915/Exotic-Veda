import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { jamunSeedPowderUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';

const JamunSeed = () => {
  const [activeTab, setActiveTab] = useState('hairCare'); // State to track the active tab
  const images = [
    assets.jamunf,
    assets.jamunb2,
    assets.jamunb3,
    // assets.hennabowl,
    // assets.hennadiy,
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
        <h1 >Natural Jamun Seed Powder for Health and Wellness</h1>
          <h2>About this item</h2>
          <ul style={{ textAlign: 'justify', fontSize: '14px' }}>

          
            <li>
              Jamun seed powder mixed with warm water supports blood sugar management and detoxification. Consuming it daily helps in maintaining a healthy metabolism.
            </li>
            <li>
              Adding Jamun seed powder to a smoothie enhances energy and digestive health. It blends well with fruits and plant-based milks for a nutritious start to your day.
            </li>
            <li>
              Mixing Jamun seed powder into yogurt provides a probiotic boost and aids in digestive health. This combination supports a healthy gut and enhances overall well-being.
            </li>
            <li>
              Jamun seed powder tea is an effective way to detoxify the body. It helps in weight management and supports liver function.
            </li>
            <li>
              For a natural immunity boost, mix Jamun seed powder with honey. This combination can help in maintaining healthy blood sugar levels and fortifying the immune system.
            </li>
            <li>
              Jamun seed powder added to detox juices can aid in liver health and support weight management. It’s a great addition to any detox regimen.
            </li>
            <li>
              Jamun seed powder capsules are a convenient way to incorporate this supplement into your routine. Follow dosage instructions for effective use.
            </li>
          </ul>
        </div>

      </div >
      <button className='pppp'>Buy Now</button>


      <div style={{ marginTop: '4rem' , }} className='jamun-seed-powder-container'>
        <div style={{ display: 'flex', flexDirection: 'column', }} className='rr'>

       
       
      
   <img src={assets.jamunb1} alt='Jamun Seed Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />
 

        

        </div>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1  >Jamunseed Powder use for  Diet </h1>
            <div className="recipes-container">
              {jamunSeedPowderUses.map((recipe) => (
                <Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <img src={assets.jamunb1} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Jamunseed Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
    </>
  );
};

export default JamunSeed;
