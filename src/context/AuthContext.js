import { useState, useEffect,useContext, createContext} from 'react';
// import { toast } from 'react-toastify';
import axios from 'axios';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthState = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(false);
   
    const signup = async  formData  => {
      try {
         
        const {
          data: { token }
        } = await axios.post(`${process.env.REACT_APP_API}/api/auth/signup`, formData);
        
      } catch (error) {
      //   toast.error(error.response?.data.error || error.message);
        console.log(error);
      }
    };
   
   
    return <AuthContext.Provider value={{isAuthenticated, signup}}>{children}</AuthContext.Provider>



  }



   
 

export default AuthState;