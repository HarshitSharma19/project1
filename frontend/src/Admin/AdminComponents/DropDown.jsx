
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

export default function DropDown() {
  return (
    <div className="w-full h-[92vh] bg-gray-100  px-4 pt-10">
      <div className="mx-auto w-full max-w-md bg-gray-100  p-2">
        <Disclosure>
          {({ open }) => ( 
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-200 px-4 py-1 text-left text-base font-medium  text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Categories</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-360 transform' : 'rotate-180 transform'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-2 pb-1 text-gray-700">
              <Link to='/admin-panel/category/add'><button className='flex w-48 rounded-md py-1  pl-2 text-left text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> Add
                  </button></Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-2 pb-2 text-gray-700">
              <Link to='/admin-panel/category/view'><button className='flex w-48 rounded-md py-1 pl-2 text-left text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>View
                  </button></Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


        

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-200 px-4 py-1 text-left text-base font-medium text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span>Brand</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-360 transform' : 'rotate-180 transform'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-2 pb-1 text-gray-700">
                  <Link to='/admin-panel/brand/add'><button className='flex w-48  rounded-md py-1 pl-2 text-left text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> Add
                  </button></Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-2 pb-2 text-gray-700">
                 <Link to='/admin-panel/brand/view'><button className='flex w-48 rounded-md py-1 pl-2 text-left   text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>View
                  </button></Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-200 px-4 py-1 text-left text-base font-medium text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span>Products</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-360 transform' : 'rotate-180 transform'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-2 pb-1 text-gray-700">
                  <Link to='/admin-panel/products/add'><button className='flex w-48  rounded-md py-1 pl-2 text-left text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> Add
                  </button></Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-2 pb-2 text-gray-700">
                 <Link to='/admin-panel/products/view'><button className='flex w-48 rounded-md py-1 pl-2 text-left   text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>View
                  </button></Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>



        

      </div>
    </div>
  )
}

