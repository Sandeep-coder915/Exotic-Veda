import React, { useState } from 'react';
 import { assets } from '../Assets/prodimg/assets';
const CottonWicks  = () => {
  // List of images
  const images = [
   assets.shika1, // Main image
   assets.shika2, // Main image
   assets.Amla2, // Main image
   assets.Amla1, // Main image
   assets.Amla1, // Main image
 
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="product-page1" style={{marginTop:'4rem'}}>
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
        <h1>Organic Amla Powder - Dried Indian Gooseberries</h1>
        <p><strong>Price:</strong> $11.99</p>
        <p><strong>Brand:</strong> Exotic Veda</p>
        <p><strong>Item Form:</strong> Powder</p>
        <p><strong>Manufacturer:</strong> REVAAIS India</p>
        <p><strong>Item Package Quantity:</strong> 1</p>
        <p><strong>Package:</strong> Bag</p>

        <h2>About this item</h2>
        <ul>
          <li>Organic Amla Powder made from dried Indian gooseberries, packed with pure Vitamin C.</li>
          <li>Nutrient-rich superfood that supports hair growth, improves skin health, and enhances immunity.</li>
          <li>Perfect for adding to your daily diet or hair care routine.</li>
          <li>Rich in antioxidants and aids in detoxification.</li>
        </ul>
      </div>
    </div>
  );
};

export default CottonWicks ;
