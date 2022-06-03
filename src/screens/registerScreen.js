import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterScreen = () => {
 
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const userError =  errors.name && <div className='formValidation'>name is required</div> ;
  const onSubmit = async (data) => {
    
    try {
      const { data:{token} } = await axios.post(`${process.env.REACT_APP_API}/api/auth/signup`, data)
      console.log(token);
    }catch (error){
      console.log(error);
    }
  }
  return (
    <>
    <h1 className='spacer4rem'>Registration</h1>
     
        <form  
        className='registrationForm' 
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
                {errors.password && <div className='formValidation'>Password id required</div>}
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
     
    <Link to={`/home`} >
            <button id='goBack'>Go Back</button>
            </Link>
    </>
  )
}

export default RegisterScreen