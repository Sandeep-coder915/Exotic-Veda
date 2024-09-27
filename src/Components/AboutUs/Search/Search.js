import React, { useState,  useMemo, useCallback, useRef, useEffect } from 'react';
import { assets } from '../../products/Assets/prodimg/assets';
import './Search.css'
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';
const products = [
  {
    id: 1,
    link: '/products/aloevera-powder',
    img: assets.aloe,
    title: 'Pure Aloe Vera Powder  : Your Natural Solution for Skin and Hair Care',
  //   description: 'Refresh your skin and hair with our pure Aloe Vera Powder, known for its cooling and moisturizing benefits. Ideal for face masks and hair care!',
    updateInfo: '  Click Here to Learn Our Tips ',
    buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
    route: '/products/aloevera-powder',
  },
  {
    id: 2,
    link: '/products/sandalwood-powder',
    img: assets.sandalfront,
    title: 'Pure Sandalwood Powder  Refresh,  Nourish Your Skin Naturally',
           updateInfo: '  Click Here to Learn Our Tips ',
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
    img: assets.Curryfront,
    title: 'Curry Leaf Powder   Strengthen Roots and Reduce Hair Loss Naturally',
     updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/curry-leaf-powder'
  },
  {
    id: 6,
    link: '/products/moringa-leaf-powder',
    img: assets.moringa2,
    title: 'Moringa Leaf Powder   Natural Detox and Wellness Support for Vibrant Health',
     updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/moringa-leaf-powder'
  },
  {
    id: 7,
    link: '/products/beetroot-powder',
    img: assets.betroot,
    title: 'Pure Beetroot Powder   Add Natural Color and Nutrients to Your Smoothies',
     updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route:'/products/beetroot-powder'
  },
  {
    id: 8,
    link: '/products/shikhakhai-powder',
    img: assets.shika1,
    title: 'Pure Shikakai Powder   Promote Hair Growth and Scalp Health Naturally',
     updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/recipe-aloe-vera'
  },
  {
    id: 9,
    link: '/products/lemongras-powder',
    img: assets.lemonimg1,
    title: 'Lemongrass Powder   Boost Your Recipes with Fresh, Zesty Taste',
     updateInfo: 'Click here to Learn Our  Tips  to Use For Different Purposes',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/lemongras-powder'
  },
  {
    id: 10,
    link: '/products/triphala-powder',
    img: assets.triphala2,
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
    id: 13,
    link: '/products/alum-bar',
    img: assets.alum ,
    title: 'Alum Bar Powder   Minimize Pores and Soothe Skin Naturally',
    updateInfo: '  Click Here to Learn Our Tips ',
    buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
    route: '/products/alum-bar',
  },

] 

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    const lowercasedQuery = query.toLowerCase();
    return products.filter(product =>
      product.title.toLowerCase().includes(lowercasedQuery)
    );
  }, [query, products]);

  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      setSearchResults(filteredProducts);
    }, 300),
    [filteredProducts]
  );

  const handleInputChange = useCallback((event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setShowSuggestions(true);
    debouncedSearch(newQuery);
  }, [debouncedSearch]);

  const handleSearch = useCallback(() => {
    setSearchResults(filteredProducts);
    setShowSuggestions(false);
  }, [filteredProducts]);

  const handleSuggestionClick = useCallback((product) => {
    setQuery(product.title);
    setSearchResults([product]);
    setShowSuggestions(false);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveSuggestionIndex((prevIndex) => 
        Math.min(prevIndex + 1, filteredProducts.length - 1)
      );
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (event.key === 'Enter') {
      if (activeSuggestionIndex >= 0) {
        handleSuggestionClick(filteredProducts[activeSuggestionIndex]);
      } else {
        handleSearch();
      }
    }
  }, [activeSuggestionIndex, filteredProducts, handleSearch, handleSuggestionClick]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (  <div className="search-container">
    <div className="search-bar" ref={inputRef}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for products..."
        aria-label="Search for products"
      />
      <button onClick={handleSearch} aria-label="Search">
        <FaSearch />
      </button>
    </div>

 

    {searchResults.length > 0 && (
      <div>
        <h1>Show results</h1>
      <div className="search-results">
     
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>
              <a href={product.link}>
                <img src={product.img} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                  <p className='r'>{product.updateInfo}  <FaArrowRight className="arrow-icon"  size={10} marginTop='100px' color="blue" style={{ marginLeft: '8px' }} /></p>
                </div>
               
              </a>
            </li>
          ))}
        </ul>
      </div>
      </div>
    )}
  </div>
);
};

export default SearchBar; 
