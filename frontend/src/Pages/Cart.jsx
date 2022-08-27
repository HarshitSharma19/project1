
import Container from '../Components/Container.jsx'
import Philips from '../Images/philips_hue.svg'
import Applemac from '../Images/apple_macbook.png'



export default function Cart() {
  return (
    <>
    <Container>
      {/* <div>
        <ul className='flex justify-around font-bold text-1xl border-b-2 border-gray-500' >
          <li>PRODUCT</li>
          <li>PRICE</li>
          <li>QTY</li>
          <li>UNIT PRICE</li>
        </ul>
          <ul className='flex font-bold justify-between'>
          <li className='flex'>
            <div>
              <img className="rounded-t-lg mb-3 font-bold w-[150px] h-[100px] m-2 border" src={Philips} alt="product"/>
            </div>
            <div className='pt-10 mx-3'>
              Philips Hue 7W BR30 Connected Downlight Lamp
            </div>
          </li>
          <li className='pt-[50px] pl-10'> $998</li>
          <button>-</button>
          <button>2</button>
          <button>+</button>
          <li>$499</li>
        </ul>    
      </div> */}
      <div className='text-center font-bold text-[20px]'>
        <h1>CART</h1>
      </div>
      <table cellPadding={40} cellSpacing={20} >
        <thead className='border-b-2'>
          <th>PRODUCT IMG</th>
          <th colSpan={2}>PRODUCT</th>
          <th>PRICE</th>
          <th colSpan={2}>QTY</th>
          <th>Unit Price</th>
        </thead>
        <tbody>
        <tr className='border-b-4'>
            <td><img src={Philips} alt="product" className='m-auto'/></td>
            <td colSpan={2} className='font-bold'><center>Philips Hue 7W BR30 Connected Downlight Lamp</center></td>
            <td className='font-bold'>$998</td>
            <td colSpan={2}><button className='border-none font-bold text-blue-700 text-3xl bg-slate-300 w-[40px]'  >-</button><button className='border-none font-bold bg-slate-300 text-3xl'>0</button><button className='border-none text-3xl font-bold bg-slate-300 w-[40px] text-blue-700' >+</button></td>
            <td className='font-bold'>$499</td>
          </tr>
          <tr className='border-b-2'>
            <td><img src={Applemac} alt="product" /></td>
            <td className='font-bold' colSpan={2}><center>Apple Macbook Pro</center></td>
            <td className='font-bold'>$998</td>
            <td colSpan={2}><button className='border-none font-bold text-blue-700 text-3xl bg-slate-300 w-[40px]' >-</button><button className='border-none font-bold bg-slate-300 text-3xl'>0</button><button className='border-none text-3xl font-bold bg-slate-300 w-[40px] text-blue-700' >+</button></td>
            <td className='font-bold'>$499</td>
          </tr>
          
               
        </tbody>
      </table>
      <div className= ' flex font-medium justify-around ' >
        <div  >
          <input type="text" placeholder='Voucher Code' className='mt-20 text-sm px-5 py-2.5 border-2 border-black' /><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-3 text-center mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Redeem</button>

        </div>
        <div>
      <table>
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
