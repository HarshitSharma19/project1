import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Dropzone from '../Dropzone'
export default function UpdateBrand() {
    // const [data , setData] = useState([])
    const [img, setImg] = useState("")
    const param = useParams();
    const id = param.id;
    async function fetchData(){
        await axios.get(`http://localhost:5000/admin-panel/brand/update/${id}`, {
            headers: {
              authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7IkVtYWlsIjoiaGFyc2hpdHNoYXJtYTcyNEBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImhhcnNoaXQxMjMifSwiaWF0IjoxNjYxNDkxNTE2fQ.hw5TIPPnTON4IlgzewFl9WioJk9nrfvRF1BDBAqjvTg"
            }
        }).then((success) => {
            console.log(success)
            // setData(success.data.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    function getValue(x) {
        setImg(x)
    }
    function formHandler(event){
        const name = event.target.name.value;
        const dataS = new FormData();
        dataS.append("name", name)
        dataS.append("logo", img)
        axios.put(`http://localhost:5000/admin-panel/brand/update/${id}`,
        dataS,
        {
            headers: {
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7IkVtYWlsIjoiaGFyc2hpdHNoYXJtYTcyNEBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImhhcnNoaXQxMjMifSwiaWF0IjoxNjYxNDkxNTE2fQ.hw5TIPPnTON4IlgzewFl9WioJk9nrfvRF1BDBAqjvTg"
            }
        })
        event.preventDefault();
    }
  return (
    <>
        <div className=' flex border-b-2 justify-between px-4 py-2'>
            <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '>Update Brand</div>
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
                            <td className='flex items-start mt-4'> Logo</td>
                            <td className='pt-6 pb-20'><Dropzone event={getValue}/></td>
                        </tr>
                        <tr>
                            <td className='h-28 text-end' colSpan={2} >
                                <input type={"submit"} value='Submit' className='bg-[#009432] text-white cursor-pointer  mt-16 px-10 py-1.5 rounded-2xl' />
                                <input type="reset" value='Reset' className='bg-[#009432] text-white ml-8 px-10 py-1.5 rounded-2xl cursor-pointer' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </>
  )
}