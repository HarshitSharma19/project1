import React from 'react'
import applfooter from '../Images/facebook.svg'
import applfoot from '../Images/twitter.svg'

export default function FooterDetails() {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        
           
    }}>
        <FooterBox/>
        <FooterBox/>
        <FooterBox/>
    </div>
  )
}
function FooterBox(){
    return(
        
<a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Follow Us
        </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className='flex'>
                <img className="rounded-t-lg mb-3 font-bold w-3 m-2" src={applfooter} alt="product"/>
                <img className="rounded-t-lg mb-3 font-bold w-5 m-2" src={applfoot} alt="product"/>
            </div>
</a>

    )
}