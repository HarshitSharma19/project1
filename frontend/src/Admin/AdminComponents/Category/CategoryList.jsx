import React from 'react'
import Button from '../Button.jsx'

export default function CategoryList({sno , name , image , created}) {
  return (
          <>
          <div className='mt-4 mx-10 '>
            <table className="table-auto text-center w-full ">
              <thead></thead>
              <tbody>
                <tr className='border-b'>
                  <td className='w-11'>{sno}</td>
                  <td className='w-[151px]'>{name}</td>
                  <td  className='w-[260px] flex justify-center items-center'><img src={image} alt="" className='mb-2 w-[115px] h-[75px]'/></td>
                  <td className='w-[138px]'><Button/></td>
                  <td className='w-[240px]'>{created}</td>
                  <td  className='w-[160px] flex justify-center items-center relative bottom-7'>
                    <button><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-6 w-6 " fill="none" viewBox="0 0  24  24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" className="ml-6 h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
  )
}
