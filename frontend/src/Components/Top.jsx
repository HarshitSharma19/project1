import React from 'react'


export default function Top() {
    return (
        <div className="container mx-auto">

            <div className="w-screen flex justify-between">
                <div>
                    <div class="dropdown inline-block ">
                        <button class="bg-white text-black-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span class="mr-1">EN</span>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul class="dropdown-menu absolute hidden  pt-1">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div class="dropdown inline-block ">
                        <button class="bg-white text-black-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span class="mr-1">$</span>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul class="dropdown-menu absolute hidden  pt-1">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className=' justify-between flex' >
                    <div className='p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Profile
                    </div>
                    <div className='p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Items
                    </div>
                    <div className='p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>


    )
}
