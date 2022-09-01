import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react'
import BrandList from './BrandList.jsx'
import { Link } from 'react-router-dom'
export default function ViewBrand() {
  const [data , setData] = useState([]);
  const Data = data.map((a, i)=>{
    return <BrandList id={a._id}  created={a.created_at} status={a.status} key={i} sno={i} name={a.name} logo={a.logo} />
    
  })

  const fetchData = async() => {
    await axios.get("http://localhost:4000/admin-panel/brand/view", {
      headers: {
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7IkVtYWlsIjoiaGFyc2hpdHNoYXJtYTcyNEBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImhhcnNoaXQxMjMifSwiaWF0IjoxNjYxNDkxNTE2fQ.hw5TIPPnTON4IlgzewFl9WioJk9nrfvRF1BDBAqjvTg"
      }
    }).then((success) => {
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
      <div className='flex border-b-2 justify-between px-4 py-2  ' >
          <div className=' h-14 text-2xl flex items-center justify-center text-gray-700'> View Brand</div>
          <div className='pt-1'>
            <Link to="/admin-panel/brand/add">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="#54a0ff" viewBox="0 0 24 24" stroke="white" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </Link>
        </div>
      </div>

      <div className='mb-8'>
        <div className='mt-6 mx-10 '>
          <table className="table-auto text-center w-full ">
            <thead className='border-b-2'>
              <tr className='h-12 text-slate-700 font-semibold text-md'>
                <td className='w-5'>S.No</td>
                <td className='w-[120px]'>Name</td>
                <td className='w-52'>Logo</td>
                <td className='w-28'>Status</td>
                <td className='w-48'>Created_at</td>
                <td className='w-32'>Action</td>
              </tr>
            </thead>
          </table>
        </div>
        {Data}
      </div>
      
     
    </>
  )
}
