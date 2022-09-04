import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './AdminPages/Login.jsx'
import AdminPanel from './AdminPages/AdminPanel.jsx'
import ViewCategory from './AdminComponents/Category/ViewCategory.jsx'
import AddCategory from './AdminComponents/Category/AddCategory.jsx'
import AddProducts from './AdminComponents/Product/AddProducts.jsx'
import ViewProducts from './AdminComponents/Product/ViewProducts.jsx'
import AddBrand from './AdminComponents/Brand/AddBrand.jsx'
import ViewBrand from './AdminComponents/Brand/ViewBrand.jsx'
import { useParams } from 'react-router-dom'

export default function AdminApp() {
  let {category}=useParams();
  return (
    <>
    <Routes>
      <Route path ='/login' element = {<Login/>}/>
      <Route path ="/admin-panel" element={<AdminPanel com={""}/>} />
      <Route path ='/admin-panel/category/add' element={<AdminPanel com={<AddCategory/>}/>}/>
      <Route path ='/admin-panel/category/view' element={<AdminPanel com={<ViewCategory/>}/>}/>
      <Route path ='/admin-panel/products/add' element={<AdminPanel com={<AddProducts/>}/>}/>
      <Route path ='/admin-panel/products/view' element={<AdminPanel com={<ViewProducts/>}/>}/>
      <Route path ='/admin-panel/brand/add' element={<AdminPanel com={<AddBrand/>}/>}/>
      <Route path ='/admin-panel/brand/view' element={<AdminPanel com={<ViewBrand/>}/>}/>
      {/* <Route path =`` element={<AdminPanel com={<ViewBrand/>}/>}/> */}
    </Routes>
    </>
    )
  }