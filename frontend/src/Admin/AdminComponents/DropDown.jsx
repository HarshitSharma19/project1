
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function DropDown(props) {
  return (
    <div className="w-full px-4 pt-10">
      <div className="mx-auto w-full max-w-md bg-gray-100  p-2">
        <Disclosure>
          {({ open }) => ( 
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium  text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Categories</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-1 text-gray-700">
                  <button onClick={props.eventfirst} className='flex w-48 rounded-md py-1  pl-2 text-left text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> Add
                  </button>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-3 pb-2 text-gray-700">
                  <button onClick={props.eventsecond} className='flex w-48 rounded-md py-1 pl-2 text-left text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>View
                  </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-200 px-4 py-2 text-left text-base font-medium text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span>Products</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-1 text-gray-700">
                  <button onClick={props.eventthird} className='flex w-48  rounded-md py-1 pl-2 text-left text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> Add
                  </button>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-3 pb-2 text-gray-700">
                  <button onClick={props.eventfourth} className='flex w-48 rounded-md py-1 pl-2 text-left text-base hover:bg-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>View
                  </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

