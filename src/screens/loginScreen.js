import React from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, Link, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

const loginScreen = () => {
    // let location = useLocation();
   
  
  return (
    <> 
     <Link to={`/home`} >
            <button id='goBack'>Go Back</button>
            </Link>
        <form  autoComplete='off'>
          <div>
            <label htmlFor='email' >
              Email:
            </label>
            <input type='email'/>
          </div>
          <div>
            <label htmlFor='password'  >
              Password:
            </label>
            <input type='password'/>
          </div>
          <div>
            <small>
              Don't have an account? <Link to='/register'>Register</Link> instead
            </small>
          </div>
          <button type='submit'  >
            Log in
          </button>
        </form>


    </>
  )
}

export default loginScreen