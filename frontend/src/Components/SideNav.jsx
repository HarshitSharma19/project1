import React from 'react'
import Star from "./Star.jsx"

export default function SideNav() {
return (
<div>
    <div className="w-60 my-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
        <h1 className='my-2 font-bold'>BRAND</h1>
        <ul className='flex flex-col ml-4'>
            <li className='mt-2 flex  justify-between cursor-pointer hover:text-blue-600'>Apple <span className=''>12</span></li>
            <li className='mt-2 flex  justify-between cursor-pointer hover:text-blue-600'>LG <span className='flex-row-reverse'>12</span></li>
            <li className='mt-2 flex  justify-between cursor-pointer hover:text-blue-600'>SAMSUNG<span className='flex-row-reverse'>12</span></li>
        </ul>
    </div>
    <div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
        <ul>
           <li> <h2 className='mb-3 font-bold'>Color</h2></li>
           <ul className='ml-2'>
           <div className='flex mx-2 mt-3'>
                <div className='h-5 w-5  mx-1 rounded-full cursor-pointer bg-yellow-300'></div>
                <div className='h-5 w-5  mx-1 rounded-full cursor-pointer bg-red-400'></div>
                <div className='h-5 w-5  mx-1 rounded-full cursor-pointer bg-green-900'></div>
                <div className='h-5 w-5  mx-1 rounded-full cursor-pointer bg-blue-600'></div>
                <div className='h-5 w-5  mx-1 rounded-full cursor-pointer bg-orange-300'></div>
            </div>
           </ul>
          
        </ul>
    </div>
    <div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
        <ul>
            <li className='flex font-bold  justify-between mb-3'> Ranger<span>45-1000</span></li>
            <ul className='ml-4'>
            <li><input type="range"/></li>
            </ul>
            
        </ul>
    </div>
    <div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
        <ul>
            <li className='mb-3 font-bold'> Avg. Customer Review</li>
            <ul className='ml-4'>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </ul>
      
        </ul>
    </div>
    <div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
        <ul>
            <li className='mb-3 font-bold'> Avg. Customer Review</li>
            <ul className='ml-4'>
            <li className='mt-2 hover:text-blue-600 cursor-pointer'> Under ₹1,000</li>
            <li className='mt-2 hover:text-blue-600 cursor-pointer'>₹1,000 - ₹5,000</li>
            <li className='mt-2 hover:text-blue-600 cursor-pointer'>₹5,000 - ₹10,000</li>
            <li className='mt-2 hover:text-blue-600 cursor-pointer'> ₹10,000 - ₹20,000</li>
            <li className='mt-2 hover:text-blue-600 cursor-pointer'> Over ₹20,000</li>
            </ul>
            
        </ul>
    </div>



    {/* <div className="w-60 my-10 rounded-md p-5 bg-red-300 flex flex-col "
        style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
        <h1 className='my-3 font-bold'>ACCESORIES</h1>
        <ul className='flex flex-col'>
            <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Apple car <span
                    className=''>12</span></li>
            <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Air port & Wireless <span
                    className='flex-row-reverse'>12</span></li>
            <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Cable & Docks <span
                    className='flex-row-reverse'>12</span></li>
            <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Cases & Films <span
                    className='flex-row-reverse'>12</span></li>
            <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Charging Devices <span
                    className='flex-row-reverse'>12</span></li>
            <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Connected Home <span
                    className='flex-row-reverse'>12</span></li>
            <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>HeadPhones <span
                    className='flex-row-reverse'>12</span></li>
        </ul>
    </div> */}



    <div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
        <ul>
            <h2 className='text-center font-bold cursor-pointer hover:text-blue-600'>MORE</h2>

        </ul>
    </div>
</div>
)
}