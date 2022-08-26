import React from 'react';
import { useParams } from 'react-router-dom';
import Dropzone from '../Dropzone';
import axios from 'axios';
import { useState } from 'react';
export default function AddBrand() {
  const [img, setImg] = useState("")
  function getValue(x) {
    setImg(x)
  }
  const formHandler = (event) => {
    const name = event.target.name.value;
    axios.post("http://localhost:4000/admin-panel/brand/add",
      {
        "name": name,
        "logo": img
      },
      {
        headers: {
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7IkVtYWlsIjoiaGFyc2hpdHNoYXJtYTcyNEBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImhhcnNoaXQxMjMifSwiaWF0IjoxNjYxNDkxNTE2fQ.hw5TIPPnTON4IlgzewFl9WioJk9nrfvRF1BDBAqjvTg"
        }
      }).then((success) => {
        console.log(success)
      }).catch((error) => {
        console.log(error)
      })
    event.preventDefault()
  }
  const Page = useParams()
  return (
    (Page.id) ?
      <>
        <div>UPDATE</div>
      </>
      :
      <>
        <div className=' flex border-b-2 justify-between px-4 py-2'>
          <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '> Add Brand</div>
        </div>
        <div className='border-2 mt-10 mb-16 mx-10 px-12 py-8  '>
          <form onSubmit={formHandler}>
            <table className='table-auto w-full '>
              <tbody>
                <tr className='h-16'>
                  <td className='w-48'>Name</td>
                  <td>
                    <input type="text" className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" name='name' />
                  </td>
                </tr>
                <tr className='h-26 border-b-2'>
                  <td className='flex items-start mt-4'>Upload Logo</td>
                  <td className=' mt-6 pt-4 pb-20'><Dropzone event={getValue} /></td>
                </tr>
                <tr>
                  <td className='h-28 text-end' colSpan={2} >
                    <input type={"submit"} className='bg-[#009432] text-white  mt-16 px-10 py-1.5 rounded-2xl' />
                    <input type={"button"} className='bg-[#009432] text-white ml-8 px-10 py-1.5 rounded-2xl' />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </>
  )
}