

import { useLocation,Route,Routes } from "react-router-dom"
import React,{ useEffect} from "react"

import Mobiles from "./Pages/Mobiles.jsx"
import MainPage from './Pages/MainPage.jsx'
import Error from "./Pages/Error.jsx"
import Laptop from "./Pages/Laptop.jsx"
import Offers from "./Pages/Offers.jsx"
import Accessories from "./Pages/Accessories.jsx"
import Cart from "./Pages/Cart.jsx"
import Checkout from "./Pages/Checkout.jsx"
import Store from "./Pages/Store.jsx"
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx"
import Profile from "./Pages/Profile.jsx"
import Tablets from "./Pages/Tablet.jsx"
import TermConditions from "./Pages/TermConditions.jsx"
// import Watches from "./Pages/Watches.jsx"
import AdvCard from "./Components/AdvCard.jsx"
import FooterDetails from './Components/FooterDetails'
import Footer from "./Components/Footer.jsx"
import Top from "./Components/Top.jsx"
import Navbar from "./Components/Navbar.jsx"
import Registration from "./Pages/Registeration.jsx";
import UserLoginPage from "./Pages/Login.jsx";
import AboutUs from "./Pages/About_Us.jsx" 

  export default function Home() {
    let { pathname } = useLocation();
    console.log(pathname)
    return (
      <>
        <ScrollToTop />
        <Top />
        {pathname !== "/user-login" && pathname !== "/user-signup" && pathname !== "/aboutus"  && pathname !== "/termsconditions" && pathname !== "/privacypolicy" ? (
          <>
            
            <Navbar />
          </>
        ) : (
          ""
        )}
  <Routes>
    <Route path="*" element={<Error />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route element={<MainPage />} path="/"/>
    <Route element={<Mobiles />} path="/mobiles"/>
    <Route element={<Store />} path="/store"/>
    <Route element={<Laptop />} path="/laptops"/>
    <Route element={<Accessories />} path="/accessories"/>
    <Route element={<Cart />} path="/cart"/>
    <Route element={<PrivacyPolicy />} path="/privacypolicy"/>
    <Route element={<Profile />} path="/profile"/>
    <Route element={<Tablets />} path="/tablets"/>
     <Route element={<TermConditions />} path="/termsconditions"/>
    {/*<Route element={<Watches />} path="/watches"/> */}
    <Route element={<Checkout />} path="/checkout"/>
    <Route element={<Offers />} path="/offers"/>
    <Route element={<Registration />} path="/user-signup" />
    <Route element={<UserLoginPage />} path="/user-login" />    
    <Route element={<PrivacyPolicy />} path="/privacypolicy" />    

  </Routes>
  {pathname !== "/user-login" && pathname !== "/user-signup" ? (
        <>
         {pathname !== "/aboutus"  && pathname !== "/privacypolicy"  && pathname !== "/termsconditions"?(<>
            
          <AdvCard />
          <FooterDetails />
          </>
        ) : (
          ""
        )}
         
          <Footer />
        </>
      ) : (
        ""
      )}
     
    </>
  );
}


  function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
  window.scrollTo(0, 0);
  }, [pathname]);

  return null;
  }