import React from 'react'
import {Link} from "react-router-dom"
import Container from '../Components/Container'
import Banner from "../Components/Banner.jsx"
import Banner2 from "../Components/Banner2.jsx"
import Card from "../Components/Card.jsx"
export default function MainPage() {
  return (
    <>
    <Banner/>
    <Container>
    <Card/>
    <div className='mt-10 text-center h-20 w-100 cursor-pointer'> <Link to="/products"> <span className='text-blue-600'>Load More</span> </Link></div>
    </Container>
    <Banner2/>
    <Container>
    </Container>
    </>
    )
  }
  