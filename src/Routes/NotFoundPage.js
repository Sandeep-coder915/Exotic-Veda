import React from 'react';
import err from './page n .png'
  // Import the CSS file for styling

const NotFoundPage = () => (
    <div className="not-found-container">
    <div className="not-found-content">
      <img src={err} alt="404 Not Found" className="not-found-image"  style={{minWidth:'100%',maxWidth:'100%'}}/>
      <div>
        <a href="/" className="not-found-link">Go to Homepage</a>
      </div>
    </div>
  </div>
  
);

export default NotFoundPage;
