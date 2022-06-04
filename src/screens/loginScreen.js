import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useLocation, Link, Navigate } from 'react-router-dom';
import axios from 'axios'; 

const LoginScreen = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = async (data) => {
      
    try {
      const { data:{userName, body, user} } = await axios.get(`${process.env.REACT_APP_API}/api/auth/me`, data)
      console.log(data);
      // localStorage.setItem('accessToken', JSON.stringify(token));
    }catch (error){
      console.log(error);
    }
  }
  
  return (
    <> 
    <div className='spacer4rem'></div>
     <Link to={`/home`} >
            <button id='goBack'>Go Back</button>
            </Link>
        <form  autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <div className='formFields'>
            <label htmlFor='email' >
              Email:
            </label>
            <input type='email' className={errors.email ? 'inputError' : 'input'}{...register('email', {required: true})}/>
            {errors.email && <div className='formValidation'>Email is required </div>}
          </div>
          <div className='formFields'>
            <label htmlFor='password'  >
              Password:
            </label>
             <input type='password' className={errors.password ? 'inputError' : 'input'} {...register('password', {required: true})}/>
                {errors.password && <div className='formValidation'>Password id required</div>}
          </div>
          <div className='textAlignCenter'>
            <h5>
              Don't have an account? <Link to='/register'>Register</Link> instead
            </h5>
          </div>
          <button type='submit' className='submitButton' >
           Sign in
          </button>
        </form>

    <Link to={`/home`} >
        <button id='goBack'>Go Back</button>
    </Link>

    </>
  )
}

export default LoginScreen

// const [loading, setLoading] = useState(false);
// const [user, setUser] = useState({});

// useEffect(() => {
//   const getUser = async () => {
//   try {
//     // const { data } = await axios.get("http://localhost:5000/api/projects/");
//     const { data } = await axios.get("https://sleepy-sea-73067.herokuapp.com/api/auth/signin");
//     setLoading(true);
//     setUser(data);
//     console.log(`get the user: ${data}`);
//     setLoading(false);
//   } catch (error) {
//     return alert ("Sorry something went wrong getting your details")
//   }
// };
// getUser();
// }, []);