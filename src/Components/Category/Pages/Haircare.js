import React from 'react'
import { Link } from 'react-router-dom'

import { assets } from '../../products/Assets/prodimg/assets';
import './skincare.css'

const Haircare = () => {
  {
    const products = [
      {
        id: 1,
        link: '/products/aloevera-powder',
        img: assets.aloe3,
        title: 'Pure Aloe Vera Powder  : Your Natural Solution for Skin and Hair Care',
        description: 'Refresh your skin and hair with our pure Aloe Vera Powder, known for its cooling and moisturizing benefits. Ideal for face masks and hair care!',
        updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
        buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
        route: '/products/aloevera-powder',
      },
      {
        id: 2,
        link: '/products/amla-powder',
        img: assets.Amla1,
        title: 'Exotic Veda Amla Powder: Natural Solution for Healthy Hair, Scalp, and Skin',
        description: 'Welcome To Exotic Veda',
        updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
        buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
        route: '/products/amla-powder',
      },
      {
        id: 3,
        link: '/products/curry-leaf-powder',
        img: assets.Curryfront,
        title: 'Curry Leaf Powder   Strengthen Roots and Reduce Hair Loss Naturally',
        description: 'Boost your hair health with our natural Curry Leaf Powder. It helps reduce hair fall, promotes growth, and adds shine to your hair.',
        updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
        buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
        route: '/products/curry-leaf-powder'
      },


      {
        id: 4,
        link: '/products/henna-powder',
        img: assets.henna,
        title: 'Pure Henna Powder   Nourish, Strengthen, and Color Your Hair Naturally',
        description: 'Enhance your hair’s health and color with our pure Henna Powder. It provides a natural tint, conditions hair, and promotes a healthy scalp',
        updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
        buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
        route: '/products/henna-powder',
      }, {
        id: 5,
        link: '/products/shikhakhai-powder',
        img: assets.shika2,
        title: 'Pure Shikakai Powder   Promote Hair Growth and Scalp Health Naturally',
        description: 'Welcome To Exotic Veda',
        updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
        buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
        route: '/recipe-aloe-vera'
      },


    ];
    return (

      <div style={{ marginTop: '4.8rem', textAlign: 'justify' }}>
        <img src={assets.haircarebanner} style={{ maxWidth: '100%' }} />
        <div className="blog-container">
          <h1 className="blog-title">Unlocking Nature's Secrets: A Guide to Hair Care with Exotic Veda</h1>
          <img src={assets.homebanner1} style={{ maxWidth: '100%' }} />

          <p className="blog-intro">
            In a world where hair care often involves a plethora of products filled with chemicals, the journey to healthy hair can seem daunting. However, the ancient wisdom of Ayurveda offers a refreshing alternative. Exotic Veda, a brand inspired by the richness of Ayurvedic traditions, provides a range of hair care products that are both natural and effective. In this blog, we’ll explore the benefits of using Exotic Veda's hair care line and how to incorporate these powerful ingredients into your routine for vibrant, healthy hair.
          </p>

          <h2 className="blog-subtitle">The Ayurvedic Approach to Hair Care</h2>
          <p>
            Ayurveda, a holistic system of medicine originating in India, emphasizes the importance of balance and harmony within the body. This philosophy extends to hair care, where the focus is on nourishing the scalp and hair with natural ingredients rather than relying on synthetic products that can cause more harm than good. Exotic Veda embraces this philosophy by crafting products that restore balance to your hair and scalp.
          </p>

          <h3 className="blog-subtitle">Key Ingredients for Luxurious Hair</h3>
          <ul className="ingredients-list">
            <li><strong>Amla (Indian Gooseberry):</strong> Rich in vitamin C and antioxidants, it helps strengthen hair follicles, promote hair growth, and prevent premature graying.</li>
            <li><strong>Brahmi:</strong> Strengthens hair roots, prevents hair fall, and promotes healthy growth.</li>
            <li><strong>Bhringraj:</strong> Known to prevent hair loss and enhance shine while soothing the scalp.</li>
            <li><strong>Shikakai:</strong> A natural cleanser that leaves hair soft and manageable.</li>
            <li><strong>Hibiscus:</strong> Promotes hair growth and prevents dandruff while enhancing shine.</li>
          </ul>

          <h2 className="blog-subtitle">The Benefits of Choosing Exotic Veda</h2>
          <ul className="benefits-list">
            <li>Natural and Chemical-Free</li>
            <li>Sustainably Sourced</li>
            <li>Cruelty-Free</li>
            <li>Tailored for All Hair Types</li>
          </ul>

          <h2 className="blog-subtitle">Creating Your Hair Care Ritual</h2>
          <ol className="ritual-steps">
            <li><strong>Pre-Wash Treatment:</strong> Use Exotic Veda’s hair oil enriched with Amla, Bhringraj, and Brahmi.</li>
            <li><strong>Gentle Cleansing:</strong> Cleanse your hair with Exotic Veda’s Shikakai Shampoo.</li>
            <li><strong>Conditioning:</strong> Follow up with a nourishing conditioner infused with Hibiscus and Amla.</li>
            <li><strong>Deep Conditioning:</strong> Treat your hair to a deep conditioning mask made from Moringa Powder and yogurt.</li>
            <li><strong>Styling:</strong> Use a leave-in conditioner or hair serum with natural oils.</li>
          </ol>

          <h2 className="blog-subtitle">DIY Recipes with Exotic Veda Ingredients</h2>
          <ul className="diy-recipes-list">
            <li><strong>Amla Hair Rinse:</strong> Boil dried Amla in water and use as a final rinse.</li>
            <li><strong>Bhringraj Hair Pack:</strong> Mix Bhringraj powder with water, apply, and rinse.</li>
            <li><strong>Hibiscus Hair Oil:</strong> Infuse dried hibiscus flowers in coconut oil.</li>
          </ul>


        </div>

        <h1 className="text-center mb-4">Explore Our Products</h1>
        <div className="container mt-5">

          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <Link to={product.link}>
                    <img src={product.img} className="" alt={product.title} />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
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
        </div>
      </div>

    )
  }
}

export default Haircare
