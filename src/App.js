import './styles/main.css';
import { Routes, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Iframes from './components/Iframes';
import BackToTopButton from './components/BackToTopButton';
import SingleProject from './components/SingleProject';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import NotFound from './screens/NotFound'
import UserProfile from './screens/UserProfile';
import NewProject from './screens/NewProject';

function App() {

  // const [projects, setProjects] = useState([
  //   '699241050',
  //   '566020141',
  //   '585075144',
  //   '683124108',
  //   '697898958',
  //   '695288431', 
  //   '646527705'])  
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  console.log("scroll")
  }

  useEffect(() => {
    const getProjects = async () => {
    try {
      // const { data } = await axios.get("http://localhost:5000/api/projects/");
      const { data } = await axios.get("https://sleepy-sea-73067.herokuapp.com/api/projects");
      setLoading(true);
      setProjects(data);
      console.log(`get all games: ${data}`);
      setLoading(false);
    } catch (error) {
      return alert ("Sorry something went wrong getting the games")
    }
  };
  getProjects();
  }, []);


  return (
    <div className='homepage maindiv'>
    
      
      <header>
       
      <div className="container-column">
        <h2 id="top">
            Zaria's   
            <div className="logo"></div>
          </h2>
          <h2>
            Scratch projects
          </h2>
         
          
      </div>
      <Routes>           
            <Route path='/'/>
              <Route index element= {< Iframes projects={projects}/>} />
              <Route path='/home' element= {< Iframes  projects={projects}  />} />       
              <Route path='/singleProject/*' element= {<SingleProject  
              projects={projects} 
              setProjects={setProjects} 
              setLoading = {setLoading} 
              loading= {loading}/>} /> 
              <Route path='/signin' element={<LoginScreen />}/>      
              <Route path='/register' element={<RegisterScreen />}/>      
              <Route path='/userProfile' element={<UserProfile />}> 
                  <Route path='/userProfile/upload' element={<NewProject />}/>
              </Route>
              <Route path='*' element={<NotFound />}/>      
      </Routes>
       
      </header>
        {/* < Iframes /> */}

        <BackToTopButton />   
     
    </div>
    
  );
}

export default App;
