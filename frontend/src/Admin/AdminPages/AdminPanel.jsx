import React from 'react'
import DropDown from '../AdminComponents/DropDown'
import ANavbar from '../AdminComponents/ANavbar'


export default function AdminPanel(props) {

  return (

  <div className='h-[100vh] overflow-x-hidden'>
    <div className='sticky top-0'><ANavbar/></div>
      <div className='flex'>
        <div className='w-[20%] fixed top-13 left-0 '>
        <DropDown/>
      </div>
      <div className='w-[80%] ml-[20%]'>
          {props.com}
      </div>

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
  
  )
}
