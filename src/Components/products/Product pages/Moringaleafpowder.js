import React from 'react';
import { assets } from '../Assets/prodimg/assets';
import { moringaPowderUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';
const Moringaleafpowder = () => {
  return (
    
    <div style={{ marginTop: '4rem', backgroundColor: ' rgba(162,179,138,255)' }} className='  Lemongrass-contanienr'>

        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src={assets.moringabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          {/* <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
            <img src={ assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />

            <img src={assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
          </div> */}
          <div style={{ marginBottom: '0', padding: '0' }}>
{/* 
            <img src={assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
            <img src={assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} /> */}

            <img src={assets.moring1} alt='Moringa-leaf-powder' style={{ maxWidth: '100%', marginBottom: '0', minWidth: '100%' }} ></img>

          </div>
      
          <ul>
  <li>Rich in essential nutrients, Moringa Leaf Powder contains high levels of vitamins A, C, and E, as well as calcium, potassium, and iron.</li>
  <li>Moringa is a great plant-based source of protein, making it ideal for vegans and vegetarians seeking to enhance their protein intake.</li>
  <li>Known for its antioxidant properties, Moringa helps fight free radicals in the body, reducing oxidative stress and promoting overall well-being.</li>
  <li>Moringa supports healthy digestion by providing fiber that aids in detoxification and maintaining regular bowel movements.</li>
  <li>Helps in maintaining healthy blood sugar levels, making it a beneficial supplement for individuals looking to manage their glucose levels.</li>
  <li>Moringa is believed to support weight management by boosting metabolism and promoting fat breakdown.</li>
  <li>Acts as a natural energy booster, providing sustained energy throughout the day without the crash associated with caffeine.</li>
  <li>Supports immune function due to its rich content of vitamins and minerals, particularly vitamin C and antioxidants.</li>
  <li>Known for its anti-inflammatory properties, Moringa can help reduce inflammation in the body, supporting joint and bone health.</li>
  <li>Easy to incorporate into smoothies, teas, and other recipes, Moringa Leaf Powder is a convenient way to enhance your diet with essential nutrients.</li>
</ul>





        </div>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Moringa Leaf Powder use for  Diet </h1>
            <div className="recipes-container">
              {moringaPowderUses.map((recipe) => (
                < Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <img src={assets.lemonstrexh} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Moringa Leaf Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
  )
}

export default Moringaleafpowder
