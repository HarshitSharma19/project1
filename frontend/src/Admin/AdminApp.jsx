import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './AdminPages/Login'
import AdminPanel from './AdminPages/AdminPanel'
import ViewCategory from './AdminComponents/ViewCategory'
import AddCategory from './AdminComponents/AddCategory'
import AddProducts from './AdminComponents/AddProducts'
import ViewProducts from './AdminComponents/ViewProducts'
import AddBrand from './AdminComponents/AddBrand'
import ViewBrand from './AdminComponents/ViewBrand'

export default function AdminApp() {
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
    </Routes>
    </>
    )
  }
  