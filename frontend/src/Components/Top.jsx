import React from 'react'
import Container from './Container.jsx'
import { Link } from 'react-router-dom'

export default function Top(props) {
    let status=0;
return (
<Container>
    <div className="container mx-auto">

        <div className="flex justify-between" style={{background: "#FFFFFF 0% 0% no-repeat padding-box",opacity: "1"}}>
            <div>
                <div className="dropdown inline-block ">
                    <button
                        className="bg-white text-black-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">EN</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden cursor-pointer  pt-1">
                        
                    </ul>
                </div>
                <div className="dropdown inline-block ">
                    <button
                        className="bg-white text-black-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">$</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden  pt-1">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className=' justify-between flex'>
                <div className='p-3 flex cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {(status === 1)?
                    <>
                        <Link to="/profile" >My Profile</Link>
                    </> 
                    : 
                    <>
                        <p><span className='mr-5'> <Link to="/Login" >Login</Link></span><span><Link to="/signup" >SignUp</Link></span></p>
                    </>
                    }
                    
                </div>
                <div className='p-3 flex cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <Link to="/cart">Items</Link>
                    
                </div>
                <div className='p-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </div>

    </div>
</Container>

)
}