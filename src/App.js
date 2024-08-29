import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AppRoutes from './Routes/AppRoutes.js'

function App() {
    return (
        <BrowserRouter>
            <Header />
            
            <AppRoutes />
            <Footer /> 
        </BrowserRouter>
    );
}

export default App;
