import './styles/main.css';
import { Routes, Route } from 'react-router-dom';
import { Outlet, NavLink } from "react-router-dom";
import Iframes from './components/Iframes';
import BackToTopButton from './components/BackToTopButton';
import SingleProject from './components/SingleProject';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {

  const [projects, setProjects] = useState([
    '695288431', '646527705', '631036567'
  ]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  console.log("scroll")
  }
  return (
    <div className='homepage maindiv'>
    
      
      <header>
       
      <div className="container-column">
        <h2 id="top">
            Zaria's   
          </h2>
          <h2>
            Scratch projects
          </h2>
      </div>
      <Routes>           
            <Route index element= {<h1></h1>} />
            <Route path='/home' element= {< Iframes  projects={projects}/>} />       
            <Route path='/singleProject/*' element= {<SingleProject  projects={projects}/>} />       
      </Routes>
       
      </header>
        {/* < Iframes /> */}

 
       
    </div>
    
  );
}

export default App;
