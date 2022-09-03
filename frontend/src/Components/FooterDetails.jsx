import React from 'react'
import applfooter from '../Images/facebook.svg'
import applfoot from '../Images/twitter.svg'
import { Link } from 'react-router-dom'
import Container from './Container.jsx'
export default function FooterDetails() {
return (
  <div className='border-t-4 p-5 '>
<Container>
  <div className='md:flex md:justify-between border-b-4 py-5'>
    <ShopDesc />
    <FooterBox />
    <ContactUS />
  </div>
</Container>
</div>
)
}
function ShopDesc(){
return(
<>
  <Link to="#" className="block p-2 max-w-sm m-auto  bg-white rounded-lg ">
  <h5 className="mb-2 text-4xl font-bold tracking-tight text-center text-gray-400">ISHOP
  </h5>
  <p className=" text-center font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of
    2021 so far, in reverse chronological order.</p>

  </Link>
</>
)

}
function FooterBox(){
return(
<>
  <Link to="#" className="block p-2 max-w-sm m-auto  bg-white rounded-lg ">
  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-800 ">Follow Us
  </h5>
  <p className="font-normal   text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of
    2021 so far, in reverse chronological order.</p>
  <div className='flex justify-center my-3'>
    <img className="rounded-t-lg mb-3  font-bold w-3 mr-10 " src={applfooter} alt="product" />
    <img className="rounded-t-lg mb-3   font-bold w-5 m-2" src={applfoot} alt="product" />
  </div>
  </Link>
</>
)

}
function ContactUS(){
return(
<>
  <Link to="#" className="block p-2 max-w-sm m-auto  bg-white rounded-lg ">
  <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-800">Contact Us
  </h5>
  <p className=' text-center font-normal text-gray-700 dark:text-gray-400'>
    Address:address@building125 <br />
    Call us now:0989875875 <br />
    Email:support@mail.com <br />
  </p>
  </Link>
</>

)

}