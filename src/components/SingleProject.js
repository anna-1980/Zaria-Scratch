import React from 'react'
 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from "react-router";
import { useEffect, useState } from "react";


const SingleProject = ({projects}) => {
    let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();

const singleProject = location.pathname ? location.pathname.split('/')[2] : 1;
console.log(location.pathname)
console.log(singleProject)
  return (
    <div> 
        <nav>
        <Link to={`/home`} >
            <button id='goBack'>Go Back</button>
            </Link>
        </nav>

     <div className="container " id="singleProjectContainer">
                <iframe  src={`https://scratch.mit.edu/projects/${singleProject}/embed`}></iframe>
     
     
        
     </div>
       
       
  
    </div>
  )
}

export default SingleProject