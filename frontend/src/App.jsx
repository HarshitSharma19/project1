import {useLocation} from "react-router-dom"
import React from "react"

import AdminApp from "./Admin/AdminApp"
import Home from "./Home.jsx"





  export default function App() {
    let { pathname } =useLocation();
    console.log(pathname)
    return (

      <>
  

        {pathname === "/admin-panel" || pathname=== "/login" || pathname=== "/admin-panel/category/add" || pathname=== "/admin-panel/category/view"|| pathname=== "/admin-panel/products/add"|| pathname=== "/admin-panel/products/view"|| pathname=== "/admin-panel/brand/add"|| pathname=== "/admin-panel/brand/view" ? (
          <>
            <AdminApp/>
          </>
        ) : (
          <>
          <Home/>
        </>
        )}
    </>
  
  );
}
