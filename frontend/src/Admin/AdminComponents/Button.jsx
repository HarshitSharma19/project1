import axios from 'axios';
import React from 'react'

export default function Button({Id , status}) {
  function ToggleClass(x, y) {
    if(y === true){
      console.log("working")
      axios.put(`http://localhost:4000/admin-panel/brand/view`,
      {
        status: false
      },
      {
        params:{
          id: x
        },
        headers:{
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7IkVtYWlsIjoiaGFyc2hpdHNoYXJtYTcyNEBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImhhcnNoaXQxMjMifSwiaWF0IjoxNjYxNDkxNTE2fQ.hw5TIPPnTON4IlgzewFl9WioJk9nrfvRF1BDBAqjvTg"
        }
      }
      ).then((success)=>{
        console.log(success)
      }).catch((error)=>{
        console.log(error)
      })
    }else{
      console.log("working")
      axios.put(`http://localhost:4000/admin-panel/brand/view`,
      {
        status: true
      },{
        params:{
          id: x
        },
        headers:{
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7IkVtYWlsIjoiaGFyc2hpdHNoYXJtYTcyNEBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImhhcnNoaXQxMjMifSwiaWF0IjoxNjYxNDkxNTE2fQ.hw5TIPPnTON4IlgzewFl9WioJk9nrfvRF1BDBAqjvTg"
        }
      }).then((success)=>{
        console.log(success)
      }).catch((error)=>{
        console.log(error)
      })
    }
  };
  return (
    (status)?
    <>
      <button className={'py-[4px] px-5 rounded-3xl text-white bg-blue-600 '} onClick={()=>ToggleClass(Id, status)}>Active</button>
    </>
    :
    <>
      <button className={'py-[4px] px-5 rounded-3xl text-white bg-yellow-500 '} onClick={()=>ToggleClass(Id, status)}>Inactive</button>
    </>
    
  );
}

