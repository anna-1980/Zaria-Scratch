import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const registerScreen = () => {
  return (
    <>
    <h1 className='spacer4rem'>Registration</h1>
     
        <form  autoComplete='off'>
            <div className='formFields'>
                <label htmlFor='Name' >
                Name:
                </label>
                <input type='text'/>
            </div>
            <div className='formFields'>
                <label htmlFor='email' >
                Email:
                </label>
                <input type='email'/>
            </div>
            <div className='formFields'>
                <label htmlFor='password'  >
                Password:
                </label>
                <input type='password'/>
            </div>
            <div className='textAlignCenter'>
                <h5>
                Have an account? <Link to='/signin'>Sign in</Link> 
                </h5>
            </div>
            <button type='submit' className='submitButton' >
            submit
            </button>
            </form>
     
    <Link to={`/home`} >
            <button id='goBack'>Go Back</button>
            </Link>
    </>
  )
}

export default registerScreen