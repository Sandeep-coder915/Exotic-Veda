import Home from "../Components/Home/Home";
import Aboutus from "../Components/AboutUs/Aboutus";
import Product from "../Components/products/Product";
import Contactus from "../Components/Contactus/Contactus";
import ReviewPage from '../Components/Footer/Review/Review';
import Treatment from "../Components/Product treatments/Treatment";
import FAQ from '../Components/FAQ/FAQ';
import TermsAndConditions from '../Components/Footer/Policies/TermsAndConditions';
import Recepie from '../Components/Receipe/Recepie';

// Category imports
import Skincare from '../Components/Category/Pages/Skincare';
import Dietryuse from '../Components/Category/Pages/Dietryuse';
import Haircare from '../Components/Category/Pages/Haircare';

// Product Pages imports
import Aloevera from '../Components/products/Product pages/Aloevera';
import Hennapowder from "../Components/products/Product pages/Hennapowder";
import Jamunseed from "../Components/products/Product pages/Jamunseed";
import Sandalwood from "../Components/products/Product pages/Sandalwood";
import Triphalapowder from "../Components/products/Product pages/Triphalapowder";
import Amlapowder from "../Components/products/Product pages/Amlapowder";
import Alumbar from "../Components/products/Product pages/Alumbar";
import Shikakkhai from "../Components/products/Product pages/Shikakkhai";
import Beetrootpowder from "../Components/products/Product pages/Beetroortpowder"; // Corrected spelling
import Curryleafpowder from "../Components/products/Product pages/Curryleafpowder";
import Moringaleafpowder from "../Components/products/Product pages/Moringaleafpowder";
import Multanimitti from "../Components/products/Product pages/Multanimitti";
import Lemongrass from "../Components/products/Product pages/Lemongrass"; // Ensure this is correct
import SearchBar from "../Components/AboutUs/Search/Search";
import ProductForm from "../Routes/template";
import NewsletterSignup from '../Components/Home/NewsLetter';

const routes = [
    { path: '/', component: Home },
    { path: '/aboutus', component: Aboutus },
    { path: '/newsletter', component: NewsletterSignup },
    { path: '/review', component: ReviewPage },
    { path: '/products', component: Product },
    { path: '/search', component: SearchBar }, // Ensure this path is lowercase
    { path: '/contactus', component: Contactus },
    { path: '/treatments-and-tips', component: Treatment }, // Use hyphens for URL safety

    { path: '/template', component: ProductForm },

    // Product Pages Routing
    { path: '/products/aloevera-powder', component: Aloevera },
    { path: '/products/multani-mitti', component: Multanimitti },
    { path: '/products/curry-leaf-powder', component: Curryleafpowder },
    { path: '/products/henna-powder', component: Hennapowder },
    { path: '/products/moringa-leaf-powder', component: Moringaleafpowder },
    { path: '/products/beetroot-powder', component: Beetrootpowder }, // Corrected spelling
    { path: '/products/shikakkhai-powder', component: Shikakkhai },
    { path: '/products/lemongrass-powder', component: Lemongrass }, // Corrected spelling
    { path: '/products/triphala-powder', component: Triphalapowder },
    { path: '/products/jamun-seed', component: Jamunseed },
    { path: '/products/amla-powder', component: Amlapowder },
    { path: '/products/alum-bar', component: Alumbar },
    { path: '/products/sandalwood-powder', component: Sandalwood },
    { path: '/category/skincare', component: Skincare },
    { path: '/category/haircare', component: Haircare },
    { path: '/category/dietary', component: Dietryuse },
    { path: '/terms', component: TermsAndConditions },
    { path: '/faq', component: FAQ },
    { path: '/recipe', component: Recepie }, // Ensure spelling is correct
];

export default routes;
