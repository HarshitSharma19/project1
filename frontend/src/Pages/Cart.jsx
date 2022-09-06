
import React from 'react'
import Container from '../Components/Container.jsx'
import Philips from '../Images/philips_hue.svg'
import Applemac from '../Images/apple_macbook.png'


export default function Cart() {
  return (
    <>
      <Container>
        <div className='text-center font-bold text-[20px]'>
          <h1>CART</h1>
        </div>
        <table cellPadding={40} cellSpacing={0} >
          <thead className='flex md:border-b-2'>
            <th>PRODUCT IMG</th>
            <th colSpan={2}>PRODUCT</th>
            <th>PRICE</th>
            <th colSpan={2}>QTY</th>
            <th>Unit Price</th>
          </thead>
          <tbody>
            <tr className=' flex border-b-4'>
              <td><img className='md:w-[100px]' src={Philips} alt="product" /></td>
              <td colSpan={2} className='font-bold md:text-[12px] '><center>Philips Hue 7W BR30 Connected Downlight Lamp</center></td>
              <td className='font-bold md:text-[12px] '>$998</td>
              <td className='flex h-10 md:text-[12px] ' colSpan={2}><button className=' md:text-[30px] border-none font-bold text-blue-700 md:text-3xl bg-slate-300 w-10 md:w-[40px]'>-</button><button className=' md:text-[20px] border-none font-bold bg-slate-300 md:text-3xl'>0</button><button className=' md:text-[20px] border-none md:text-3xl w-10 font-bold bg-slate-300 md:w-[40px] text-blue-700'>+</button></td>
              <td className='font-bold md:text-[12px] '>$499</td>
            </tr>
            <tr className=' flex border-b-2'>
              <td><img className='md:w-[100px]' src={Applemac} alt="product" /></td>
              <td className='font-bold' colSpan={2}><center>Apple Macbook Pro</center></td>
              <td className='font-bold'>$998</td>
              <td className='flex h-10 md:text-[12px] ' colSpan={2}><button className='border-none font-bold md:text-[30px] text-blue-700 md:text-3xl bg-slate-300 w-10 md:w-[40px]'>-</button><button className='border-none font-bold md:text-[20px] bg-slate-300 md:text-3xl'>0</button><button className='border-none md:text-3xl md:text-[20px] w-10 font-bold bg-slate-300 md:w-[40px] text-blue-700'>+</button></td>
              <td className='font-bold'>$499</td>
            </tr>


          </tbody>
        </table>
        <div className=' text-center md:flex font-medium justify-around ' >
          <div  >
            <input type="text" placeholder='Voucher Code' className='md:mt-20 mt-10 text-sm px-5 py-2.5 border-2 border-black' /><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-3 text-center mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Redeem</button>

          </div>
          <div  >
            <table className='m-auto' >
              <tr>
                <td className='py-5'>Subtotal</td>
                <td>$998</td>
              </tr>
              <tr>
                <td className='py-5'>Shipping fee</td>
                <td>$20</td>
              </tr>
              <tr>
                <td className='py-5'>Coupon</td>
                <td>No</td>
              </tr>
              <tr className=' border-t-2 ' >
                <td className='text-[20px] py-5 font-bold' >TOTAL</td>
                <td className='text-[20px] py-5 font-bold' >$1018</td>
              </tr>
              <button type="button" className="text-white justify-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-36 py-3 text-center mr-auto mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Redeem</button>
            </table>

          </div>
        </div>
      </Container>

    </>
  )
}

