
import React from 'react'
import appleship from '../Images/shipping.svg'
import support from '../Images/support.svg'
import refund from '../Images/refund.svg'
import Container from './Container'


export default function advCard() {
    return (
        <Container>
        
        <div className='md:flex md:justify-center  '>
        <Sheeping/>
        <Refund/>
        <Support/>
        
        </div>
        </Container>
        )
    }
    function Sheeping(){
        return(
            <div className='font-bold flex justify-center my-20'>
                <div className="first:p-6 max-w-sm  text-center items-center bg-white ">
                    <div className='text-center'> 
                        <img className="p-5 m-auto items-center rounded-t-lg" src={appleship} alt="product" />
                    </div>
                    <h5 className="first:mb-2 text-2xl font-semibold tracking-tight  text-black">FREE SHIPPING</h5>
                    <p className="first:mb-3 font-normal  mt-10 text-gray-900 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officiis sed iste expedita velit. Architecto possimus suscipit quibusdam maxime et quod culpa molestiae, eius cupiditate ratione explicabo repellendus expedita sed.</p> 
                </div>
            </div>   
            )
        }
        function Refund(){
            return(
                <div className=' flex justify-center font-bold my-20'>
                    <div className="first:p-6 max-w-sm justify-center text-center items-center bg-white ">
                        <div className='text-center'> 
                            <img className="p-5 m-auto items-center rounded-t-lg" src={refund} alt="product" />
                        </div>
                        <h5 className="first:mb-2 text-2xl font-semibold tracking-tight  text-black">FREE SHIPPING</h5>
                        <p className="first:mb-3 font-normal  mt-10 text-gray-900 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officiis sed iste expedita velit. Architecto possimus suscipit quibusdam maxime et quod culpa molestiae, eius cupiditate ratione explicabo repellendus expedita sed.</p> 
                    </div>
                </div>   
                )
            }
            function Support(){
                return(
                    <div className=' flex justify-center font-bold my-20'>
                        <div className="first:p-6 max-w-sm justify-center text-center items-center bg-white ">
                            <div className='text-center'> 
                                <img className="p-5 m-auto items-center rounded-t-lg" src={support} alt="product" />
                            </div>
                            <h5 className="first:mb-2 text-2xl font-semibold tracking-tight  text-black">FREE SHIPPING</h5>
                            <p className="first:mb-3 font-normal  mt-10 text-gray-900 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officiis sed iste expedita velit. Architecto possimus suscipit quibusdam maxime et quod culpa molestiae, eius cupiditate ratione explicabo repellendus expedita sed.</p> 
                        </div>
                    </div>   
                    )
                }
        