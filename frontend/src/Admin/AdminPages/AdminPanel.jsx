import React from 'react'
import DropDown from '../AdminComponents/DropDown.jsx'
import ANavbar from '../AdminComponents/ANavbar.jsx'


export default function AdminPanel(props) {

  return (

    <div className='h-[100vh] overflow-x-hidden'>
      <div className='sticky top-0 z-10'><ANavbar/></div>
      <div className='flex'>
        <div className='w-[20%] fixed top-13 left-0 '>
        <DropDown/>
        </div>
        <div className=' w-[80%] ml-[20%]'>
          {props.com}
        </div>
      </div> 
  </div>
  )
}

