import React from 'react'
import Top from './Components/Top'
import Navbar from './Components/Navbar'
// import Banner from './Components/Banner'
// import Card from './Components/Card'
// import SideNav from './Components/SideNav.jsx'
import Products from './Pages/Accessories.jsx'
import FooterDetails from './Components/FooterDetails.jsx'

export default function App() {
  return (
    <>
     <Top/>
    <Navbar/>
    {/*<Banner/>
    <Card/> */}
    {/* <SideNav/> */}
    <Products/>
    <FooterDetails/>  
    </>
  )
}
