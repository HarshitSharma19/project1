import React, {useEffect} from 'react'
import { Routes,Route,useLocation } from 'react-router-dom';
import Top from './Components/Top'
import Navbar from './Components/Navbar'

// import SideNav from './Components/SideNav.jsx'
import Products from './Pages/Accessories.jsx'
import Footer from "./Components/Footer.jsx"
import MainPage from './Pages/MainPage'
import AdvCard from "./Components/AdvCard.jsx"
export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Top/>
    <Navbar/>
    <Routes>
    <Route element={<MainPage/>} path="/home"/>
    <Route element={<Products/>} path="/products"/>
    
    </Routes>
    <AdvCard/>
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
  