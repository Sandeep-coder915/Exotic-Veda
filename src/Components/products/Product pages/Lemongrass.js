import React from 'react';
import { assets } from '../Assets/prodimg/assets';
import { lemongrassDietRecipes } from './Recepisdata'; // Import the recipe data
import RecipeCard from './Reciepicard';
const Lemongrass = () => {



  return (
    <>

      <div style={{ marginTop: '4rem', backgroundColor: 'rgba(181,207,116,255)' }} className='  Lemongrass-contanienr'>

        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src={assets.lemonstrexh} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
            <img src={assets.lemonimg1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />

            <img src={assets.lemonimg} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
          </div>
          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>

            <img src={assets.lemonimg} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
            <img src={assets.lemonimg1} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />

          </div>
          <h1 st> Natural hair cleanser that promotes healthy, shiny hair.</h1>
          <ul>
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
