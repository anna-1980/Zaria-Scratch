import React from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, Link, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

const loginScreen = () => {
    // let location = useLocation();
   
  
  return (
    <> 
    <div className='spacer4rem'></div>
     <Link to={`/home`} >
            <button id='goBack'>Go Back</button>
            </Link>
        <form  autoComplete='off'>
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
              Don't have an account? <Link to='/register'>Register</Link> instead
            </h5>
          </div>
          <button type='submit' className='submitButton' >
           Sign in
          </button>
        </form>

    <Link to={`/home`} >
        <button id='goBack'>Go Back</button>
    </Link>

    </>
  )
}

export default loginScreen