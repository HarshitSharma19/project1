import React from 'react'

import apple6 from './Images/iphone_6_plus.svg'
import Container from './Container'



export default function Banner2() {
  return (
    <div className='bg-blue-700 w-[100%]'>
    <Container>
    <div className='h-80 flex  justify-between' style={{ width: "90%",height:"400px", margin: " auto " }}>
      <div className='text-center flex flex-col justify-center '>
        <h1 className=' text-center text-4xl text-white my-10'>iPhone 6 Plus </h1>
        <p className='text-2xl  text-white'>Performance and design. Taken right to the edge.</p>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-10 mx-52 py-2 px-1 border border- b-2 rounded shadow">
          Shop Now
        </button>
      </div>
      <div><img className='h-[110%] mt-[-40px]' src={apple6} alt="" /></div>
    </div>
    </Container>
    </div>
  )
}







// <div className='bg-blue-600 w-1920 h-400 flex  '>

// <div className=' '>
//   <div className='my-20'>
//     <h1 className=' text-center text-2xl font-bold my-5'>iPhone 6 Plus </h1>
//         <p className='text-2xl font-bold mx-20'>Performance and design. Taken right to the edge.</p>
//         <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-10 mx-52 py-2 px-1 border border- b-2 rounded shadow">
//           Shop Now
//         </button>
//   </div >
// <div  >
//   <img className='' src={apple6} style={{height:"100%"}}  alt="" />
// </div>

// </div>

// </div>