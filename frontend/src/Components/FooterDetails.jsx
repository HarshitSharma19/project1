
import React from 'react'
import applfooter from '../Images/facebook.svg'
import applfoot from '../Images/twitter.svg'
import { Link } from 'react-router-dom'
export default function FooterDetails() {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center"
        
           
    }}>
        <FooterBox/>
        <FooterBox/>
        <FooterBox/>
    </div>
  )
}
function FooterBox(){
    return(
        <>
<Link to="#" className="block p-6 max-w-sm bg-white rounded-lg border  shadow-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Follow Us
        </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className='flex'>
                <img className="rounded-t-lg mb-3 font-bold w-3 m-2" src={applfooter} alt="product"/>
                <img className="rounded-t-lg mb-3 font-bold w-5 m-2" src={applfoot} alt="product"/>
            </div>
</Link>
</>
    
    )

}