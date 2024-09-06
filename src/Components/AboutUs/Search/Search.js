import React, { useState, useMemo } from 'react';
import { assets } from '../../products/Assets/prodimg/assets';
import './Search.css'
// Sample data (static, no backend required)
const products = [
    {
      id: 1,
      link: '/products/aloevera-powder',
      img: assets.aloe,
      title: 'Pure Aloe Vera Powder  : Your Natural Solution for Skin and Hair Care',
    //   description: 'Refresh your skin and hair with our pure Aloe Vera Powder, known for its cooling and moisturizing benefits. Ideal for face masks and hair care!',
      updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/aloevera-powder',
    },
    {
      id: 2,
      link: '/products/sandalwood-powder',
      img: assets.ee,
      title: 'Pure Sandalwood Powder  Refresh,  Nourish Your Skin Naturally',
             updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/sandalwood-powder',
    },
    {
      id: 3,
      link: '/products/multani-mitti',
      img: assets.multani,
      title: 'Pure Multani Mitti   Detoxify, Purify, and Brighten Oily Skin',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/multani-mitti',
    },
    {
      id: 4,
      link: '/products/henna-powder',
      img: assets.henna,
      title: 'Pure Henna Powder   Nourish, Strengthen, and Color Your Hair Naturally',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/henna-powder',
    },
    {
      id: 5,
      link: '/products/curry-leaf-powder',
      img: assets.curryleaf,
      title: 'Curry Leaf Powder   Strengthen Roots and Reduce Hair Loss Naturally',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/curry-leaf-powder'
    },
    {
      id: 6,
      link: '/products/moringa-leaf-powder',
      img: assets.moringa,
      title: 'Moringa Leaf Powder   Natural Detox and Wellness Support for Vibrant Health',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/moringa-leaf-powder'
    },
    {
      id: 7,
      link: '/products/beetroot-powder',
      img: assets.beetroot,
      title: 'Pure Beetroot Powder   Add Natural Color and Nutrients to Your Smoothies',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route:'/products/beetroot-powder'
    },
    {
      id: 8,
      link: '/products/shikhakhai-powder',
      img: assets.shikhakhai,
      title: 'Pure Shikakai Powder   Promote Hair Growth and Scalp Health Naturally',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/recipe-aloe-vera'
    },
    {
      id: 9,
      link: '/products/lemongras-powder',
      img: assets.lemongrass,
      title: 'Lemongrass Powder   Boost Your Recipes with Fresh, Zesty Taste',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/lemongras-powder'
    },
    {
      id: 10,
      link: '/products/triphala-powder',
      img: assets.triphala,
      title: 'Triphala Powder   Natural Detox and Wellness Support for Vibrant Health',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/triphala-powder'
    },
    {
      id: 11,
      link: '/products/jaamun-seed',
      img: assets.jamuseed,
      title: 'jamun Seed Powder   Promote Wellness with Natural Antioxidants and Nutrients',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/jaamun-seed',
    },
  
  
    {
      id: 12,
      link: '/products/amla-powder',
      img: assets.amla,
      title: 'Exotic Veda Amla Powder: Natural Solution for Healthy Hair, Scalp, and Skin',
       updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/amla-powder',
    },
    {
      id: 3,
      link: '/products/alum-bar',
      img: assets.alum ,
      title: 'Alum Bar Powder   Minimize Pores and Soothe Skin Naturally',
             updateInfo: ' Click Here to Learn Our Tips For Diffrent-diffrent Pupose ',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/alum-bar',
    },
  
  ];
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Filter products based on the search query
  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  // Update suggestions and results when query changes
  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setShowSuggestions(true);
    setSearchResults(filteredProducts);
  };

  // Handle search button click
  const handleSearch = () => {
    setSearchResults(filteredProducts);
    setShowSuggestions(false);
  };

  // Handle suggestion click
  const handleSuggestionClick = (product) => {
    setQuery(product.title);
    setSearchResults([product]);
    setShowSuggestions(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setActiveSuggestionIndex((prevIndex) => Math.min(prevIndex + 1, filteredProducts.length - 1));
    } else if (event.key === 'ArrowUp') {
      setActiveSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === 'Enter') {
      if (activeSuggestionIndex >= 0) {
        handleSuggestionClick(filteredProducts[activeSuggestionIndex]);
      }
    }
  };

  return (<>
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for products..."
      />
      <button onClick={handleSearch}>Search</button>
</div>
      {/* {showSuggestions && query && (
        <div className="suggestions-dropdown">
          <ul>
            {filteredProducts.map((product, index) => (
              <li
                key={product.id}
                onClick={() => handleSuggestionClick(product)}
                className={index === activeSuggestionIndex ? 'active' : ''}
              >
                {product.title}
              </li>
            ))}
          </ul>
        </div>
      )} */}

      {searchResults.length > 0 && (
        <div className="search-results">
            <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                <a href={product.link}>
                  <img src={product.img} alt={product.title} />
                  <p>{product.title}</p>
                  <p>{product.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div></div>
      )}
    </>
  );
};

export default SearchBar;
