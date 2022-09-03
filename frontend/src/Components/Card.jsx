import React from 'react'
import Container from './Container'
import CardBox from './CardBox'

export default function Card() {
    return (
        <Container>
            
            <div className='w-full flex flex-wrap justify-center mt-10'>
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
                
            </div>
        </Container>
    )
}

