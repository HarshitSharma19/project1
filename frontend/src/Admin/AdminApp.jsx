import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './AdminPages/Login'
import AdminPanel from './AdminPages/AdminPanel'

export default function AdminApp() {
  return (
    <>
    <Routes>
       <Route path ='/login' element = {<Login/>}/>
       <Route path ="/admin-panel" element = {<AdminPanel/>}/>
    </Routes>
    </>
  )
}
