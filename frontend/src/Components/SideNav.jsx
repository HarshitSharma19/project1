import React from 'react'

export default function SideNav() {
  return (
    <div>
<div className="w-60 my-10 rounded-md p-5 bg-red-300 flex flex-col " style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <h1 className='my-3 font-bold'>ACCESORIES</h1>
    <ul className='flex flex-col'>
    <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Apple car <span className=''>12</span></li>
    <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Air port & Wireless <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Cable & Docks <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Cases & Films <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Charging Devices <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>Connected Home <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 cursor-pointer flex  justify-between hover:text-blue-500'>HeadPhones <span className='flex-row-reverse'>12</span></li>

    </ul>
</div>
<div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <ul>
        <li className='flex  justify-between mb-3'> Ranger<span>45-1000</span>
        </li>
        <li>
            <input type="range" />
        </li>
    </ul>
</div>
<div className="w-60 mb-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <ul>
        <h2 className='mb-3'>Color</h2>
        <div className='flex mx-2 mt-3'>
            <div className='h-5 w-5  mx-1 rounded-full bg-yellow-300'></div>
            <div className='h-5 w-5  mx-1 rounded-full bg-red-400'></div>
            <div className='h-5 w-5  mx-1 rounded-full bg-green-900'></div>
            <div className='h-5 w-5  mx-1 rounded-full bg-blue-600'></div>
            <div className='h-5 w-5  mx-1 rounded-full bg-orange-300'></div>

        </div>
    </ul>
</div>
<div className="w-60 my-10 rounded-md p-5 bg-red-300" style={{background: "#F6F7F8 0% 0% no-repeat padding-box"}}>
    <h1 className='my-2 font-bold'>BRAND</h1>
    <ul className='flex flex-col'>
    <li className='mt-2 flex  justify-between'>Apple <span className=''>12</span></li>
    <li className='mt-2 flex  justify-between'>LG <span className='flex-row-reverse'>12</span></li>
    <li className='mt-2 flex  justify-between'>SAMSUNG<span className='flex-row-reverse'>12</span></li>
   

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
