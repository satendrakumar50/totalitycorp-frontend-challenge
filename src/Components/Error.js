import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err=useRouteError();
  //console.log(err)
  return (
    <div>
      <li className='text-red-500'>Status: {err.status}</li>
      <li className='text-red-500'>Error: {err.statusText}</li>
    </div>
  )
}
export default Error