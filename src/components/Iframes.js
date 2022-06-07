import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from "react-router";
import { useAuth } from '../context/AuthContext';
import Loggout from './Loggout';

const Iframes = ({projects}) => {
  const { isAuthenticated, user } = useAuth(); 
 
  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location);
  let _id = `646527705`
 
  return (
    <div className='container-column'>
     
     <div className="container">
         
            <div className="container">
      
               {
          isAuthenticated ? 
            projects.map(({id, url, description, title}) => {
            return (
               
              <Link to={ `/singleProject/${url.split('/')[4]}` } key={_id}>
              <div className='color3'>
              <div className='container-column '>
                <h1 className='projectTitle'>Title: {title}</h1>
              <iframe  
                  className="thumbnail"
                  id="allFrames"
                  title='game' 
                  src= {`https://scratch.mit.edu/projects/${url.split('/')[4]}/embed`}
                  ></iframe>
              <h1 className='projectDescription'>{description}</h1>

              </div>
              </div>
            </Link>
            );
          }) 
          : 
          projects.slice(0, 3).map(({id, url, description, title}) => {
            return (
               
              <Link to={ `/singleProject/${url.split('/')[4]}` } key={_id}>
              <div className='color3'>
              <div className='container-column '>
                <h1 className='projectTitle'>Title: {title}</h1>
              <iframe  
                  className="thumbnail"
                  id="allFrames"
                  title='game' 
                  src= {`https://scratch.mit.edu/projects/${url.split('/')[4]}/embed`}
                  ></iframe>
              <h1 className='projectDescription'>{description}</h1>

              </div>
              </div>
            </Link>
            );
          }) 
        }
    
       

    </div>
    </div>
        {
          isAuthenticated ? 
         <div className='container-column'>
          <Link to={`/userProfile`}>
          <button  className='signInButton'>User Profile</button>
        </Link>
        < Loggout />
         </div>
          : 
          <div className='container-column'>
          <Link to={`/signin`}>
            <button  className='signInButton'>Sign In</button>
          </Link>
          <h5 className='pleaseSignIn'>To see all projects please Sign in</h5>
          </div>
        }

    </div>
  );
};

export default Iframes
 