import React from 'react'
import BackToTopButton from './BackToTopButton';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Iframes = ({projects}) => {
 


  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  console.log(projects);
  let _id = `646527705`
  // let url = `https://scratch.mit.edu/projects/695288431/embed`
  let url = `https://science-arcade.netlify.app/Games`

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
            {projects.map((id) => {
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
         


     
 
    </div>
    

    </div>
  );
};

export default Iframes
 