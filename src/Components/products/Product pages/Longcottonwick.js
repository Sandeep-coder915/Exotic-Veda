import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';

const Longcottonwick = () => {
  const images = [
    assets.cottonwicklong,
    assets.cottonwicklong2,
    assets.cottonwicklong3,
    assets.cottonwicklong4,
    assets.cottonwicklong5,
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
 <>
    <div className="product-page1"   >
        <div className="image-gallery">
          {/* Side images */}
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                // style={{maxWidth:'50%',minWidth:'50%'}}
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)

                }
              />
            ))}
          </div>

          {/* Main image with hover effect */}
          <div className="main-image-container">
            <img
              src={currentImage}
              alt="Main product"
              className="main-image"
            />
          </div>
        </div>

        {/* Product details */}
        <div className="product-details">
          <h1 style={{ textAlign: 'justify', fontSize: '18px' }}>
          Premium Long Cotton Wick with Two Brass Wick Holder for Pooja Items, Luxury Organic Cotton Wicks for Puja Thali, Pooja Wick Set, 200 Pieces, Decorative and Clean-Burning </h1>

          <h2>About this item</h2>

          <ul style={{textAlign:'justify'}}>
            <li>  Premium Long Cotton Wicks: Experience The Ultimate In Quality With Our Premium Long Cotton Wicks, Designed For Pooja And Other Religious Rituals. These 100% Organic And Virgin Cotton Wicks Ensure A Clean-Burning And Long-Lasting Experience.</li>
            
            <li>Cotton Wicks With Brass Holder: Enhance Your Pooja Setup With Our Cotton Wicks For Diya, Complete With An Elegant Brass Holder. The Stylish Brass Wick Stand Adds A Touch Of Luxury To Your Religious Items, Making Rituals More Meaningful.</li>

            <li>High-Quality Pooja Accessories: Our High-Quality Cotton Wicks For Oil Lamps Come With A Robust Brass Diya Stand, Ensuring Durability And Elegance. These Braided Cotton Wicks Are Perfect For All Your Pooja Lamp Needs, Offering Superior Performance.</li>

            <li>Versatile Diya Cotton Wick Set: This Pooja Wick Set Includes Long Cotton Wicks And A Brass Holder, Suitable For Various Rituals. The Flat Cotton Wick Design Ensures Efficient Burning, Making It An Essential Addition To Your Pooja Accessories.</li>

            <li>Elegant And Decorative Design: Our Decorative Cotton Wicks With A Brass Base Are Perfect For Enhancing Your Spiritual Practices. The Round Cotton Wick And Brass Diya Set Combine Functionality With Elegance, Creating A Serene Ambiance.</li>

            
          </ul>

        </div>

      </div >
      <button className='pppp'>Buy Now</button>



 
 </>
  )
}

export default Longcottonwick
