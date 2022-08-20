import React from 'react'
import banner from '../Images/iphone_6_plus.svg';

export default function Banner() {
  return (
    <>
    <div style={{
      border:"2px solid red",width:"100%", height:"650px",
    }} >
    
    <img style={{
      width: "570px",
      height: "619px"}} src={banner} alt="" />
      

    </div>
    </>
  )
}
