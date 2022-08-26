import React from 'react'
import { useParams } from 'react-router-dom'
import Dropzone from "./Dropzone"
export default function AddProducts() {
  
  const Page = useParams()
  return (
    (Page.id)?
    <>
      <div>UPDATE</div>
    </>
    :
    <>
    <div className=' flex border-b-2 justify-between px-4 py-2'> 
      <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '> Add Products</div>
      
    </div>   

    <div className='border-2 mt-10 mb-16 mx-10 px-12 py-8  '>
      <form>
        <table className='table-auto w-full '>
          <tbody>
            <tr className='h-16'>
              <td>Product Name</td>
              <td><input type="text" className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" /> </td>
            </tr>
            <tr className='h-16'>
              <td className='flex items-start'>Description</td>
              <td><textarea type="text" className="border border-slate-400  w-96 h-24 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" /></td>
            </tr>
            <tr className='h-14'>
              <td>Price</td>
              <td><input type="text" className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" /></td>
            </tr>
            <tr className='h-14'>
              <td>Discount</td>
              <td><input type="text" className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" /></td>
            </tr>
            <tr className='h-28'>
              <td> 
                <select className="w-56 h-8 text-center rounded-md border">
                  <option value="">--Brand--</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Question">General</option>
                </select>
              </td>
              <td>
                <select className="w-56 h-8 text-center rounded-md border">
                  <option value="">--Categories--</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Question">General</option>
                </select>
              </td>
            </tr>
            <tr className='h-26 border-b-2'>
              <td className='flex items-start mt-4'>Upload Images</td>
              <td className=' mt-6 pt-4 pb-20'><Dropzone/></td>
            </tr>
            <tr>
              <td className='h-44 text-end' colSpan={2} >
              <input type="submit" value="Submit" className='bg-[#009432] text-white  mt-16 px-10 py-1.5 rounded-2xl' />
              <input type="reset" value="Reset" className='bg-[#009432] text-white ml-8 px-10 py-1.5 rounded-2xl' />
              </td>
            </tr>
          </tbody>
        </table>   
      </form>  
    </div> 
    </>
  )
}
 