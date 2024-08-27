import React from 'react'
import sandal1 from  '../Assets/Sandalwood 2 banner (1).png'
import sandalwood2 from '../Assets/sandalwood front 2 300.png'
const Sandalwood = () => {
  return (
    <>
    <div className='Aloevera '>
      <div >
      <img src={sandal1} alt='aloevera ' style={{ maxWidth: '100%' }} /> 
      </div>
      <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center' }}>Pure Aloe Vera Powder - Helps Nourish Scalp, Boost Hair Growth, Aids in Skin Dryness, Cuts, Sunburns, Natural Herbal Supplement for Skin & Hair Care (100g)</h1>

        <div>     <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
             <img src={sandal1} alt='hel' style={{ maxWidth: '100%' }}/>
            <img src={sandal1} alt='hel' style={{ maxWidth: '100%' }}/></a>
       
          </div>
          <ul>
          <li>
            Organic Aloe vera Powder : Say goodbye to chemical-filled beauty products and say yes to our Organic Aloe Vera Powder. Follow a beauty regimen that's pure, unadulterated, and rooted in nature's goodness. It is power-packed with antioxidants, vitamins, minerals, and anti-inflammatory compounds to help rejuvenate your skin and leave your hair silky.</li>
            </ul>
          
        <div style={{display:'flex',maxWidth:'100%'}}>
        <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
          <img src={sandal1} alt='aloevera ' style={{ maxWidth: '100%' }} /></a>
          {/* <img src={aloe2} alt='aloevera ' style={{ maxWidth: '100%' }} /> */}
          </div>

        <h2 style={{textAlign:'start'}}>About this item</h2>
        <ul>
                     <li> 100% Natural ,GMO Free: Our product is 100% natural, organic, GMO-free, and manufactured under GMP-compliant facilities. Sourced from the finest aloe vera plants from organic farms, you're receiving a package of unadulterated Aloe Vera Powder. It is delivered straight from the source, so you get the best.</li>
          <li> Promotoes Hair Growth: Aloe Vera is packed with a whole bunch of goodness—proteolytic enzymes, vitamins, minerals, polysaccharides, amino acids, antioxidants, and more! They work synergistically to help nourish the scalp, boost growth, strengthen the hair follicles, and condition them. The results? Your hair won't just grow; it'll be softer, silkier, and healthier!</li>
          <li> KEEPS SKIN SOFT & SUPPLE: Discover the dual action of our Natural Aloe Vera Powder. While its polysaccharides and amino acids lock in moisture to make your skin soft and supple, its anti-inflammatory compounds like gibberellins and auxins soothe irritation to fight skin dryness, sunburns, rashes, and cuts.</li>
          <li> DIY ALOE FACE MASK: Give your skin the glow it deserves with a soothing and cooling aloe vera face pack. Mix a small amount of the powder with either water or rose water to make a smooth paste. Clean your face with a good face wash, and then apply the pack evenly on all sides. Leave it for 15-20 minutes and rinse off with lukewarm water.</li>
          <li> DIY ALOE HAIR PACK: Mix the powder with fresh onion juice to make a smooth paste. Apply the paste to your hair and roots while gently massaging it. Make sure to cover every strand. Let it sit for 30 minutes for those powerful nutrients to soak in, then rinse it with water. With regular use, you will get silky, nourished locks.</li>

        </ul>
      </div>
      <div className='Aloevera-btn'  style={{display:'flex',justifyContent:'center',gap:'10px'}} >
      <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'> <button className='btn2'  > Buy Now</button></a> 
      <a href='https://www.revaais.shop/'><button className='btn2'  > Vist Our Store</button></a> 
      </div>
 
    </div>


  </>
  )
}

export default Sandalwood
