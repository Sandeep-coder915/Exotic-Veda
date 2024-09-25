import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import { sandalwoodrecipes } from './Recepisdata'; 

const Sandalwood = () => {

   
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  return (
    <>
    <div className='Product-Page-Contanier'>
      <div style={{position:'relative' ,maxWidth:'100%'}}>
        <a href='https://revaais.com/products/exotic-veda-pure-organic-sandalwood-powder-for-men-women-100-natural-non-gmo-100g?_pos=1&_sid=3b47693c2&_ss=r'>
          <img src={assets.sandal1} alt='aloevera ' style={{ maxWidth: '100%' ,maxHeight:'100%' }} />
          <div className='right-container'>
            <h2>Dont miss Out </h2>
      <p style={{textAlign:'center'}}>Explor  the oppurtuniites</p>
            <button>Buy Now</button>
          </div>
          
          </a>
      </div>
      
      <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center' }}> Pure, Organic Sandalwood Powder for Men & Women Face Pack to Help Detan, Lighten, and Brighten | 100% Natural, Non-GMO (100g)</h1>

        <div >
          <a href='https://revaais.com/products/exotic-veda-pure-organic-sandalwood-powder-for-men-women-100-natural-non-gmo-100g?_pos=1&_sid=3b47693c2&_ss=r'>

          <div className='img-aloe'>
            <img src={assets.sandaal2img} alt='hel' style={{ maxWidth: '50%' }} />
            <img src={assets.sandaal3img } alt='hel' style={{ maxWidth: '50%' }} />
            </div> 
            </a>

        </div>
        <ul>
          <li>
          ORGANIC SANDALWOOD POWDER: Picture your skin that’s smooth, spot-free, young, radiant, and glowing? That’s the results you will be able to achieve when you regularly use our Natural Sandalwood Powder on your face. It is not any ordinary powder, it is your new way to have a natural de-tanning, lightening, and brightening without using any harmful chemicals.          </li>
        </ul>

        <div style={{ display: 'flex', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/exotic-veda-pure-organic-sandalwood-powder-for-men-women-100-natural-non-gmo-100g?_pos=1&_sid=3b47693c2&_ss=r'>
            <img src={assets.sandalcertification } alt='aloevera ' style={{ maxWidth: '100%' }} /></a>
       
        </div>

        <h2 style={{ textAlign: 'start' }}>About this item</h2>
        <ul>
          <li> 100% NATURAL, GMO-FREE: Trust in the purity of our natural sandalwood powder. Free from GMOs and adhering to GMP quality standards, our product is crafted with your health and well-being in mind. Follow a skincare routine that respects your body and the environment.</li>
          <li> HELPS FIGHT ACNE: Tired of blemishes and pimples playing peek-a-boo? Let's put an end to that. Our Sandalwood Powder is your natural warrior against these unwelcome visitors, helping you achieve that clear, spotless look you’ve been dreaming of. Also, it’s an excellent natural exfoliator. It gently removes dead skin cells, giving you a fresh canvas every day.</li>

          <li> PREVENTS AGING SIGNS: Who says you can't pause aging? Sandalwood has anti-aging properties and is more like a time machine, which helps slow down those fine lines and wrinkles. Use it regularly, and watch your skin retain its youthful bounce and vitality.</li>

          <li> SOOTHES, HEALS YOUR SKIN: Skin irritations, rashes, prickly heat – whatever your skin woe, our pure sandalwood powder is here to soothe, heal, and calm your skin. Think of it as your personal skin rescuer, always ready to comfort you when your skin feels irritated or just needs a little TLC.</li>
          <li>EASY TO USE: To make a nice face pack that de-tans, lightens, and brightens, mix 2 tablespoons of our Sandalwood Powder with 1 teaspoon of multani mitti powder and a little water to create a smooth paste. Apply evenly over your face and neck, leave for 15-20 minutes, then wash off to reveal glowing, spot-free skin.</li>

        </ul>
      </div>
      {
      
      /* <div className='Aloevera-btn'  style={{display:'flex',justifyContent:'center',gap:'10px'}} >
      <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'> <button className='btn2'  > Buy Now</button></a> 
      <a href='https://www.revaais.shop/'><button className='btn2'  > Vist Our Store</button></a> 
      </div> */
      
      }

    </div>

    <div className="tabs">

      <button
        className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
        onClick={() => setActiveTab('skinCare')}
      >
         Tips For Skin Care
      </button>
      {/* <button
        className={setActiveTab & activeTab === 'hairCare' ? 'active' : ''}
        onClick={() => setActiveTab('hairCare')}
      >
       Tips For Hair Care
      </button> */}
    </div>

    {/* Content based on active tab */}
    <div className="tab-content">
      {activeTab === 'skinCare' && (
        <div className="product-detail-page">
          <h1 style={{fontFamily:'New Amsterdam, sans-serif'}}>Sandalwood  Powder Uses for Different Skin Types</h1>
          <div className="recipes-container">
            {sandalwoodrecipes.map((recipe) => (
              <div className="recipe-card" key={recipe.id}>
                <div className="recipe-image">
                  <img src={recipe.img} alt={recipe.title} style={{ maxWidth: '100%' }} />
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

 

      <p className='disclaimer'><span>Disclaimer:</span>Use Sandalwood  Powder externally.Avoid contact with eyes, and discontinue use if irritation occurs</p>
    </div>


  </>
  )
}

export default Sandalwood
