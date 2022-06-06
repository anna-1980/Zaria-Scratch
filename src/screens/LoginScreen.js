import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from '../components/Loader.js'

const LoginScreen = () => {
  const {
    register, 
    handleSubmit, 
    watch, formState: {errors}} = useForm();
  const { isAuthenticated, signin, loading } = useAuth();
  const onSubmit = (formData) => signin(formData);
  if(loading) return <Loader />
  if( isAuthenticated ) return <Navigate to="/userProfile"/>   //if user is logged in already it redirects to userProfile
  
  return (
    <> 
    <div className='spacer4rem'></div>
    
        <form  className='basicForm' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
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
                {errors.password && <div className='formValidation'>Password is required</div>}
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

 
