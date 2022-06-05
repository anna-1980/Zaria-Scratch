import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
    <h3>Page not found</h3>
        <Link to={`/home`} >
        <button id='goBack'>Go Back</button>
    </Link>
    </>
  )
}

export default NotFound