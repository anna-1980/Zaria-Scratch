import { Outlet, Link, Navigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from "react";

const NewProject = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
   
  const onSubmit = (formData) => {
      newProject(formData)
      return <Navigate to="/home"/>};
 
  const {  newProject, uploaded  } = useAuth();
  
   if (uploaded) return <Navigate to="/home"/>;
   
  return (
    <div className="container-column">
        <div className='textAlignCenter'>
            <h3 >Add New Project </h3>
        </div>
        <form  className="basicForm" autoComplete='off' onSubmit={handleSubmit(onSubmit)} >
            <div className='formFields'>
                <label htmlFor='Title' >
                Title:
                </label>
                <input type='text' {...register('title', {required: true})}/>
            </div>
            <div className='formFields'>
                <label htmlFor='description' >
                Description:
                </label>
                <input type='text' cols="40" rows="10" {...register('description', {required: true})} />
            </div>
            <div className='formFields'>
                <label htmlFor='url'  >
                Link:
                </label>
                <input type='text'{...register('url', {required: true})}/>
            </div>
             
            <button type='submit' className='submitButton' >
            submit
            </button>
             
            <Link to={`/userProfile`} >
                <button className='backToUserProfile' >
                &#x003C;  
                    <button className="tiptext"  >back to Profile</button>
                </button>
            </Link>
            </form>


    </div>
  )
}

export default NewProject