import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { ShikaahairCareRecipes } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard'
const Shikakkhai = () => {
  return (
    <>

      <div style={{ marginTop: '4rem', backgroundColor: 'rgba(244,120,171,255)' }} className='shikakai-contanienr'>

        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src={assets.shikabannersttre} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
            <img src={assets.shika2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />

            <img src={assets.shika1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
          </div>
          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
            <img src={assets.shika1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
            <img src={assets.shika2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />


          </div>
          <h1 st> Natural hair cleanser that promotes healthy, shiny hair.</h1>

          <ul  >
            <li>
              Crafted from pure and organic shikakai pods, our shikakai powder offers a natural and gentle solution for hair care.
              Known for its rich nutrients, shikakai has been used in Ayurveda for centuries to promote hair growth, reduce dandruff,
              and strengthen the hair from root to tip.
            </li>
            <li>
              Shikakai powder, when combined with amla powder, creates a nourishing hair mask that works wonders on dry, damaged hair.
              This Ayurvedic blend, enhanced by reetha powder, bhringraj powder, and fenugreek oil, provides deep nourishment for hair growth,
              making it a preferred choice for women seeking natural hair care solutions.
            </li>
            <li>
              The inclusion of neem powder in this mix helps combat dandruff, while hibiscus powder and amla oil work together
              to improve hair texture, add volume, and strengthen the hair.
            </li>
            <li>
              This versatile hair care powder can be used to create effective masks that target damaged hair, promoting healthy growth
              and scalp health.
            </li>
            <li>Derived from natural Shikakai pods, rich in essential nutrients for nourishing and strengthening hair.</li>
            <li>Acts as a gentle cleanser that enhances hair texture, leaving it soft and manageable.</li>
            <li>Known for its ability to reduce dandruff, soothe the scalp, and promote healthier hair growth.</li>
            <li>100% pure and chemical-free, ideal for DIY hair care routines and suitable for all hair types.</li>

          </ul>





        </div>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
            <div className="recipes-container">
              {ShikaahairCareRecipes.map((recipe) => (
                <Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <p className='disclaimer'><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>

    </>
  );
};

export default Shikakkhai;
