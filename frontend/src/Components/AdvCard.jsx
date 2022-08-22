import React from 'react'
import appleship from '../Images/shipping.svg'


export default function advCard() {
    return (
        <>
        
        <div style={{
            display:"flex",
            justifyContent:"center",
            
            
        }}>
        <CardBox2/>
        <CardBox2/>
        <CardBox2/>
        
        </div>
        </>
        )
    }
    function CardBox2(){
        return(
            <div className='font-bold my-20 '>
                <div className="first:p-6 max-w-sm flex flex-col items-center bg-white rounded-lg">
                    <div className='text-center'> 
                        <img className="p-8 items-center rounded-t-lg" src={appleship} alt="product" />
                    </div>
                    <h5 className="first:mb-2 text-2xl font-semibold tracking-tight text-black ">FREE SHIPPING</h5>
                    <p className="first:mb-3 font-normal text-center mt-10 text-gray-900 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officiis sed iste expedita velit. Architecto possimus suscipit quibusdam maxime et quod culpa molestiae, eius cupiditate ratione explicabo repellendus expedita sed.</p> 
                </div>
            </div>   
            )
        }
        