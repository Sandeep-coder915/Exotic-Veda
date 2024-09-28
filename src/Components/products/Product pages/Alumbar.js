 
import { assets } from '../Assets/prodimg/assets';
import { alumBarUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';
const Alumbar = () =>{
  return (
    <>
      <div className='Product-Page-Container'>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=1&_sid=91a91be85&_ss=r'>
            <img src={assets.alum3} alt='Sandalwood' style={{ maxWidth: '100%', minWidth:'100%', marginTop:'4rem' }} />
        
          </a>
        </div>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=1&_sid=91a91be85&_ss=r'>
            <img src={assets.alum1 } alt='Sandalwood' style={{ maxWidth: '100%', minWidth:'100%' }} />
        
          </a>
        </div>
 
        <div className='Shikakai-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{ textAlign: 'center' }}>Pure Organic Shikakai Powder Natural Hair Cleanser and Conditioner, Non-GMO, Herbal Formula for Strong, Shiny Hair, 100g</h1>

          <div>
            <a href='https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=1&_sid=91a91be85&_ss=r'>
              <div className='img-shikakai'>
                <img src={assets.alum} alt='Shikakai' style={{ maxWidth: '50%' }} />
                <img src={assets.alum} alt='Shikakeerreai' style={{ maxWidth: '50%' }} />
            
              </div>
            </a>
          </div>
         
        </div>
 

      
        <div className="tab-content">
         
            <div className="hair-care-detail-page">
              <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
              <div className="recipes-container">
                {alumBarUses.map((recipe) => (
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

export default Alumbar