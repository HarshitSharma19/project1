import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './AdminPages/Login'
import AdminPanel from './AdminPages/AdminPanel'
import ViewCategory from './AdminComponents/ViewCategory'
import AddCategory from './AdminComponents/AddCategory'
import AddProducts from './AdminComponents/AddProducts'
import ViewProducts from './AdminComponents/ViewProducts'

export default function AdminApp() {
  return (
    <>
    <Routes>
      <Route path ='/login' element = {<Login/>}/>
      <Route path ="/admin-panel" element={<AdminPanel com={""}/>} />
      <Route path ='/admin-panel/add-category' element={<AdminPanel com={<AddCategory/>}/>}/>
      <Route path ='/admin-panel/view-category' element={<AdminPanel com={<ViewCategory/>}/>}/>
      <Route path ='/admin-panel/add-products' element={<AdminPanel com={<AddProducts/>}/>}/>
      <Route path ='/admin-panel/view-products' element={<AdminPanel com={<ViewProducts/>}/>}/>
    </Routes>
    </>
    )
  }
  