import React, { useState } from 'react'
import DropDown from '../AdminComponents/DropDown'
import ViewCategory from '../AdminComponents/ViewCategory'
import AddCategory from '../AdminComponents/AddCategory'
import AddProducts from '../AdminComponents/AddProducts'
import ViewProducts from '../AdminComponents/ViewProducts'
import ANavbar from '../AdminComponents/ANavbar'
export default function AdminLogin() {
  const[active,setActive]=useState("first")

  return (
  <> 
  <div><ANavbar/></div>
  <div className='w-full flex h-[591px]'> 
    <div className='bg-gray-100  w-3/12'>
     <DropDown key={""} eventfirst={()=>setActive("first")} eventsecond={()=>setActive("second")} eventthird={()=>setActive("third")} eventfourth={()=>setActive("fourth")}/>
    </div>
   
    <div className='w-full'>
       {active ==="first" && <AddCategory/>}
       {active ==="second" && <ViewCategory/>}
       {active ==="third" && <AddProducts/>}
       {active ==="fourth" && <ViewProducts/>} 
       {active === "fifth" && <ViewCategory/>}
      
    </div>
  </div>
  </>
  )
}
