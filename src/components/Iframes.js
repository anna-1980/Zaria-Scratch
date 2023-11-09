import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loggout from "./Loggout";

const Iframes = ({ projects }) => {
  const { isAuthenticated, isAdmin, deleteProject } = useAuth();
  let location = useLocation();
  const isAdminLoggedIn = isAdmin;
  const signedUser = localStorage.getItem("user");
  const {_id: adminId} = JSON.parse(signedUser);

  const onDeleteBtn = (id, adminId) => {
    // alert(`Are you sure you want to delete this project   ${id} ??`);
    // write a function to delete project with specific id
 
    console.log("ID >>>", id);
    console.log("USER ID >>>", adminId);
    deleteProject(id, adminId);
  };

  return (
    <div className="container-column">
      <div className="container">
        <div className="container">
          {isAuthenticated
            ? projects.map(({ _id, url, description, title }) => {
                return (
                  <div className="iFrameLinkContainer">
                    <button onClick={onDeleteBtn(_id)} className="btn-del">
                      X
                    </button>
                    <Link to={`/singleProject/${url.split("/")[4]}`} key={_id}>
                      <div className="color3">
                        <div className="container-column ">
                          <h1 className="projectTitle">Title: {title}</h1>
                          <iframe
                            className="thumbnail"
                            id="allFrames"
                            title="game"
                            src={`https://scratch.mit.edu/projects/${
                              url.split("/")[4]
                            }/embed`}
                          ></iframe>
                          <h1 className="projectDescription">{description}</h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            : projects.slice(0, 3).map(({ _id, url, description, title }) => {
                return (
                  <Link to={`/singleProject/${url.split("/")[4]}`} key={_id}>
                    <div className="color3">
                      <div className="container-column ">
                        <h1 className="projectTitle">Title: {title}</h1>
                        <iframe
                          className="thumbnail"
                          id="allFrames"
                          title="project"
                          src={`https://scratch.mit.edu/projects/${
                            url.split("/")[4]
                          }/embed`}
                        ></iframe>
                        <h1 className="projectDescription">{description}</h1>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
      {isAuthenticated ? (
        <div className="container-column">
          <Link to={`/userProfile`}>
            <button className="signInButton">User Profile</button>
          </Link>
          <Loggout />
        </div>
      ) : (
        <div className="container-column">
          <Link to={`/signin`}>
            <button className="signInButton">Sign In</button>
          </Link>
          <h5 className="pleaseSignIn">To see all projects please Sign in</h5>
        </div>
      )}
    </div>
  );
};

export default Iframes;
