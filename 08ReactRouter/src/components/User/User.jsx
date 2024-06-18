import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId} = useParams()
  return (
    <div className='text-white text-3xl p-4 bg-gray-600'>User: {userId}</div>
  )
}

export default User