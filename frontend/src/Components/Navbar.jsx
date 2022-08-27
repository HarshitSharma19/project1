
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


import { Link } from 'react-router-dom';
import Container from './Container.jsx'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (

    <Container>


      <div className='Navbar  md:font-bold  ' >
        <ul className='flex  md:flex justify-center' >
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300  hover:text-blue-500 '><Link to="/"> HOME</Link></li>
            <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300 border relative ' >
            <Link to="/store"> STORE</Link>
            <div className=' w-[550px] m-auto submenu bg-[#F1F1F1] flex absolute justify-between'>

              <ul className='  text-left  border-2 leading-6  ' >
                <li className='font-bold  ' >Accessories</li>
                <li>AirPort & Wireless</li>
                <li>AppleCare Bags</li>
                <li>Shells & Sleeves</li>
                <li>Business & Security</li>
                <li>Cables & Docks</li>
                <li>Cameras & Video</li>
                <li>Car & Travel</li>
                <li>Cases & Films</li>
              </ul>

              <ul className=' w-300 text-left border-2 leading-6  ' >
                <li className='font-bold' >Category</li>
                <li>Charging Devices</li>
                <li>Connected Home</li>
                <li>Device Care</li>
                <li> Display & Graphic</li>
                <li> Fitness & Sport</li>
                <li> Headphones</li>
                <li> HealthKit</li>
              </ul>
              <ul className='w-300 border-2 text-left leading-6  ' >
                <li className='font-bold' >Category</li>
                <li> Mice & Keyboards</li>
                <li> Music Creation</li>
                <li> Networking & Server</li>
                <li>MOBILES</li>
                <li>TABLETS</li>
                <li>LAPTOPS</li>
                <li>WATCHES</li>
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

