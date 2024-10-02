
import { assets } from '../Assets/prodimg/assets';
import { alumBarUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';
import { useState } from 'react';
const Alumbar = () => {

  const images = [
    assets.alum, // Main image
    // Main image
    assets.alum55 , // Main image
    assets.alum,
    assets.alum55 , 
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
            100% Pure Alum Block, Natural Deodorant & Aftershave Soothes Razor Burn, Shaving&Skin Irritation - Fitkari/Alum Stone Rich Astringent,Easy To Use,Non-Staining, Unscented, Alcohol-Free
          </h1>

          <h2>About this item</h2>
          <ul style={{ textAlign: 'justify', fontSize: '14px' }}>

            <li>Multi-Purpose Alum Block: Our 100% Pure Alum Block Serves As Both An Effective Aftershave And A Salt & Stone Natural Deodorant. It Helps Soothe Skin Irritations, Minor Razor Cuts, And Nicks, Making It An Essential Addition To Your Shaving Accessories Men Collection.
            </li>
            <li>Natural Deodorant: This Crystal Deodorant Stone, Made From Potassium Alum, Offers A Chemical-Free, Odorless, And Long-Lasting Solution. The Alum Stone Is Perfect For Those Seeking A Natural Alternative Without The Harsh Chemicals Found In Traditional Deodorants.
            </li>
            <li>Easy To Use: Our Alum Bar Is Designed For Convenience. Simply Wet The Alum Block And Apply It To Your Skin. Its Non-Staining, Odorless Properties Ensure That It Integrates Seamlessly Into Your Daily Grooming Regimen, Whether Used As A Shave Secret Or A Natural Deodorant.</li>
            <li>100% Natural, Unscented, Alcohol-Free: Our Alum Block Is 100% Natural, Pure, Unscented, And Alcohol-Free. It Is Kind To Your Skin, Effectively Soothing Nicks And Cuts Without Unnecessary Additives. This Alum Block Is Ideal For The Minimalist Who Values Purity In Their Skincare.
            </li>
            <li>Natural Aftershave Alum Block: Say Goodbye To Post-Shave Irritation And Hello To Smooth, Soothed Skin. Alum Block Is Your Go-To Natural Aftershave Remedy, Offering Instant Relief From Razor Burns, Sealing Nicks, And Leaving Your Skin Feeling Refreshed. Discover The Traditional Secret That Turns The End Of Your Shave Into The Beginning Of Comfortable Skin.
            </li>

          </ul>
        </div>

      </div >
      <button className='pppp'>Buy Now</button>


      <div className='Product-Page-Container'>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=1&_sid=91a91be85&_ss=r'>
            <img src={assets.alum3} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%', marginTop: '1rem' }} />

          </a>
        </div>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=1&_sid=91a91be85&_ss=r'>
            <img src={assets.alum1} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          </a>
        </div>

        <div className='Shikakai-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
 
 
        </div>



        <div className="tab-content">

          <div className="hair-care-detail-page">
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Alumbar  Usage  and Tips </h1>
            <div className="recipes-container">
              {alumBarUses.map((recipe) => (
                <Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <p className='disclaimer'  style={{color:'red'}}><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
    </>
  );
};

export default Alumbar