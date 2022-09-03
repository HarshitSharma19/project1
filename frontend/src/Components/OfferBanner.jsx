import React from 'react'

import apple6 from '../Images/iphone_6_plus.svg'
import Container from './Container'



export default function OfferBanner() {
return (
<div className='bg-blue-700 md:h-[400px]    md:w-[100%] w-[100%]'>
  <Container>
    <div className='flex justify-between ' style={{ width: "90%",height:"250px", margin: " auto " }}>
      <div className=' flex flex-col   '>
        <h1 className=' md:text-center text-center  md:text-4xl text-sm text-white my-10'>iPhone 6 Plus </h1>
        <p className='md:text-2xl text-sm text-center   text-white'>Performance and design. Taken right to the edge.</p>
        <button
          className=" hover:bg-gray-100 md:w[50px] w-15 bg-slate-100  mt-10    md:text-gray-800 font-semibold md:my-10 md:mx-52 md:py-2 px-1  rounded shadow">
          Shop Now
        </button>
      </div>
      <div  >
      <img  className= ' mt-[-19px]  md:mt-[-65px] md:h-[110%] w-[400px]  md:h-[500px]  ' src={apple6} alt="" />
      </div>
    </div>
  </Container>
</div>
)
}