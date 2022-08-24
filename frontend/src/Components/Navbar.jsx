import React from 'react'
import download from '../Images/iSHOP Logo.svg'
import Container from './Container.jsx'


export default function Navbar() {
  return (
    <Container>
    <div >
    <div className=' flex justify-center my-5 ' >
            <div className=''>
               <img className='justify-center'  src={download} alt="" />
             </div>
    </div>
     <div >
     <ul className='flex justify-center' >

         <li className='p-6' >HOME</li>
         <li className='p-6 relative ' >STORE
         <div style={{width:"800px", margin:"auto"}} className='hidden absolute text-centeborder-2 border-indigo-500/100 text-black flex justify-between	 bg-white'>

       

                     
                        <ul className='w-300 border-2 leading-8 border-indigo-500/100 ' >
                          <li className='font-bold' >Accessories</li>
                          <li>AirPort & Wireless</li>
                          <li>AppleCare Bags</li>
                          <li>Shells & Sleeves</li>
                          <li>Business & Security</li>
                          <li>Cables & Docks</li>
                          <li>Accessories</li>
                          <li>Cameras & Video</li>
                          <li>Car & Travel</li>
                          <li>Cases & Films</li>
                        </ul>
                       
                        <ul className=' w-300 border-2 leading-8 border-indigo-500/100 ' >
                          <li className='font-bold' >Category</li>
                          <li>Charging Devices</li>
                          <li>Connected Home</li>
                          <li>Device Care</li>
                          <li> Display & Graphic</li>
                          <li> Fitness & Sport</li>
                          <li> Headphones</li>
                          <li> HealthKit</li>
                        </ul>
                        <ul className='w-300 border-2 leading-8 border-indigo-500/100 ' >
                        <li className='font-bold' >Category</li>
                          <li> Mice & Keyboards</li>
                          <li> Music Creation</li>
                          <li> Networking & Server</li>
                        </ul>
                       </div>
         </li>
         <li className='p-6 cursor-pointer'  >IPHONE</li>
         <li className='p-6 cursor-pointer' >IPAD</li>
         <li className='p-6 cursor-pointer' >MACBOOK</li>
         <li className='p-6 cursor-pointer' >ACCESORIES</li>
     </ul>
  </div>
  </div>
  
  </Container>
  )
}
