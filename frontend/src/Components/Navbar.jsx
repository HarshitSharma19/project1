import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import download from '../Images/iSHOPLogo.svg'
import Container from './Container.jsx'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (


    <Container>
      
        
        <div className=' m-5 flex justify-center' >
          <img src={Logo} alt="" />
        </div>

      <div className='Navbar bg-rose-100	  md:font-bold  ' >
        <ul className='flex  md:flex justify-center' >
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300  hover:text-blue-500 '><Link to="/"> HOME</Link></li>
            <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300  relative ' >
            <Link to="/store"> STORE</Link>
            <div className=' w-[550px] m-auto submenu bg-[#F1F1F1] flex absolute justify-between'>

              <ul className='  text-left  border-2 leading-6  ' >
                <li className='md:font-bold ' >Accessories</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >AirPort & Wireless</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >AppleCare Bags</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Shells & Sleeves</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Business & Security</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cables & Docks</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cameras & Video</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Car & Travel</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cases & Films</li>
              </ul>

              <ul className=' w-300 text-left border-2 leading-6  ' >
                <li className='md:font-bold' >Category</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' >Charging Devices</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' >Connected Home</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' >Device Care</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' > Display & Graphic</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' > Fitness & Sport</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' > Headphones</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' > HealthKit</li>
              </ul>
              <ul className='w-300 border-2 text-left leading-6  ' >
                <li className='md:font-bold' >Category</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' > Mice & Keyboards</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' > Music Creation</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' > Networking & Server</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Mobiles</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Tablets</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Laptops</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Watches</li>
              </ul>
            </div>
          </li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300  hover:text-blue-500 ' ><Link to="/offers"> OFFERS</Link></li>
        
          

        </ul>

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
  </div>
  </Container>
  )
}
export default Navbar;
