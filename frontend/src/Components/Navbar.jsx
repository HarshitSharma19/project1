
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../Images/iSHOP Logo.svg'

import { Link } from 'react-router-dom';
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
            <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300 border relative ' >
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
      <div className=' black md:bg-none flex justify-between md:hidden items-center h-24 max-w-[1240px] mx-auto px-4 text-b'>
        <div onClick={handleNav} className='md:hidden z-10'>
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center  items-center'
        }>
          <li className='p-5 text-lg font-bold border-b border-black'>HOME</li>
          <li className='p-5 text-lg font-bold border-b border-black'>OFFER</li>
          <li className='p-5 text-lg font-bold border-b border-black'>STORE</li>
          <li className='p-5 text-lg font-bold border-b border-black'>MOBILES</li>
          <li className='p-5 text-lg font-bold border-b border-black'>TABLETS</li>
          <li className='p-5 text-lg font-bold border-b border-black'>LAPTOPS</li>
          <li className='p-5 text-lg font-bold border-b border-black'>WATCHES</li>
          

        </ul>
      </div>

    </Container>

  )
}
export default Navbar;

