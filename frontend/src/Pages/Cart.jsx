
import React from 'react'
import Container from '../Components/Container.jsx'

export default function Cart() {
  return (
    <>
    <Container>
      <div>
      <ul className='flex justify-between ' >
        <li>PRODUCT</li>
        <li>PRICE</li>
        <li>QTY</li>
        <li>UNIT PRICE</li>
      </ul>
      <ul flex justify-between  >
        <li> Philips Hue 7W BR30 Connected Downlight Lamp</li>
        <li> <button type="button" className="border border-black font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
  
  +</button>  <input type="text"  /> <button type="button" className="border border-black font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
  
-</button> </li>
        <li>$998</li>
        <li>$449</li>
      </ul>
      </div>

    </Container>
    
    </>
  )
}

