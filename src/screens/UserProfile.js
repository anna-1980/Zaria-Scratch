import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Loggout from "../components/Loggout";

const UserProfile = () => {

let location = useLocation();
let displayButton = location.pathname !== `/userProfile/upload`
 
const {isAuthenticated, user, token, isAdmin } = useAuth();
//  if (!token) return <Navigate to="/signin"/> 
 const signedUser = localStorage.getItem('user') 
? JSON.parse(localStorage.getItem('user'))
: {} ;
// console.log(user);
 
  return (
    <>
      <div className="spacer2rem"></div>
       <div className="userName">
          <h4>Welcome: {signedUser.name}
          
          </h4>
          < Loggout />
      </div> 
      
      {isAuthenticated ? 
      (
        <div>
          
          { displayButton ? (
            <Link to={`/userProfile/upload`}>
              <button className="signInButton">Add Project</button>
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

 