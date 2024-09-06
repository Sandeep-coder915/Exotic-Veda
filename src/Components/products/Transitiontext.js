import React from 'react';
import { assets } from './Assets/prodimg/assets';
  // Import CSS for styling

const SkincareSection = () => {
  return (
    <section className="skincare-section">
      <div className="container">
        <h1 className="title slide-in">
          Discover Radiant Skin with Exotic Veda's Natural Skincare Products
        </h1>
        <p className="intro slide-in">
          In the pursuit of healthy, glowing skin, the choice of skincare products can make a significant difference. Exotic Veda, a brand celebrated for its commitment to natural and organic ingredients, offers a range of skincare solutions that harness the power of nature to enhance your beauty routine.
        </p>

        <h2 className="subtitle slide-in">Why Choose Exotic Veda?</h2>
        <img src={assets.certification} alt='certification ' style={{borderRadius:'0' ,minWidth:'100%',height:'auto'}}/>
        <p className="description slide-in">
          Exotic Veda's skincare products are crafted with the finest natural ingredients, ensuring purity and efficacy in every formula. Each product is designed to cater to various skin types and concerns, from hydration and brightening to soothing and anti-aging.
        </p>

        <div className="ingredients-list">
          <h2 className="subtitle slide-in">Key Ingredients and Their Benefits</h2>
          <ul>
            <li className="slide-in">
              <strong>Aloe Vera Powder:</strong> Renowned for its soothing and hydrating properties, Aloe Vera Powder is a key ingredient in Exotic Veda's skincare range. It helps calm irritated skin, reduce redness, and provide deep moisture, making it perfect for sensitive and dry skin.
            </li>
            <li className="slide-in">
              <strong>Sandalwood Powder:</strong> With its calming and anti-inflammatory benefits, Sandalwood Powder helps reduce blemishes, even out skin tone, and impart a natural radiance. It’s an excellent choice for those looking to brighten their complexion and soothe irritated skin.
            </li>
            <li className="slide-in">
              <strong>Multani Mitti Powder:</strong> Also known as Fuller’s Earth, Multani Mitti Powder is a natural cleanser that absorbs excess oil and impurities from the skin. It helps to tighten pores, reduce acne, and leave your skin feeling fresh and clean.
            </li>
            <li className="slide-in">
              <strong>Henna Powder:</strong> While often associated with hair care, Henna Powder also offers benefits for the skin. It helps condition and soothe, and can be used in face masks to support a healthy, vibrant glow.
            </li>
            <li className="slide-in">
              <strong>Alum Bar:</strong> A natural astringent, the Alum Bar tightens pores and helps control excess oil. It also acts as a gentle, chemical-free deodorant, providing a natural way to stay fresh.
            </li>
            <li className="slide-in">
              <strong>Curry Leaf Powder:</strong> Known for its rich vitamin content, Curry Leaf Powder supports overall skin health and can be used in DIY masks to rejuvenate and brighten your complexion.
            </li>
            <li className="slide-in">
              <strong>Lemongrass Powder:</strong> With its refreshing and antiseptic properties, Lemongrass Powder is ideal for detoxifying the skin and imparting a pleasant, zesty scent to your skincare routine.
            </li>
            <li className="slide-in">
              <strong>Jamun Seed Powder:</strong> Packed with antioxidants, Jamun Seed Powder aids in managing blood sugar levels and supports skin health. It’s a great addition to your regimen for enhancing skin clarity and vitality.
            </li>
            <li className="slide-in">
              <strong>Shikakai Powder:</strong> Though traditionally used for hair care, Shikakai Powder can also benefit the skin. It gently cleanses and adds a healthy glow, making it a versatile ingredient in your skincare arsenal.
            </li>
            <li className="slide-in">
              <strong>Moringa Leaf Powder:</strong> Rich in essential nutrients, Moringa Leaf Powder helps support skin health from within. It boosts energy, supports immunity, and enhances overall skin wellness.
            </li>
          </ul>
        </div>

        <h2 className="cta-title slide-in">Embrace Natural Beauty</h2>
        <p className="cta-description slide-in">
          By incorporating Exotic Veda's natural skincare products into your daily routine, you can achieve healthier, more radiant skin without the use of harsh chemicals. Each product is designed to work harmoniously with your skin, providing nourishment and care that only nature can offer.
        </p>
        <button className="cta-button slide-in">Explore Our Range</button>
      </div>
    </section>
  );
};

export default SkincareSection;
