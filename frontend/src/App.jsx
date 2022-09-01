import React from 'react'
import {  useLocation } from 'react-router-dom'
import AdminApp from './Admin/AdminApp'

import Home from './Home'
export default function App() {
  let pathname=useLocation()

  return (
    <>
    {pathname !== "/admin-login" ? (<AdminApp/>)  : (<Home/>)}
    </>
  
  )
}
