
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import download from './Images/iSHOP Logo.svg'
import Container from './Container.jsx'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    
    <Container>
 

     <div >
     <ul className='flex hidden md:flex justify-center' >
         <li className='p-6 cursor-pointer' >HOME</li>
         <li className='p-6 cursor-pointer relative ' >STORE
         <div style={{width:"800px", margin:"auto"}} className=' hidden	 absolute text-center    border-2 border-indigo-500/100 text-black flex justify-between	 bg-white'>
                     
                        <ul className='w-300 hidden md:flex border-2 leading-8 border-indigo-500/100 ' >
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
  <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-b'>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed text-center left-0 top-60  w-[100%] h-full border-r  ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>STORE</li>
          <li className='p-4 border-b border-gray-600'>IPHONE</li>
          <li className='p-4 border-b border-gray-600'>IPAD</li>
          <li className='p-4 border-b border-gray-600'>MACBOOK</li>
          <li className='p-4 border-b border-gray-600'>ACCESORIES</li>

      </ul>
    </div>

</Container>

  )
}
export default Navbar;

