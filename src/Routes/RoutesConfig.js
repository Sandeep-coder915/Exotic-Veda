import Home from "../Components/Home/Home";
import Aboutus from "../Components/AboutUs/Aboutus";
import Product from "../Components/products/Product";
import Contactus from "../Components/Contactus/Contactus";
import ReviewPage from '../Components/Footer/Review/Review'
import Treatment from "../Components/Product treatments/Treatment";
import Aloevera from '../Components/products/Product pages/Aloevera'
import Hennapowder from "../Components/products/Product pages/Hennapowder";
import Jamunseed from "../Components/products/Product pages/Jamunseed";
import Sandalwood from "../Components/products/Product pages/Sandalwood";
import Triphalapowder from "../Components/products/Product pages/Triphalapowder";
import FAQ from '../Components/FAQ/FAQ'
import TermsAndConditions from '../Components/Footer/Policies/TermsAndConditions'
import Recepie from '../Components/Receipe/Recepie'
import Skincare from '../Components/Category/Pages/Skincare'
import Dietryuse from '../Components/Category/Pages/Dietryuse'
import Haircare from '../Components/Category/Pages/Haircare'
const routes = [
    { path: '/', element: <Home />, index: true },
    { path: '/aboutus', element: <Aboutus /> },
    { path: '/review', element: <ReviewPage /> },
    { path: '/products', element: <Product /> },
    { path: '/contactus', element: <Contactus /> },
    { path: '/treatments&tips', element: <Treatment /> },

//    ======Product PAGES ROUTING ======== 
    { path: '/products/aloevera-powder', element: <Aloevera /> },
    { path: '/products/henna-powder', element: <Hennapowder /> },
    { path: '/products/jaamun-seed', element: <Jamunseed /> },
    { path: '/products/triphala-powder', element: <Triphalapowder /> },
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
