import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {

let location = useLocation();
let displayButton = location.pathname !== `/userProfile/upload`
console.log( useAuth );
const {isAuthenticated} = useAuth();
// const isAuthenticated = true;
 
  return (
    <> 
      <h1>This is USER profile</h1>
      {isAuthenticated ? 
      (
        <div>
          
          { displayButton ? (
            <Link to={`/userProfile/upload`}>
              <button className="signInButton">Add new</button>
            </Link>
          ) : <div></div>
          }
        
            <Link to={`/home`} >
                <button id='goBack'>Go Back</button>
            </Link>
          
        <Outlet/>
        </div>
      )
      : <Navigate to="/signin"/>}
    </>
  )
}

export default UserProfile

 