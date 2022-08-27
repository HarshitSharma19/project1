import React from 'react'
import { useParams } from 'react-router-dom'

export default function AddCategory() {
  const Page = useParams()
  return (
    (Page.id)?
    <>
      <div>UPDATE</div>
    </>
    :
    <>
      <div className=' flex border-b-2 justify-between px-4 py-2'> 
      <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '> Add Categories</div>
    </div>   

    <div className='border-2 mt-10 mb-16 mx-10 px-12 py-8  '>
      <form>
        <table className='table-auto w-full '>
          <tbody>
            <tr className='h-16'>
              <td className='w-48'>Category</td>
              <td><input type="text" className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" /> </td>
            </tr>
            <tr className='h-16 border-b-2'>
              <td className='w-48 pb-32 pt-7'>Brand</td>
              <td className='pb-32 pt-7'><input type="text" className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" /></td>
            </tr>
            <tr>
              <td className='h-28 text-end' colSpan={2} >
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
