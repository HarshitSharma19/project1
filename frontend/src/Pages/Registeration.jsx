import { Link } from 'react-router-dom'
export default function Registeration() {
  return (
    <>

      <div className="flex min-h-full   items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full shadow-2xl shadow-black max-w-md space-y-8">
          <div className='mb-[10%]'>
            <img
              className="mx-auto h-12 w-auto"
              src=""
              alt=""
            />
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              Register your account
            </h2>

          </div>
          <form className="mt-8 space-y-6  " action="#" method="POST">
            <input required type="hidden" name="remember" defaultValue="true" />
            <div className="mt-4 p-5 ">
              <div className='' >
                <label className="block" for="Name">Name</label>
                <input required type="text" placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div className="  mt-4">
                <label className="block" for="email">Email</label>
                <input required type="text" placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input required type="password" placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div className="mt-4">
                <label className="block">Confirm Password</label>
                <input required type="password" placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <span className="text-xs text-red-400">Password must be same!</span>
            </div>


            <div className="text-sm flex justify-center">
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Go to Home page
              </Link>
            </div>
            <div className='flex' >
              <button
                type="submit"
                className=" w-[300px] m-auto mb-5 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
