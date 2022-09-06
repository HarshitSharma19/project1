import { useState } from 'react'
import { Switch } from '@headlessui/react'
import axios from 'axios'

export default function StatusBtn({flag , id}) {
  const [enabled, setEnabled] = useState(flag)
  async function Api(x , y){
    await axios.put(`http://localhost:5000/admin-panel/brand/view/${y}`,{
      status: !x
    },
    {
      headers: {
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7IkVtYWlsIjoiaGFyc2hpdHNoYXJtYTcyNEBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImhhcnNoaXQxMjMifSwiaWF0IjoxNjYxNDkxNTE2fQ.hw5TIPPnTON4IlgzewFl9WioJk9nrfvRF1BDBAqjvTg"
      }
    }).then((success)=>{
      console.log(success)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <Switch
      checked={enabled}
      onClick={()=>{Api(enabled , id)}}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex  h-6 w-12 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-4 w-4  transform rounded-full bg-white`}
      />
    </Switch>
  )
}