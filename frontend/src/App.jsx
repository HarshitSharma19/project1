
// import SideNav from './Components/SideNav.jsx'
// import Products from './Pages/Accessories.jsx'
// import Cart from './Pages/Cart'
// import Slider from './Components/Slider'
import React,{useEffect} from "react"
import { useLocation,Route,Routes } from 'react-router-dom';

import Products from "./Pages/Accessories.jsx"
import Top from "./Components/Top.jsx"
import Navbar from "./Components/Navbar.jsx"

import Footer from "./Components/Footer.jsx"
import MainPage from './Pages/MainPage.jsx'
import AdvCard from "./Components/AdvCard.jsx"
import FooterDetails from './Components/FooterDetails'

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
  

