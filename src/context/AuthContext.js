import { useState, useEffect,useContext, createContext} from 'react';
import { toast } from 'react-toastify';

import axios from 'axios';

// use context to get the data and then import it to which ever element/component you need to

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
const AuthState = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  //to persist loggedIn user on refresh of the page, so when components mount again you have to put retrieving user data and token in useEffect, so it happens again on component mount
  useEffect( () => {
    const alreadySignedIn = async () => {
      try {
        setLoading(true); 
        const { data: user }= await axios.get(`${process.env.REACT_APP_API}/api/auth/me`,
        { headers: { Authorization: token}});
        setUser(user);       
        localStorage.setItem('token', token);
        setToken(token);
        setIsAuthenticated(true);
        setLoading(false); 
        // console.log( { AuthContext: { token} });
      } catch (error) {
      //   toast.error(error.response?.data.error || error.message);
        console.log(error);
        setLoading(false);
      }
    }
     
    token && alreadySignedIn();
  }, [token]) 

  //to register a new user
    const signup = async  formData  => {
      try {
        setLoading(true); 
        const {
          data: { token }
        } = await axios.post(`${process.env.REACT_APP_API}/api/auth/signup`, formData);
        const { data: user }= await axios.get(`${process.env.REACT_APP_API}/api/auth/me`,
        { headers: { Authorization: token}});
        setUser(user);       
        localStorage.setItem('token', token);
        setToken(token);
        setIsAuthenticated(true);
        setLoading(false); 
        // console.log( { AuthContext: { token} });
      } catch (error) {
      //   toast.error(error.response?.data.error || error.message);
        console.log(error);
        setLoading(false);
      }
     
    
     };
   
    //to allow user loggin / sign in
    const signin = async  formData  => {
      try {
        setLoading(true); 
        const {
          data: { token }
        } = await axios.post(`${process.env.REACT_APP_API}/api/auth/signin`, formData);
        const { data: user }= await axios.get(`${process.env.REACT_APP_API}/api/auth/me`,
        { headers: { Authorization: token}});
        setUser(user);
        setToken(token);
        localStorage.setItem('token', token );
        localStorage.setItem('user', JSON.stringify(user) );
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
      //   toast.error(error.response?.data.error || error.message);
        console.log(error);
        toast.error(error.response?.data.error || error.message);
        setLoading(false);
      }
     
    
    };

    // provider allows you to wrap anycomponents and every child component has access to the data
    //all routes in App.js are now wrapped in AuthState component which provides the CONTEXT
    return <AuthContext.Provider value={{isAuthenticated, signup, signin, user, loading, token}}>{children}</AuthContext.Provider>



  }



   
 

export default AuthState;