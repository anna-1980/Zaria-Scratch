import React from "react";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth, isAdmin } from "../context/AuthContext";

const SingleProject = ({ projects }) => {
  let location = useLocation();
  const { isAuthenticated, isAdmin, deleteProject } = useAuth();

  const singleProject = location.pathname ? location.pathname.split("/")[2] : 1;

  return (
    <div>
      <div id="singleProjectContainer">
        <iframe
          title="project"
          className="singleProjectFrame"
          src={`https://scratch.mit.edu/projects/${singleProject}/embed`}
        ></iframe>
        <Link to={`/home`}>
          <button>Go Back</button>
        </Link>

        {isAuthenticated ? (
          <Link to={`/userProfile`}>
            <button className="backToUserProfile2 smaller">
              Profile
              <button className="tiptext">
                sent me a Message <br></br>from your Profile
              </button>
            </button>
          </Link>
        ) : (
          <Link to={`/userProfile`}>
            <button className="backToUserProfile2 smaller">
              Sign In
              <button className="tiptext">
                To sent a message <br></br>Sign In
              </button>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
