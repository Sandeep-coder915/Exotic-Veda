// Components/ErrorPage/ErrorPage.js
import React from 'react';

const ErrorPage = ({ message }) => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Error</h1>
            <p>{message || "There was an issue loading the page."}</p>
        </div>
    );
};

export default ErrorPage;
