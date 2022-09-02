import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="w-full px-4  ">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
      <Disclosure  >
          {({ open }) => (
            <>
              <Disclosure.Button className="  w-full  font-bold text-black ">
                <span className='float-left ' >Store</span>
                <ChevronLeftIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5   text-black`}
                /> 
              </Disclosure.Button>
              <Disclosure.Panel className=" flex  pt-4 pb-2 text-sm text-gray-500">
              <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  text-black  focus-visible:ring-opacity-75">
                <span>Accessories</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-0 transform' : ''
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">AirPort & Wireless</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">AppleCare Bags</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Shells & Sleeves</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Shells & Sleeves</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Business & Security</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Cables & Docks</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Cameras & Video</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Car & Travel</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Cases & Films</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Category</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-0 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Charging Devices</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">AppleCare Bags</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Connected Home</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Device Care</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Display & Graphic</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Fitness & Sport</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Cameras & Video</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Headphones</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">HealthKit</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-black  focus-visible:ring-opacity-75">
                <span>Category</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Mice & Keyboards</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Music Creation</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Networking & Server</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Mobiles</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Tablets</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Laptops</Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">Watches</Disclosure.Panel>
            </>
         )}
        </Disclosure>



              </Disclosure.Panel>
              
            </>
          )}
        </Disclosure>
              </div>
    </div>
  )
}
