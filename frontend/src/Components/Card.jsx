import React from 'react'
import Container from './Container'
import CardBox from './CardBox'

export default function Card() {
    return (
        <Container>
            
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
                
                

            </div>
        </Container>
    )
}

