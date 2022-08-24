import React from 'react'
import philips from '../Images/philips_hue.svg'

export default function Cart() {
  return (
    <div>
      <ul className='text-xl uppercase flex font-bold justify-around border-b-2 border-gray-500'>
        <li >Products</li>
        <li>price</li>
        <li>oty</li>
        <li >unit price</li>
      </ul>
      <ul>
      <img className="rounded-t-lg mb-3 font-bold w-5 m-2" src={philips} alt="product"/>
      </ul>
    </div>
  )
}
