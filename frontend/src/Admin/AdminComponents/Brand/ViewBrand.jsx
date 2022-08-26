import React from 'react'
import { Link } from 'react-router-dom'
import SwitchBtn from '../SwitchBtn.jsx'
import watch from '../../../Images/watch.png'

export default function ViewBrand() {
  return (
    <> 
    <div className='flex border-b-2 justify-between px-4 py-2 ' > 
      <div className=' h-14 text-2xl flex items-center justify-center text-gray-700'> View Brand</div>
      <div className=' pt-1'>
        <Link to="/admin-panel/category/add"><button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="#54a0ff" viewBox="0 0 24 24" stroke="white" strokeWidth="1">
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
            <td>Name</td>
            <td>Logo</td>
            <td>Status</td>
            <td>Home Page</td>
            <td>Created_at</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody >
        <tr className=' border-b'>
            <td>1</td>
            <td >Mac book</td>
            <td className='flex justify-center items-center'><img src={watch} alt="" width="120px"/></td>
            <td><SwitchBtn flag={1}/></td>
            <td><SwitchBtn/></td>
            <td>Apple</td>
            <td className='flex justify-center items-center relative bottom-7'>
              <button><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-6 w-6 " fill="none" viewBox="0 0  24  24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg></button>
              <button><svg xmlns="http://www.w3.org/2000/svg" className="ml-10 h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
            </td>         
          </tr>           
        </tbody>
     </table>
   </div>  
 </>   
  )
}
