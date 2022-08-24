
// import SideNav from './Components/SideNav.jsx'
// import Products from './Pages/Accessories.jsx'
// import Cart from './Pages/Cart'
// import Slider from './Components/Slider'



import Footer from "./Components/Footer.jsx"
import MainPage from './Pages/MainPage'
import AdvCard from "./Components/AdvCard.jsx"
import FooterDetails from './Components/FooterDetails';

import FooterDetails from './Components/FooterDetails.jsx'


export default function App() {
  return (
    <>

    <ScrollToTop/>
    <Top/>
    <Navbar/>

    <Routes>
    <Route element={<MainPage/>} path="/"/>
    <Route element={<Products/>} path="/products"/>
    
    </Routes>
    <AdvCard/>
    <FooterDetails/>
    <Footer/>
</>
   
    )
  }
  

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  

