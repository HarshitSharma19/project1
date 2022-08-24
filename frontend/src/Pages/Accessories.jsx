import Container from "../Components/Container.jsx";
import SideNav from "../Components/SideNav.jsx";
import Card from "../Components/Card.jsx"
import Banner from "../Components/Banner.jsx"
import React from 'react'

export default function Products() {
  return (
    <Container>
        <div className="flex">
            <div className="mt-5">
            <SideNav/>
            </div>
            <div className="p-5 mt-10" style={{width:"1360px"}}>
                <Banner />
                <Card/>
            </div>
        </div>
    </Container>
  )
}
