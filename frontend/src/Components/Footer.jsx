import Container from './Container.jsx'
import visa from '../Images/visa.svg'
import wester from '../Images/Western_union.svg'
import master from '../Images/master_card.svg'
import paypal from '../Images/Paypal.svg'


import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='border-b-4'>
        <Container>

          <div className=" flex-none text-center md:flex md:justify-between my-5">
            <div className='mr-5'>
              <ul>
                <li className='text-2xl font-bold pb-4'>Information</li>
                <li className="text-m py-1">AboutUs</li>
                <li className="text-m py-1">Information</li>
                <li className="text-m py-1">Privacy Policy</li>
                <li className="text-m py-1">Terms & Conditions</li>
              </ul>
            </div>
            <div className='mr-5'>
              <ul>
                <li className='text-2xl font-bold pb-4'>Services</li>
                <li className="text-m py-1">AboutUs</li>
                <li className="text-m py-1">Information</li>
                <li className="text-m py-1">Privacy Policy</li>
                <li className="text-m py-1">Terms & Conditions</li>
              </ul>
            </div>

            <div className='mr-5'>
              <ul>
                <li className='text-2xl font-bold pb-4'>Extras</li>
                <li className="text-m py-1">AboutUs</li>
                <li className="text-m py-1">Information</li>
                <li className="text-m py-1">Privacy Policy</li>
                <li className="text-m py-1">Terms & Conditions</li>
              </ul>
            </div>


            <div className='mr-5'>
              <ul>
                <li className='text-2xl font-bold pb-4'>My Account</li>
                <li className="text-m py-1">AboutUs</li>
                <li className="text-m py-1">Information</li>
                <li className="text-m py-1">Privacy Policy</li>
                <li className="text-m py-1">Terms & Conditions</li>
              </ul>

            </div>

            <div className='mr-5'>
              <ul>
                <li className='text-2xl font-bold pb-4'>Useful Links</li>
                <li className="text-m py-1">AboutUs</li>
                <li className="text-m py-1">Information</li>
                <li className="text-m py-1">Privacy Policy</li>
                <li className="text-m py-1">Terms & Conditions</li>
              </ul>
            </div>

            <div className='mr-5'>
              <ul>
                <li className='text-2xl font-bold pb-4'>Our Offers</li>
                <li className="text-m py-1">AboutUs</li>
                <li className="text-m py-1">Information</li>
                <li className="text-m py-1">Privacy Policy</li>
                <li className="text-m py-1">Terms & Conditions</li>
              </ul>
            </div>
          </div>

        </Container>
      </div>
      <Container>
        <div className=' 	 m-2 flex justify-center'>
          <img className='px-2' src={visa} alt="" />
          <img className='px-2' src={wester} alt="" />
          <img className='px-2' src={paypal} alt="" />
          <img className='px-2' src={master} alt="" />
        </div>
      </Container>


    </>
  )
}