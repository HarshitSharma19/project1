import { Link } from 'react-router-dom'
import React from 'react'
import ProductList from './ProductList';
import { useState,useEffect } from 'react';
import axios from "axios";

export default function ViewProducts() {
  const [data , setData] = useState([]);
  const [url , setUrl] = useState("")
  const Data = data.map((a, i)=>{
    return <ProductList id={a._id} home={a.homepage} status={a.status} key={i} sno={i} name={a.name} image={a.image} url={url} price={a.price} details={a.details} weight={a.weight} discount={a.discount}/>
  })

  const fetchData = async() => {
    await axios.get("http://localhost:5000/admin-panel/products/view", {
      headers: {
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7IkVtYWlsIjoiaGFyc2hpdHNoYXJtYTcyNEBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImhhcnNoaXQxMjMifSwiaWF0IjoxNjYxNDkxNTE2fQ.hw5TIPPnTON4IlgzewFl9WioJk9nrfvRF1BDBAqjvTg"
      }
    }).then((success) => {
      setUrl(success.data.imgBaseUrl)
      setData(success.data.data);
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <> 
    <div className=' flex border-b-2 justify-between px-4 py-2 '> 
      <div className=' h-14 text-2xl flex items-center justify-center text-gray-700'> View Products</div>
      <div className=' pt-1'>
        <Link to='/admin-panel/products/add'><button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="#54a0ff" viewBox="0 0 24 24" stroke="white" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button></Link>
      </div>
    </div>  


    <div className='mt-6 mx-10 mb-16'>
      <table className="table-auto text-center w-full ">
        <thead className='border-b-2 '>
          <tr className='h-12 text-slate-700 font-semibold text-md'>
            <td>S.No</td>
            <td>Name</td>
            <td>Description</td>
            <td>Image</td>
            <td>Price</td>
            <td>Discount</td>
            <td>weight</td>
            <td>Status</td>
            <td>Home Page</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {Data}
        </tbody>
        
      </table>
    </div>  
    </>   
  )
}

