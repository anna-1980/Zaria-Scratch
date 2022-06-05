import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from "react-router";
import { useAuth } from '../context/AuthContext';
import Loggout from './Loggout';

const Iframes = ({projects}) => {
  const { isAuthenticated, user } = useAuth(); 
  let projectNumber = [];
  let url = `${
    projects.map(({author, _id, url, description, title}) => {
      return  projectNumber.push(url.split('/')[4]) 
    })
  }`;
  console.log(projectNumber)
  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  // console.log(projectNumber);
  // console.log(url);
  let _id = `646527705`
  // let url = `https://scratch.mit.edu/projects/695288431/embed`
  // let url = `https://science-arcade.netlify.app/Games`

  return (
    <div>
     
     <div className="container">

        {/* <Link to={'/singleProject/'} key={_id}>
            <div className="iframeDiv" >
                <iframe  
                    className="thumbnail"
                    id="allFrames"
                    title='game' 
                    src={url}
                    ></iframe>
            </div></Link> */}

         
            <div className="container">
            {projectNumber.map((id) => {
              return (
                 
                <Link to={ `/singleProject/${id}` } key={_id}>
                
                <iframe  
                    className="thumbnail"
                    id="allFrames"
                    title='game' 
                    src= {`https://scratch.mit.edu/projects/${id}/embed`}
                    ></iframe>
              
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
 