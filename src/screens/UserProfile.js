import { Outlet, Link, useLocation } from "react-router-dom";

const UserProfile = () => {
let location = useLocation();
let displayButton = location.pathname !== `/userProfile/upload`
 
 
    const isAuthenticated = true;
     console.log(displayButton)

  return (
    <>
      <h1>This is USER profile</h1>
      <div>isAuthenticated ? : ;</div>
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
    </>
  )
}

export default UserProfile