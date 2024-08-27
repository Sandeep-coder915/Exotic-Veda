import React from 'react'
import Aloevera from '../Assets/Aloe Vera  1 img  .png'
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'
import img111 from '../Assets/Aloe Vera  1 img  .png'
const Dietryuse = () => {
  const products = [
    {
      id: 1,
      link: '/products/thriphala',
      img:  Aloevera,
      title: 'Aloevera Powder for Men & Women',
      description: 'Welcome To Exotic Veda',
      updateInfo: 'Learn Our Recipes to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/thriphala'
    },
    {
      id: 2,
      link: '/products/sandalwood',
      img:  Aloevera,
      title: 'Aloevera Powder for Men & Women',
      description: 'Welcome To Exotic Veda',
      updateInfo: 'Click me to See Recipes',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/sandalwood'
    },
    {
      id: 3,
      link: '/products/thriphala',
      img:  Aloevera,
      title: 'Aloevera Powder for Men & Women',
      description: 'Welcome To Exotic Veda',
      updateInfo: 'Last updated 3 mins ago',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/recipe-aloe-vera'
    },
    // {
    //   id: 4,
    //   link: '/products/thriphala',
    //   img: img111,
    //   title: 'Aloevera Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    //   route: '/recipe-aloe-vera'
    // },
    // {
    //   id: 5,
    //   link: '/products/triphala',
    //   img: img11,
    //   title: 'Triphala Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    //   route: '/recipe-aloe-vera'
    // },
    // {
    //   id: 5,
    //   link: '/products/triphala',
    //   img: img11,
    //   title: 'Triphala Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    //   route: '/recipe-aloe-vera'
    // },
    // {
    //   id: 5,
    //   link: '/products/triphala',
    //   img: img11,
    //   title: 'Triphala Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    //   route: '/recipe-aloe-vera'
    // },
    // {
    //   id: 5,
    //   link: '/products/triphala',
    //   img: img11,
    //   title: 'Triphala Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    //   route: '/recipe-aloe-vera'
    // },
    // {
    //   id: 5,
    //   link: '/products/triphala',
    //   img: img11,
    //   title: 'Triphala Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    //   route: '/recipe-aloe-vera'
    // },
    // {
    //   id: 5,
    //   link: '/products/triphala',
    //   img: img11,
    //   title: 'Triphala Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    //   route: '/recipe-aloe-vera'
    // },
    // {
    //   id: 5,
    //   link: '/products/triphala',
    //   img: img11,
    //   title: 'Triphala Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    //   route: '/recipe-aloe-vera'
    // },
    
    // {
    //   id: 5,
    //   link: '/products/triphala',
    //   img: img11,
    //   title: 'Triphala Powder for Men & Women',
    //   description: 'Welcome To Exotic Veda',
    //   updateInfo: 'Last updated 3 mins ago',
    //   buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    //   route: '/recipe-aloe-vera'
    // },
    // More products here...
  ];
  
  return (
    <div className="product-container">
    <h1>Explore Our Dietary Categorey</h1>
    
    {/* Carousel component for mobile view */}
    

<div className="mobile-carousel">
<Carousel
  showArrows={true}
  infiniteLoop={true}
  showThumbs={true}
  showStatus={true}
  autoPlay={false}
  swipeable={true}
  emulateTouch={true}
  interval={5000}
>
  {products.map((product) => (
    <div className="product-card" key={product.id}>
      <Link to={product.link}>
        <img src={product.img} alt={product.title} />
      </Link>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-text">{product.description}</p>
        <p className="card-text" style={{ textAlign: 'center' }}>
          <small className="text-muted">
            <Link to={product.route}>{product.updateInfo}</Link>
          </small>
        </p>
        <a href={product.buyLink}>
          <button className="btn btn-primary">Buy Now</button>
        </a>
      </div>
    </div>
  ))}
</Carousel>
</div>

    {/* Grid display for desktop view */}
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={product.link}>
            <img src={product.img} alt={product.title} />
          </Link>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-text">{product.description}</p>
            <p className="card-text" style={{ textAlign: 'center' }}>
              <small className="text-muted">
                <Link to={product.route}>{product.updateInfo}</Link>
              </small>
            </p>
            <a href={product.buyLink}>
              <button className="btn btn-primary">Buy Now</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Dietryuse
