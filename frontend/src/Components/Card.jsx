import React from 'react'
import Container from './Container'
import CardBox from './CardBox'

export default function Card() {
    return (
        <Container>
            <h1 className=' text-center text-2xl font-bold my-5'>BEST SELLER
            </h1>

            <div>
                <ul className='flex justify-center'>
                    <li className='px-5 font-bold'>All</li>
                    <li className='px-5 font-bold '>Mac</li>
                    <li className='px-5 font-bold'>iPhone</li>
                    <li className='px-5 font-bold'>iPad</li>
                    <li className='px-5 font-bold'>Accessories</li>
                </ul>
            </div>
            <div
                style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "20px"
            }}>

                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
                
                

            </div>
        </Container>
    )
}

