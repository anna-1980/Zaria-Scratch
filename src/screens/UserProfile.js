import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
 

const UserProfile = () => {

let location = useLocation();
let displayButton = location.pathname !== `/userProfile/upload`
 
const {isAuthenticated, user, token } = useAuth();
//  if (!token) return <Navigate to="/signin"/> 
 const signedUser = localStorage.getItem('user') 
? JSON.parse(localStorage.getItem('user'))
: {} ;
console.log(signedUser);
 
 
  return (
    <>
      <div className="spacer2rem"></div>
      <h4>Welcome: {signedUser.name}</h4> 
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

 