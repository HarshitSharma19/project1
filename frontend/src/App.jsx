import { useLocation,Route,Routes } from "react-router-dom"
import React,{ useEffect} from "react"

import Products from "./Pages/Accessories.jsx"
import MainPage from './Pages/MainPage.jsx'
import Error from "./Pages/Error.jsx"
import AdvCard from "./Components/AdvCard.jsx"
import FooterDetails from './Components/FooterDetails'
import Footer from "./Components/Footer.jsx"
import Top from "./Components/Top.jsx"
import Navbar from "./Components/Navbar.jsx"





export default function App() {
return (
<>
  <ScrollToTop />
  <Top />
  <Navbar />
  <Routes>
    <Route path="*" element={<Error />} />
    <Route element={<MainPage />} path="/"/>
    <Route element={<Products />} path="/products"/>
  </Routes>
  <AdvCard />
  <FooterDetails />

  <Footer />


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