import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Example() {
    return (
        <div className="w-full ">
            <div className="mx-auto w-full max-w-md rounded-2xl">
                <Disclosure className="flex justify-between" >
                    {({ open }) => (
                        <>


                            <Disclosure.Button className="flex w-full justify-between  px-4  text-left text-sm font-medium ">
                                <span className='text-lg font-bold ' >OFFER</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>


                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between  px-4  text-left text-sm font-medium ">
                                                <span className='text-lg font-bold text-black ' >Accessories</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                                                <ul>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >AirPort & Wireless</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >AppleCare Bags</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Shells & Sleeves</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Business & Security</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cables & Docks</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cameras & Video</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Car & Travel</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cases & Films</li>
                                                </ul>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </Disclosure.Panel>


                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between  px-4  text-left text-sm font-medium ">
                                                <span className='text-lg text-black font-bold ' >Category</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                                                <ul>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Mice & Keyboards</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Music Creation</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Networking & Server</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Mobiles</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Tablets</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Laptops</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Watches</li>
                                                </ul>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </Disclosure.Panel>


                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between  px-4  text-left text-sm font-medium ">
                                                <span className='text-lg font-bold text-black ' >Category</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 text-black`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                                                <ul className='' >
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Charging Devices</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Connected Home</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Device Care</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Display & Graphic</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Fitness & Sport</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Headphones</li>
                                                    <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >HealthKit</li>
                                                </ul>
                                            </Disclosure.Panel>
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
