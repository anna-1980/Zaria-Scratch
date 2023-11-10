import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthState from "./context/AuthContext";
import Iframes from "./components/Iframes";
import BackToTopButton from "./components/BackToTopButton";
import Loader from "./components/Loader";
import SingleProject from "./components/SingleProject";
import LoginScreen from "./screens/LoginScreen"; //caps
import RegisterScreen from "./screens/RegisterScreen";
import NotFound from "./screens/NotFound";
import UserProfile from "./screens/UserProfile";
import NewProject from "./screens/NewProject";
import NewProfilePicture from "./components/new-profile-picture-component/NewProfilePicture";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProjects = async () => {
    try {
      // const { data } = await axios.get("http://localhost:5000/api/projects/");
      const { data } = await axios.get(
        "https://sleepy-sea-73067.herokuapp.com/api/projects"
      );
      setLoading(true);
      setProjects(data);
      setLoading(false);
    } catch (error) {
      return alert("Sorry something went wrong getting the projects");
    }
  };
  useEffect(() => {
   
    getProjects();
  }, [projects]);

  return (
    <div className="homepage maindiv">
      <header>
        <div className="container-column">
          <Link style={{ textDecoration: "none" }} to={`/home`}>
            <h2 id="top">
              Gamerette's
              <div className="logo"></div>
            </h2>
            <h2>Scratch projects</h2>
          </Link>
          {loading === true ? <Loader /> : <></>}
        </div>
        <AuthState>
          <ToastContainer />
          <Routes>
            <Route path="/" />
            <Route index element={<Iframes projects={projects} />} />
            <Route
              path="/home"
              element={<Iframes projects={projects} loading={loading} />}
            />
            <Route
              path="/singleProject/*"
              element={
                <SingleProject
                  projects={projects}
                  setProjects={setProjects}
                  setLoading={setLoading}
                  loading={loading}
                />
              }
            />
            <Route path="/signin" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            {/* //-------protected route -------// */}
            <Route path="/userProfile" element={<UserProfile projects={projects}/>}>
              <Route path="/userProfile/upload" element={<NewProject />} />
              {/* <Route path='/userProfile/uploadimg' element={<NewProfilePicture />}/> */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthState>
      </header>

      <BackToTopButton />
    </div>
  );
}

export default App;
