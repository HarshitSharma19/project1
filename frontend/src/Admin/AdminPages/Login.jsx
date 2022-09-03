import React from 'react'
import undraw from '../../Images/undraw_login_re_4vu2.svg'
export default function Login() {
  return (  
    <div className='grid grid-cols-2 gap-8'> 
        <div className="min-h-screen bg-gray-100 text-gray-800 px-4 py-6 flex flex-col justify-center">
          <div className="relative py-3 w-10/12 px-6 mx-auto text-center ">
            <span className="text-2xl font-light">Admin login</span>
            <div className="relative mt-4 shadow-md text-left ">
              <div className="h-2 bg-indigo-400 rounded-t-md"></div>
              <div className="py-8  px-8 bg-slate-300  w-full">
                <label className="block font-semibold">Username or Email</label>
                <input type="text" placeholder="Email" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
                <label className="block mt-3 font-semibold">Password </label>
                <input type="password" placeholder="Password" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
                <div className="flex pt-5 justify-center ">
                  <button className="mt-4 bg-indigo-500 text-white py-2 px-12 rounded-lg">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <img alt='' src={undraw}/>
        </div>
    </div>
  )
}
