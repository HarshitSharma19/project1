
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


      <div >
        <ul className='flex  md:flex justify-center' >
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300  hover:text-blue-500 '><Link to="/"> HOME</Link></li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300  hover:text-blue-500 ' ><Link to="/offers"> OFFERS</Link></li>
          <li className='p-6 border cursor-pointer group hover:text-blue-500  hover:-translate-y-1 hover:scale-110 duration-300  relative ' >
            <Link to="/store"> STORE</Link>
            <div style={{ width: "550px", margin: "auto" }} className='  bg-[#F1F1F1] hidden group-hover:flex hover:flex  left-[-200px] top-16  absolute text-center border-2 border-indigo-500/100 text-black  justify-between'>

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
              </ul>
            </div>
          </li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-500 ' ><Link to="/mobiles"> MOBILES</Link></li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-500 ' ><Link to="/tablets"> TABLETS</Link></li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-500 ' ><Link to="/laptops"> LAPTOPS</Link></li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-500 ' ><Link to="/watches"> WATCHES</Link></li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-500 ' ><Link to="/accessories"> ACCESSORIES</Link></li>

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
          <li className='p-5 text-lg font-bold border-b border-black'>ACCESORIES</li>

        </ul>
      </div>

    </Container>

  )
}
export default Navbar;

