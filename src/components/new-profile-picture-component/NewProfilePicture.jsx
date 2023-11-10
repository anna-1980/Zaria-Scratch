import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./new-profile-picture-component.module.scss";

const NewProfilePicture = () => {
  const [changePicture, setChangePicture] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    newPicture(formData);
    // return <Navigate to="/userProfile" />;
  };

  const { newPicture, uploaded } = useAuth();
  // if (uploaded) return <Navigate to="/userProfile" />;

  const handleClick = () => {
    setChangePicture(!changePicture)
  }
  return (
    <div className={`${styles['form-container']}`}>
      {/* <Link to={`/userProfile/uploadimg`}> */}
      <button onClick={handleClick} className={`${styles['form-container__paragraph']}`}>Change Profile Picture</button>

      {/* </Link> */}
  { changePicture ? (
        <form
        className="basicForm"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="formFields">
          <label htmlFor="Title">Upload Picture:</label>
          <input type="file" {...register("title", { required: true })} />
        </div>

        <button type="submit" className="submitButton">
          submit
        </button>

        <Link to={`/userProfile`}>
          <button className="backToUserProfile">
            &#x003C;
            <button className="tiptext">back to Profile</button>
          </button>
        </Link>
      </form>
  ):("")}
    </div>
  );
};

export default NewProfilePicture;
