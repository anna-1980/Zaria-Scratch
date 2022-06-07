import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from "react-router";
import { useAuth } from '../context/AuthContext';


const Iframes = ({projects}) => {
  const { isAuthenticated, user } = useAuth(); 
 
  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location);
  let _id = `646527705`
 
  return (
    <div>
     
     <div className="container">
         
            <div className="container">
            {projects.map(({id, url, description, title}) => {
              return (
                 
                <Link to={ `/singleProject/${url.split('/')[4]}` } key={_id}>
                <div className='container-column'>
                  <h1 className='projectTitle'>Title: {title}</h1>
                <iframe  
                    className="thumbnail"
                    id="allFrames"
                    title='game' 
                    src= {`https://scratch.mit.edu/projects/${url.split('/')[4]}/embed`}
                    ></iframe>
                <h1 className='projectDescription'>{description}</h1>

                </div>
              </Link>
              );
            })}
        </div>
        {
          isAuthenticated ? 
          <Link to={`/userProfile`}>
          <button  className='signInButton'>User Profile</button>
        </Link>
          : 
          <Link to={`/signin`}>
          <button  className='signInButton'>Sign In</button>
        </Link>
        }
       

    </div>
    

    </div>
  );
};

export default Iframes
 