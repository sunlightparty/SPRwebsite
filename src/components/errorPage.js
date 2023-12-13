import React from 'react'
import { Link } from 'react-router-dom'

const errorPage = () => {
  return (
    <div className='h-screen fle'>
      <p className='pt-44'> The page you're looking for doesn't exist </p>
      <Link to={'/'}>
        <button > Click here to go back</button>
      </Link>
    </div>
  )
}

export default errorPage
