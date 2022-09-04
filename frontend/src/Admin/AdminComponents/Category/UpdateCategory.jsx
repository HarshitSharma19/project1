import React from 'react'

export default function UpdateCategory() {
  return (
    <>
        <div className=' flex border-b-2 justify-between px-4 py-2'> 
            <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '> Update Categories</div>
        </div>   
        <div className='border-2 mt-10 mb-16 mx-10 px-12 py-8  '>
            <form>
                <table className='table-auto w-full '>
                    <tbody>
                        <tr className='h-16'>
                            <td className='w-48'>Name</td>
                            <td><input type="text" className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" /> </td>
                        </tr>
                        <tr className='h-26 border-b-2'>
                            <td className='flex items-start mt-4'>Upload Image</td>
                            <td className=' mt-6 pt-4 pb-20'><Dropzone event={getValue}/></td>
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