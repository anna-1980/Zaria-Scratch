import { Outlet, Link, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Loggout from "../components/Loggout";
import BasicForm from "../components/BasicForm.js";

const UserProfile = () => {
 
const {isAuthenticated, isAdmin } = useAuth();
//  if (!token) return <Navigate to="/signin"/> 
 const signedUser = localStorage.getItem('user') 
? JSON.parse(localStorage.getItem('user'))
: {} ;
const isAdminLoggedIn = isAdmin ;
// const isAdminLoggedIn = localStorage.getItem('isAdmin') 
// ? JSON.parse(localStorage.getItem('isAdmin')) : {};
// console.log(isAdminLoggedIn);
 
  return (
    <>
      <div className="spacer2rem"></div>
      <h3>Welcome: 
          
          </h3>
       <div className="userName">
          <h4> {signedUser.name}
          
          </h4>
          < Loggout />
      </div> 
      
      {isAuthenticated ? 
      (
        <div>
          
          { isAdminLoggedIn ? (
            <Link to={`/userProfile/upload`}>
              <button className="signInButton" id="hideMe">Add Project</button>
              
            </Link>
          ) : <div className="container-column">
            <Link to={`/home`} >
                <button id='goBackUserProfile'>Go See All Projects</button>
            </Link>
            <p className="msgForUser">Welcome dear user, if you like my projects <br></br>write to me. I would be happy to chat</p>
            <BasicForm />
          </div>
          }
    
            
          
        <Outlet/>
        </div>
        
      )
      : <Navigate to="/signin"/>}
      
    {/* <Link to={`/home`} >
        <button id='goBack'>Go Back</button>
    </Link> */}
    </>
  )
}

export default UserProfile

 