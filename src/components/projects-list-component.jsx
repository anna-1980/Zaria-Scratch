import React from "react";
import { useAuth } from "../context/AuthContext";

const ProjectsListComponent = ({ projects }) => {
  const { deleteProject } = useAuth();

  const signedUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const onDeleteBtn = (id, user) => {
    console.log("ID >>>", id);
    console.log("USER ID >>>", signedUser);
    deleteProject(id, signedUser);
  };

  return (
    <div className="projects-list">
      {projects.map(({ _id, url, description, title }) => {
        return (
          <div className="projects-list__item" key={_id}>
            <h4>Title: {title}</h4>

            <h3 style={{ color: "green" }}>{description}</h3>
            <button
              type="button"
              onClick={() => onDeleteBtn(_id)}
              className="btn-list-del"
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsListComponent;
