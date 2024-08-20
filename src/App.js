 import './App.css';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Aboutus from './Components/AboutUs/Aboutus';
import Product from './Components/products/Product';
import Contactus from './Components/Contactus/Contactus';
import Footer from './Components/Footer/Footer';
 
 function App() {
   
     return ( 
<BrowserRouter>
<Header/>
<Routes>
        <Route index element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/contactus" element={<Contactus/>} />
        </Routes>
<Footer/>
</BrowserRouter>
     );
 }

 export default App;