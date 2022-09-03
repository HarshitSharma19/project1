import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react'
import CategoryList from './CategoryList.jsx'
import { Link } from 'react-router-dom'
export default function ViewCategory() {
  const [data , setData] = useState([]);
  const [url , setUrl] = useState("")
  const Data = data.map((a, i)=>{
    return <CategoryList id={a._id} home={a.homepage}  created={a.created_at} status={a.status} key={i} sno={i} name={a.name} image={a.image} url={url}/>
  })

  const fetchData = async() => {
    await axios.get("http://localhost:4000/admin-panel/category/view", {
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
    <div className='flex border-b-2 justify-between px-4 py-2 ' > 
      <div className=' h-14 text-2xl flex items-center justify-center text-gray-700'> View Categories</div>
      <div className=' pt-1'>
        <Link to="/admin-panel/category/add"><button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="#54a0ff" viewBox="0 0 24 24" stroke="white" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
        </button></Link>
     </div>
    </div>    

    <div className='mt-6 mx-10 '>
      <table className="table-auto text-center w-full ">
        <thead className='border-b-2'>
          <tr className='h-12 text-slate-700 font-semibold text-md'>
            <td>S.No</td>
            <td colSpan={2}>Name</td>
            <td>Image</td>
            <td>Status</td>
            <td>Home Page</td>
            <td>Created_at</td>
            <td>Action</td>
          </tr>
        </thead>
        {Data}
     </table>
   </div>  
 </>   
  )
}

