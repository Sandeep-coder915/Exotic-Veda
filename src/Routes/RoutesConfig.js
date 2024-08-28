import Home from "../Components/Home/Home";
import Aboutus from "../Components/AboutUs/Aboutus";
import Product from "../Components/products/Product";
import Contactus from "../Components/Contactus/Contactus";
import ReviewPage from '../Components/Footer/Review/Review'
import Treatment from "../Components/Product treatments/Treatment";
import FAQ from '../Components/FAQ/FAQ'
import TermsAndConditions from '../Components/Footer/Policies/TermsAndConditions'
import Recepie from '../Components/Receipe/Recepie'
// ========Categorayimpoprt  =============
import Skincare from '../Components/Category/Pages/Skincare'
import Dietryuse from '../Components/Category/Pages/Dietryuse'
import Haircare from '../Components/Category/Pages/Haircare'
// =========ProductPages Import==========
import Aloevera from '../Components/products/Product pages/Aloevera'
import Hennapowder from "../Components/products/Product pages/Hennapowder";
import Jamunseed from "../Components/products/Product pages/Jamunseed";
import Sandalwood from "../Components/products/Product pages/Sandalwood";
import Triphalapowder from "../Components/products/Product pages/Triphalapowder";
import Amlapowder from "../Components/products/Product pages/Amlapowder";
import Alumbar from "../Components/products/Product pages/Alumbar";
import Shikakkhai from "../Components/products/Product pages/Shikakkhai";
import Beetroortpowder from "../Components/products/Product pages/Beetroortpowder";
import Curryleafpowder  from "../Components/products/Product pages/Curryleafpowder";
import Moringaleafpowder from "../Components/products/Product pages/Moringaleafpowder";
import Multanimitti from "../Components/products/Product pages/Multanimitti";
import Lemongrass from "../Components/products/Product pages/Lemongrass";




const routes = [
    { path: '/', element: <Home />, index: true },
    { path: '/aboutus', element: <Aboutus /> },
    { path: '/review', element: <ReviewPage /> },
    { path: '/products', element: <Product /> },
    { path: '/contactus', element: <Contactus /> },
    { path: '/treatments&tips', element: <Treatment /> },

//    ======Product PAGES ROUTING ===========
    { path: '/products/aloevera-powder', element: <Aloevera /> },
    { path: '/products/multani-mitti', element: <Multanimitti /> },
    { path: '/products/curry-leaf-powder', element: <Curryleafpowder/> },
    { path: '/products/henna-powder', element: <Hennapowder/> },
    { path: '/products/moringa-leaf-powder', element: <Moringaleafpowder/> },
    { path: '/products/beetroot-powder', element: <Beetroortpowder/> },
    { path: '/products/shikhakhai-powder', element: <Shikakkhai/> },
    { path: '/products/lemongras-powder', element: <Lemongrass/> },
    { path: '/products/triphala-powder', element: <Triphalapowder/> },
 
    { path: '/products/jaamun-seed', element: <Jamunseed /> },
    { path: '/products/amla-powder', element: <Amlapowder /> },
    { path: '/products/alum-bar', element: <Alumbar/> },
 
    { path: '/products/sandalwood-powder', element: <Sandalwood /> },
    { path: '/category/skincare', element: <Skincare /> },
    { path: '/category/haircare', element: <Haircare /> },
    { path: '/category/dietary', element: <Dietryuse /> },
    { path: '/category/sandalwood', element: <Sandalwood /> },
    { path: '/terms', element: <TermsAndConditions /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/reciepe', element: <Recepie /> },
];

export default routes;
