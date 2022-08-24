import React from 'react'
import { useParams } from 'react-router-dom'

export default function AddCategory() {
  const Page = useParams()
  return (
    (Page.id)?
    <>
      <div>UPDATE</div>
    </>
    :
    <>
      <div>ADD cat</div>
    </>
  )
}
