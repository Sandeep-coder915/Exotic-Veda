import React from 'react'
import { Link } from 'react-router-dom'
import { skincategoryproducts } from '../../products/Product pages/Recepisdata'; 
 
import { assets } from '../../products/Assets/prodimg/assets'

const Skincare = () => {
  
  return (

    <div style={{ marginTop: '4.2rem' }}>


      <img src={assets.skincarebaner} style={{ maxWidth: '100%' }} alt='skincarebanner' />
      <>
      <div className="blog-container">
      <header className="blog-header">
        <h1>Skincare Secrets with Exotic Veda</h1>
        <p>Your guide to natural and radiant skin using Exotic Veda products</p>
      </header>
      <section className="blog-content">
        <article className="blog-article">
          <h2>Why Choose Natural Skincare?</h2>
          <p>
            In a world full of synthetic beauty products, natural skincare stands out as a refreshing alternative. 
            Exotic Veda’s range of natural powders and ingredients are packed with nutrients that promote healthy, 
            glowing skin without the harsh chemicals found in conventional products.
          </p>
          <img src={assets.skincarebaner} alt="Natural Skincare" className="blog-image" style={{ maxWidth: '100%' }}  />
        </article>

        <article className="blog-article">
          <h2>Featured Products for Radiant Skin</h2>
          <ul className="product-list">
            <li>
              <h3>Moringa Powder</h3>
              <p>Moringa Powder is rich in antioxidants and vitamins, which help to combat signs of aging and promote a youthful complexion.</p>
            </li>
            <li>
              <h3>Beetroot Powder</h3>
              <p>Beetroot Powder enhances your skin's natural glow and helps in reducing dark spots and blemishes.</p>
            </li>
            <li>
              <h3>Amla Powder</h3>
              <p>Amla Powder is packed with Vitamin C, which brightens the skin and helps in achieving an even skin tone.</p>
            </li>
            <li>
              <h3>Multani Mitti</h3>
              <p>Multani Mitti, also known as Fuller's Earth, is perfect for absorbing excess oil and impurities from the skin, leaving it fresh and clear.</p>
            </li>
          </ul>
        </article>
      </section>
      <footer className="blog-footer">
        <p>© 2024 Exotic Veda. All rights reserved.</p>
      </footer>
    </div>

      <h1 className="text-center mb-4">Explore Our Products</h1>
      <div className="container mt-5">

        <div className="row">
          {skincategoryproducts.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <Link to={product.link}>
                  <img src={product.img} className="" alt={product.title}  style={{width:'100%',height:'auto',borderRadius:'8px'}}/>
                </Link>
                <div className="card-body"  >
                <Link to={product.link}>   <h5 className="card-title">{product.title}</h5></Link>
                <Link to={product.link}>  <p className="card-text">{product.description}</p></Link>
                  <p className="card-text">
                    <small className="text-muted">
                      <Link to={product.link}>{product.updateInfo}</Link>
                    </small>
                  </p>
   <Link to={product.buyLink}><button className='btn'>Buy Now</button></Link> 
                 
                    
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div></>
      </div>

  )
}

export default Skincare
