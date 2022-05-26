import React from 'react'
import BackToTopButton from './BackToTopButton';

const Iframes = () => {
  return (
    <div>
     
     <div className="container">
            <div className="project">
                <iframe className="thumbnail" src="https://scratch.mit.edu/projects/695288431/embed"    ></iframe>
            </div>
            <div className="project">
                <iframe className="thumbnail" src="https://scratch.mit.edu/projects/646527705/embed"    ></iframe>
            </div>
            <div className="project">
                <iframe className="thumbnail" src="https://scratch.mit.edu/projects/631036567/embed"    ></iframe>
            </div>
    </div>
     <BackToTopButton />   
     
     
    
    
    </div>
  )
}

export default Iframes