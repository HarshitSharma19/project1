import React from 'react'
import banner from '../Images/iphone_6_plus.svg';
import Container from './Container';

export default function Banner() {
  return (
    
    <div style={{background: "transparent linear-gradient(67deg, #E71D3A 0%, #ECC7C1 45%, #EFCAC4 58%, #E4BDB8 70%, #42A8FE 100%) 0% 0% no-repeat padding-box"}}>
      <Container>
    <div style={{
      height:"400px",display:"flex", flexDirection:"row-reverse",
      opacity: "1",position:"relative"
    }} >
    
    <img style={{
      width: "570px",
      height: "100%"}} src={banner} alt="" />
      
      
      </div>
      </Container>

      </div>
      )
    }
    