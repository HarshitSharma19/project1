
import React from 'react'
import {Link} from "react-router-dom"
import Container from '../Components/Container'
import Banner from "../Components/Banner.jsx"
import OfferBanner from "../Components/OfferBanner.jsx"
import Card from "../Components/Card.jsx"
export default function MainPage() {
  return (
    <>
    <Banner/>
    <Container>
    <h1 className=' text-center text-2xl font-bold my-5'>BEST SELLER</h1>
            <div>
                <ul className='flex justify-center'>
                    <li className='px-5 font-bold'>All</li>
                    <li className='px-5 font-bold '>Mac</li>
                    <li className='px-5 font-bold'>iPhone</li>
                    <li className='px-5 font-bold'>iPad</li>
                    <li className='px-5 font-bold'>Accessories</li>
                </ul>
            </div>
    <Card/>
    <div className='mt-10 text-center h-20 w-100 cursor-pointer'> <Link to="/store"> <span className='text-blue-600'>Load More</span> </Link></div>
    </Container>
    <OfferBanner/>
    <Container>
    </Container>
    </>
    )
  }

  