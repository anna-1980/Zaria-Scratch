import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Loggout = () => {
    const { isAuthenticated, signout } = useAuth();
    // console.log(isAuthenticated)
  return (
    <div>
          {
          isAuthenticated ? 
          <div  className='logout' onClick={signout}>(Logout)</div>
          : 
          <Link to={`/signin`}>
          <button  className='signInButton'>Sign In</button>
        </Link>
        }
    </div>
  )
}

export default Loggout;