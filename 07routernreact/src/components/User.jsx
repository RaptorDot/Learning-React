import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} =  useParams()
  return (
    <div className=' bg-amber-800 text-white , text-3xl p-3'>User: {id}</div>
  )
}

export default User