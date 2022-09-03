import React from 'react'
import Container from '../Components/Container'
import Banner from "../Components/Banner.jsx"
import Card from "../Components/Card.jsx"
export default function Offers() {
return (
<>
  <Banner />
  <Container>
    <h1 className=' text-center text-2xl font-bold my-3'>OFFERS</h1>
    <Card />
    <Card />
    <Card />
    <Card />

  </Container>
</>
)
}