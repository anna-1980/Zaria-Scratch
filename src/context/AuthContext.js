import { useState, useEffect, useContext, createContext } from "react";
import { toast } from "react-toastify";

import axios from "axios";

// use context to get the data and then import it to which ever element/component you need to

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  //to persist loggedIn user on refresh of the page, so when components mount again you have to put retrieving user data and token in useEffect, so it happens again on component mount

  useEffect(() => {
    const alreadySignedIn = async () => {
      try {
        setLoading(true);
        const { data: user } = await axios.get(
          `${process.env.REACT_APP_API}/api/auth/me`,
          { headers: { Authorization: token } }
        );
        setUser(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        if (user.isAdmin) {
          console.log("there is admin");
          setIsAdmin(true);
        } else {
          console.log("NOT and admin");
        }
        setToken(token);
        setIsAuthenticated(true);

        setLoading(false);
        console.log(user.isAdmin);
        // console.log( { AuthContext: { token} });
      } catch (error) {
        //   toast.error(error.response?.data.error || error.message);
        console.log(error);
        setLoading(false);
      }
    };

    token && alreadySignedIn();
  }, [token]);

  //to register a new user
  const signup = async (formData) => {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/signup`,
        formData
      );
      const { data: user } = await axios.get(
        `${process.env.REACT_APP_API}/api/auth/me`,
        { headers: { Authorization: token } }
      );
      setUser(user);
      localStorage.setItem("token", token);
      setToken(token);
      setLoading(false);
      // console.log( { AuthContext: { token} });
    } catch (error) {
      //   toast.error(error.response?.data.error || error.message);
      console.log(error);
      setLoading(false);
    }
  };

  //to allow user loggin / sign in
  const signin = async (formData) => {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/signin`,
        formData
      );
      const { data: user } = await axios.get(
        `${process.env.REACT_APP_API}/api/auth/me`,
        { headers: { Authorization: token } }
      );
      setUser(user);
      setToken(token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setLoading(false);
    } catch (error) {
      //   toast.error(error.response?.data.error || error.message);
      console.log(error);
      toast.error(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.setItem("isAdmin", false);
    setIsAdmin(false);
    setUser();
    setIsAuthenticated(false);
  };

  const newProject = async (formData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/projects`,
        formData,
        { headers: { Authorization: token } }
      );
      console.log(data);
      setLoading(false);
      setUploaded(true);
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
      console.log(error);
      setLoading(false);
    }
  };

  const deleteProject = async (id, user) => {
    console.log("DEL REQ BODY", id);
    console.log("DEL USER", user);

    try {
      setLoading(true);
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/projects/${id}`,
        { headers: { Authorization: token } },
        user
      );
      console.log(data);
      setLoading(false);
      setUploaded(true);
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
      console.log(error);
      setLoading(false);
    }
  };

  const newPicture = async (formData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/uploads`,
        formData,
        { headers: { Authorization: token } }
      );
      console.log(data);
      setLoading(false);
      setUploaded(true);
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
      console.log(error);
      setLoading(false);
    }
  };

  // provider allows you to wrap anycomponents and every child component has access to the data
  //all routes in App.js are now wrapped in AuthState component which provides the CONTEXT
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signup,
        signin,
        signout,
        user,
        loading,
        token,
        isAdmin,
        newProject,
        newPicture,
        deleteProject,
        uploaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
