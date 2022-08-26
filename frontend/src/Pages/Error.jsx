import React from 'react'
import { Link } from 'react-router-dom'
import Container from "../Components/Container.jsx"
export default function error() {
return (
<Container>
  <div className='w-full  h-[80vh]'>
    <div className='flex flex-col justify-center items-center h-[100%]'>
<h1 className='text-8xl  font-bold'>404</h1>
<h2 className='text-4xl  font-bold mt-10'>PAGE NOT FOUND</h2>
<Link to="/">
<h2 className='text-4xl text-white rounded-full font-bold mt-16 p-10 bg-black'>Go Home</h2>
</Link>
    </div>
  </div>
</Container>

)
}