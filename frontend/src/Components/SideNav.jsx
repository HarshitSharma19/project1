import React from 'react'

export default function SideNav() {
  return (
    <div>
<div className="w-60 my-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <h1 className='my-3 font-bold'>ACCESORIES</h1>
    <ul className='flex flex-col'>
    <li className='mt-2 cursor-pointer hover:text-blue-500'>Apple car <span className=''>12</span></li>
    <li className='mt-2 cursor-pointer hover:text-blue-500'>Air port & Wireless <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer hover:text-blue-500'>Cable & Docks <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer hover:text-blue-500'>Cases & Films <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer hover:text-blue-500'>Charging Devices <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer hover:text-blue-500'>Connected Home <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer hover:text-blue-500'>HeadPhones <span className='flex-row-reverse'>12</span></li>

    </ul>
</div>
<div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <ul>
        <li> Ranger<span>45-1000</span>
        </li>
        <li>
            <input type="range" />
        </li>
    </ul>
</div>
<div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <ul>
        <h2>Color</h2>
        <div>
            <span className='w-4 h-5 bg:red'></span>
        </div>
    </ul>
</div>
<div className="w-60 my-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <h1 className='my-2 font-bold'>BRAND</h1>
    <ul className='flex flex-col'>
    <li className='mt-2'>Apple <span className=''>12</span></li>
    <li className='mt-2'>LG <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2'>SAMSUNG<span className='flex-row-reverse'>12</span></li>
   

    </ul>
</div>
<div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <ul>
        <h2 className='text-center'>MORE</h2>
       
    </ul>
</div>
    </div>
  )
}
