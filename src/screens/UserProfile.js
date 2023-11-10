import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loggout from "../components/Loggout";
import BasicForm from "../components/BasicForm.js";
import ProjectsListComponent from "../components/projects-list-component.jsx";

const UserProfile = ({projects}) => {
  const { isAuthenticated, isAdmin } = useAuth();
  const signedUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  const isAdminLoggedIn = isAdmin;
  // const isAdminLoggedIn = localStorage.getItem('isAdmin')
  // ? JSON.parse(localStorage.getItem('isAdmin')) : {};
  // console.log(isAdminLoggedIn);

  console.log("FROM USER PROFILE", projects);
  return (
    <>
      <div className="spacer2rem"></div>
      <h3>Welcome:</h3>
      <div className="userName">
        <h4> {signedUser.name}</h4>
        <Loggout />
      </div>

      {isAuthenticated ? (
        <div className="container-column">
          
          {isAdminLoggedIn ? (
            <div className="container-column">
              {/* <NewProfilePicture /> */}
              <div className="spacer2rem"></div>
            <Link to={`/userProfile/upload`}>
              <button  >
                Add Project
              </button>
            </Link>
            <div className="spacer2rem"></div>
              <h4>List of projects</h4>
      
            <Outlet />
            <ProjectsListComponent projects={projects} />
            </div>
          ) : (
            <div className="container-column">
              <Link to={`/home`}>
                <button id="goBackUserProfile">Go See All Projects</button>
              </Link>
              <p className="msgForUser">
                Welcome dear user, if you like my projects <br></br>write to me.
                I would be happy to chat
              </p>
               
              <BasicForm />
              
            </div>
          )}

        </div>
      ) : (
        <Navigate to="/signin" />
      )}

      {/* <Link to={`/home`} >
        <button id='goBack'>Go Back</button>
    </Link> */}
    </>
  );
};

export default UserProfile;
