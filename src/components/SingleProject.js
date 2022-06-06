import React from 'react'
 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from "react-router";
 


const SingleProject = ({projects}) => {
    let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();

const singleProject = location.pathname ? location.pathname.split('/')[2] : 1;
console.log(location)
console.log(params)
console.log(projects)
  return (
    <div> 

     <div className="container " id="singleProjectContainer">
                <iframe  src={`https://scratch.mit.edu/projects/${singleProject}/embed`}></iframe>
     
        <Link to={`/home`} >
            <button >Go Back</button>
            </Link>
       
     
     
        
     </div>
       
       
  
    </div>
  )
}

export default SingleProject