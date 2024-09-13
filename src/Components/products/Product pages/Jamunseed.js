import React from 'react';
import { assets } from '../Assets/prodimg/assets';
import { jamunSeedPowderUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';

const JamunSeed = () => {
  return (
    <>
      <div style={{ marginTop: '4rem', backgroundColor: 'rgba(75,56,104,255)',  }} className='jamun-seed-powder-container'>
        <div style={{ display: 'flex', flexDirection: 'column', }} className='rr'>
          <img src={assets.jamunb1} alt='Jamun Seed Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />

          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
            <img src={assets.shika1} alt='Jamun Seed Powder' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />

            <img src={assets.shika2} alt='Jamun Seed Powder' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
          </div>

          <div style={{ display: 'flex', marginBottom: '0', padding: '0' }}>
          
            <img src={assets.shika2} alt='Jamun Seed Powder' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
            <img src={assets.shika1} alt='Jamun Seed Powder' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />

          </div>

          <h1 style={{color:'white'}}>Natural Jamun Seed Powder for Health and Wellness</h1>

          <ul>
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

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{color:'white'}} >Jamunseed Powder use for  Diet </h1>
            <div className="recipes-container">
              {jamunSeedPowderUses.map((recipe) => (
                <Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <img src={assets.lemonstrexh} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Jamunseed Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
    </>
  );
};

export default JamunSeed;
