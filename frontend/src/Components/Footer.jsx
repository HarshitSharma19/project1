import Container from './Container.jsx'
import visa from './Images/visa.svg'
import wester from './Images/Western_union.svg'
import master from './Images/master_card.svg'
import paypal from './Images/Paypal.svg'


import React from 'react'

export default function Footer() {
  return (
    <>
   <Container>
    
   <div className="   leading-10 border-t-4 border-b-4 border-black-600 my-20 py-5 md:flex md:justify-center   ">
    <ul>
      <span className='font-bold' >Information</span>
      <li className="text-sm" >AboutUs</li>
      <li className="text-sm" >Information</li>
      <li className="text-sm" >Privacy Policy</li>
      <li className="text-sm" >Terms & Conditions</li>
    </ul>
    <ul>
      <span className='font-bold' >Services</span>
      <li className="text-sm" >AboutUs</li>
      <li className="text-sm" >Information</li>
      <li className="text-sm" >Privacy Policy</li>
      <li className="text-sm" >Terms & Conditions</li>
    </ul>
    <ul>
      <span className='font-bold' >Extras</span>
      <li className="text-sm" >AboutUs</li>
      <li className="text-sm" >Information</li>
      <li className="text-sm" >Privacy Policy</li>
      <li className="text-sm" >Terms & Conditions</li>
    </ul>
    <ul>
      <span className='font-bold' >My Account</span>
      <li className="text-sm" >AboutUs</li>
      <li className="text-sm" >Information</li>
      <li className="text-sm" >Privacy Policy</li>
      <li className="text-sm" >Terms & Conditions</li>
    </ul>
    <ul>
      <span className='font-bold' >Useful Links</span>
      <li className="text-sm" >AboutUs</li>
      <li className="text-sm">Information</li>
      <li className="text-sm" >Privacy Policy</li>
      <li className="text-sm" >Terms & Conditions</li>
    </ul>
    <ul>
      <span className='font-bold' >Our Offers</span>
      <li className="text-sm" >AboutUs</li>
      <li className="text-sm" >Information</li>
      <li className="text-sm" >Privacy Policy</li>
      <li className="text-sm" >Terms & Conditions</li>
    </ul>
   </div>
   <hr />
   <div className='flex justify-end' >
    <img className='px-2'  src={visa} alt="" />
    <img className='px-2' src={wester} alt="" />
    <img className='px-2' src={paypal} alt="" />
    <img className='px-2' src={master} alt="" />
   </div>    
   </Container>
  

   </>
  )
}
