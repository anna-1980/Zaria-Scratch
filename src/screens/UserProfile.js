import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {

let location = useLocation();
let displayButton = location.pathname !== `/userProfile/upload`
 
const {isAuthenticated, user } = useAuth();
 
 
 
  return (
    <> 
      <div className="spacer2rem"></div>
      <h4>Welcome: {user.name}</h4> 
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

 