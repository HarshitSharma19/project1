import React from 'react'
import {Link} from "react-router-dom"
import Card from "../Components/Card.jsx"
import Banner from '../Components/Banner'
export default function Store() {
return (
<>



  <Banner />
  <h1 className=' text-center text-2xl font-bold my-3'>MOBILES</h1>


  <Card />
  <div className='mt-10 text-center h-20 w-100 cursor-pointer'>
    <Link to="/store"> <span className='text-blue-600'>Load More</span> </Link>
  </div>
  <Banner />
  <h1 className=' text-center text-2xl font-bold my-3'>LAPTOPS</h1>

  <Card />
  <div className='mt-10 text-center h-20 w-100 cursor-pointer'>
    <Link to="/store"> <span className='text-blue-600'>Load More</span> </Link>
  </div>
  <Banner />
  <h1 className=' text-center text-2xl font-bold my-3'>TABLETS</h1>

  <Card />
  <div className='mt-10 text-center h-20 w-100 cursor-pointer'>
    <Link to="/store"> <span className='text-blue-600'>Load More</span> </Link>
  </div>
  <Banner />
  <h1 className=' text-center text-2xl font-bold my-3'>ACCESSORIES</h1>

  <Card />
  <div className='mt-10 text-center h-20 w-100 cursor-pointer'>
    <Link to="/store"> <span className='text-blue-600'>Load More</span> </Link>
  </div>
  <Banner />
  <h1 className=' text-center text-2xl font-bold my-3'>OFFERS</h1>
  <Card />
  <div className='mt-10 text-center h-20 w-100 cursor-pointer'>
    <Link to="/store"> <span className='text-blue-600'>Load More</span> </Link>
  </div>
</>
)
}