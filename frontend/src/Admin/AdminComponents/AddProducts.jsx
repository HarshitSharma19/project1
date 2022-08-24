import React from 'react'
import { useParams } from 'react-router-dom'

export default function AddProducts() {
  const Page = useParams()
  return (
    (Page.id)?
    <>
      <div>UPDATE</div>
    </>
    :
    <>
      <div>ADDproducts</div>
    </>
  )
}
