 import './App.css';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Aboutus from './Components/AboutUs/Aboutus';
import Product from './Components/products/Product';
import Contactus from './Components/Contactus/Contactus';
import Footer from './Components/Footer/Footer';
import Treatment from './Components/Product treatments/Treatment';
import Aloevera from './Components/products/Product pages/Aloevera';
import Skincare from './Components/Category/Pages/Skincare.js'
import Sandalwood from './Components/products/Product pages/Sandalwood.js';
 
 function App() {
   
     return ( 
<BrowserRouter>
<Header/>
<Routes>
        <Route index element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path='/treatments&tips' element={<Treatment/>}></Route>
        <Route path='/products/thriphala' element={<Aloevera/>}></Route>
        <Route path='/category/skincare' element={<Skincare/>}></Route>
        <Route path='/category/sandalwood' element={<Sandalwood/>}></Route>
        </Routes>
<Footer/>
</BrowserRouter>
     );
 }

 export default App;