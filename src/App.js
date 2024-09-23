import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AppRoutes from './Routes/AppRoutes';
import Loader from './Components/loader/Loader';
import './Components/Css/Mediaq.css'

function App() {
    // State to manage loading
    const [isLoading, setIsLoading] = useState(true);

    // Simulate content loading with useEffect
    useEffect(() => {
        // Simulate a loading delay (e.g., fetching data from an API)
        const timer = setTimeout(() => {
            setIsLoading(false); // Set loading to false after 2 seconds
        }, 2000); // Adjust time as needed

        // Cleanup the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <Header />
            Show Loader if loading, otherwise show the main content
            {isLoading ? (
                <Loader />
             ) : ( 
                <>
                    <AppRoutes />
                    <Footer />
                </>
             )} 
        </BrowserRouter>
    );
}

export default App;
