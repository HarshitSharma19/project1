import React, {useEffect} from 'react'
import { Routes,Route,useLocation } from 'react-router-dom';
import Top from './Components/Top'
import Navbar from './Components/Navbar'

// import SideNav from './Components/SideNav.jsx'
import Products from './Pages/Accessories.jsx'

import Footer from "./Components/Footer.jsx"
import MainPage from './Pages/MainPage'
import AdvCard from "./Components/AdvCard.jsx"
import FooterDetails from './Components/FooterDetails';

// import FooterDetails from './Components/FooterDetails.jsx'


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
  