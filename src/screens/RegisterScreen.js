import React from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
//rememebr components 

const RegisterScreen = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const userError =  errors.name && <div className='formValidation'>name is required</div> ;
  
  const { isAuthenticated, signup } = useAuth();
  
  const onSubmit = (formData) => signup(formData);
  
  if( isAuthenticated ) return <Navigate to="/userProfile"/>   //if user is logged in already it redirects to userProfile

  return (
    <>
    <h1 className='spacer4rem'>Registration</h1>
     
        <form  
        className='registrationForm, basicForm'
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}>
            <div className='formFields'>
                <label htmlFor='Name' >
                Name:
                </label>
                <input type='text' className={errors.name ? 'inputError' : 'input'} {...register('name', {required: true})}/>
                {errors.name && <div className='formValidation'>name is required </div>}
            </div>
            <div className='formFields'>
                <label htmlFor='email' >
                Email:
                </label>
                <input type='email' className={errors.name ? 'inputError' : 'input'}{...register('email', {required: true}) }/>
            {errors.email && <div className='formValidation'>Email is required </div>}
            </div>
            <div className='formFields'>
                <label htmlFor='password'>
                Password:
                </label>
                <input type='password' className={errors.name ? 'inputError' : 'input'} {...register('password', {required: true})}/>
                {errors.password && <div className='formValidation'>Password is required</div>}
            </div>
            <div className='textAlignCenter'>
                <h5>
                Have an account? <Link to='/signin'>Sign in</Link> 
                </h5>
            </div>
            <button type='submit' className='submitButton' >
            submit
            </button>
            </form>
     {/* after successful registration take user to userProfile screen       
     {token && <Navigate to="/userProfile"/> }    */}
    <Link to={`/home`} className='goBackButtonCenter'>
            <button id='goBack'>Go Back</button>
            </Link>
    </>
  )
}

export default RegisterScreen
