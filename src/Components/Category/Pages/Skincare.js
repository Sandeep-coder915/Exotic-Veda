import React from 'react'
import { Link } from 'react-router-dom'
 
import { assets } from '../../products/Assets/prodimg/assets'

const Skincare = () => {
  const products = [

    // =======Aloe Vera=======
    {
      id: 1,
      link: '/products/aloevera-powder',
      img: assets.aloe,
      title: 'Pure Aloe Vera Powder  : Your Natural Solution for Skin and Hair Care',
      description: 'Refresh your skin and hair with our pure Aloe Vera Powder, known for its cooling and moisturizing benefits. Ideal for face masks and hair care!',
      updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/aloevera-powder',
    },
// ====Multani i======
{
  id: 3,
  link: '/products/multani-mitti',
  img: assets.multani,
  title: 'Pure Multani Mitti by Exotic Veda: Detoxify, Purify, and Brighten Oily Skin',
  description: 'Naturally cleanse and refresh your skin with our Multani Mitti Powder. It helps absorb excess oil, reduce acne, and brighten your complexion.',
  updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
  buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
  route: '/products/multani-mitti',
},
    // ======Sandalwood powder =======
    {
      id: 2,
      link: '/products/sandalwood-powder',
      img: assets.ee,
      title: 'Pure Sandalwood Powder  Refresh,  Nourish Your Skin Naturally',
      description: ' Elevate your skincare with our pure Sandalwood Powder, known for its soothing properties, reducing blemishes, and enhancing your skin’s natural radiance.',
            updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/sandalwood-powder',
    },
    // ====Curry Leaff Powder ====
    {
      id: 5,
      link: '/products/curry-leaf-powder',
      img: assets.curryleaf,
      title: 'Curry Leaf Powder by Exotic Veda: Strengthen Roots and Reduce Hair Loss Naturally',
      description: 'Boost your hair health with our natural Curry Leaf Powder. It helps reduce hair fall, promotes growth, and adds shine to your hair.',
      updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/curry-leaf-powder'
    },
 
//  =======Alum BAr =========
   {
      id: 3,
      link: '/products/alum-bar',
      img: assets.alum ,
      title: 'Alum Bar Powder by Exotic Veda: Minimize Pores and Soothe Skin Naturally',
      description: 'Experience natural freshness with our Alum Bar, perfect for tightening pores, soothing skin, and acting as a gentle, chemical-free deodorant.',
            updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/alum-bar',
    },

  ];
  return (

    <div style={{ marginTop: '4.2rem' }}>
      <img src={assets.skincarebaner} style={{ maxWidth: '100%' }} alt='skincarebanner' />

      <h1 className="text-center mb-4">Explore Our Products</h1>
      <div className="container mt-5">

        <div className="row1">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <Link to={product.link}>
                  <img src={product.img} className="" alt={product.title} />
                </Link>
                <div className="card-body"  >
                <Link to={product.link}>   <h5 className="card-title">{product.title}</h5></Link>
                <Link to={product.link}>  <p className="card-text">{product.description}</p></Link>
                  <p className="card-text">
                    <small className="text-muted">
                      <Link to={product.link}>{product.updateInfo}</Link>
                    </small>
                  </p>
   <Link to={product.link}><button className='btn'>Buy Now</button></Link> 
                 
                    
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

  )
}

export default Skincare
