import React from 'react'
import { Link } from 'react-router-dom'
export default function ANavbar() {
  return (
    <>
    <div className='w-screen h-[8vh] bg-blue-800 py-2 flex justify-between'>
      <span className='text-3xl  text-white pl-6 '>iSHOP</span>
      <div  className='flex mx-6'>
          <div className='mx-3 text-white pt-1'>
          <Link to="/login" className='flex'>logout
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 py-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg></Link>          
          </div> 
        </div>
      </div>
    </>
  )
}
